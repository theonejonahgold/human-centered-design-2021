<script lang="ts">
  import { calibrationSettings } from '$lib/stores/settings'
  import { createEventDispatcher } from 'svelte'
  import EmotionWebcam from '../molecules/EmotionWebcam.svelte'

  let value: string = ''
  let emotion: Emotion
  let webcamHidden = true

  const dispatch = createEventDispatcher<{
    submit: { message: string; emotion: Emotion }
  }>()
  const wordChoiceWords = new Map([
    ['godverdomme', 2],
    ['klootzak', 3],
    ['eikel', 2],
    ['fuck', 2],
    ['fucking', 2],
    ['potverdorrie', 1],
    ['potverdikkeme', 1],
    ['mongool', 5],
    ['kut', 2],
    ['kutkind', 4],
    ['kutjoch', 4],
    ['kutwijf', 4],
    ['kutmens', 4],
    ['kutgozer', 4],
    ['bitch', 3],
    ['klootviool', 2],
    ['teringleier', 3],
    ['tyfushond', 3],
    ['tyfuskind', 3],
    ['teringhond', 3],
    ['tyfusleier', 3],
    ['tering', 3],
    ['tyfus', 3],
    ['oprotten', 1],
    ['opzouten', 1],
    ['optyfen', 3],
    ['opkankeren', 5],
    ['opgetyft', 3],
    ['halvegare', 3],
    ['hoer', 4],
    ['slet', 4],
    ['rotjoch', 2],
    ['kankermongool', 10],
    ['kankerkind', 7],
    ['kankergezwel', 7],
    ['kankerhoer', 6],
    ['kanker', 5],
    ['trut', 3],
    ['tyf', 2],
  ])

  let startTime: Date | null | undefined
  let handicap = 0
  let webcamEmotion: string

  $: if (value.length === 1) startTime = new Date(Date.now())
  else if (!value.length) {
    startTime = null
    handicap = 0
  }

  $: {
    if (startTime) {
      const timeDifference =
        (Date.now() - startTime.getTime()) / 1000 - handicap * 0.1
      const words = value.split(' ')
      const wordCount = words.length
      const wpm = (wordCount / timeDifference) * 60
      const wpmDifferential = wpm / $calibrationSettings.wpm
      const wpmEmotion = parseTypingSpeedEmotion(wpmDifferential)
      const wordChoiceTotal = words
        .filter(word => wordChoiceWords.has(word.toLowerCase()))
        .reduce(
          (acc, curr) => acc + wordChoiceWords.get(curr.toLowerCase())!,
          0
        )
      const wordChoiceEmotion = parseWordChoiceEmotion(wordChoiceTotal)
      emotion = getEmotion(webcamEmotion, wpmEmotion, wordChoiceEmotion)
    }
  }

  function parseTypingSpeedEmotion(result: number) {
    if (result < 0.75) return 'langzaam'
    if (result < 1.25) return 'middel'
    if (result < 2) return 'snel'
    return 'supersnel'
  }

  function parseWordChoiceEmotion(result: number) {
    if (result < 2) return 'weinig'
    if (result < 5) return 'middel'
    if (result < 8) return 'veel'
    return 'extreem'
  }

  function getEmotion(
    webcamResult: string,
    typingSpeedResult: string,
    wordChoiceResult: string
  ): Emotion {
    if (webcamResult && webcamResult !== 'neutraal') {
      let emotion = webcamResult as Emotion
      switch (typingSpeedResult) {
        case 'langzaam':
          if (emotion === 'blij') emotion = 'voldaan'
          if (emotion === 'verdrietig') emotion = 'somber'
          if (emotion === 'boos') emotion = 'teleurgesteld'
          break
        case 'middel':
          if (emotion === 'blij') emotion = 'vrolijk'
          if (emotion === 'boos') emotion = 'bozig'
          if (emotion === 'bang') emotion = 'angstig'
          break
        case 'snel':
          if (emotion === 'verrast') emotion = 'geschrokken'
          break
        case 'supersnel':
          if (emotion === 'blij') emotion = 'verrukt'
          if (emotion === 'boos') emotion = 'razend'
          break
      }
      switch (wordChoiceResult) {
        case 'middel':
          if (emotion === 'blij') emotion = 'vrolijk'
          if (emotion === 'somber') emotion = 'verdrietig'
          if (emotion === 'teleurgesteld') emotion = 'bozig'
          break
        case 'veel':
          if (emotion === 'verrast') emotion = 'geschrokken'
          if (emotion === 'bozig') emotion = 'boos'
          if (emotion === 'verrukt') emotion = 'over the moon'
          break
        case 'superveel':
          if (emotion === 'boos') emotion = 'razend'
          if (emotion === 'blij') emotion = 'over the moon'
      }
      return emotion
    }

    switch (typingSpeedResult) {
      case 'langzaam':
        switch (wordChoiceResult) {
          case 'weinig':
            return 'neutraal'
          case 'middel':
            return 'geïrriteerd'
          case 'veel':
            return 'bozig'
          case 'extreem':
            return 'boos'
        }
      case 'middel':
        switch (wordChoiceResult) {
          case 'weinig':
            return 'blij'
          case 'middel':
            return 'geïrriteerd'
          case 'veel':
            return 'bozig'
          case 'extreem':
            return 'boos'
        }
      case 'snel':
        switch (wordChoiceResult) {
          case 'weinig':
            return 'verrast'
          case 'middel':
            return 'verrukt'
          case 'veel':
            return 'geschrokken'
          case 'extreem':
            return 'razend'
        }
      case 'supersnel':
        switch (wordChoiceResult) {
          case 'weinig':
            return 'verrukt'
          case 'middel':
            return 'verrast'
          case 'veel':
            return 'angstig'
          case 'extreem':
            return 'razend'
        }
      default:
        return 'neutraal'
    }
  }

  function keydownHandler(e: KeyboardEvent) {
    if (e.key === 'Backspace') {
      handicap += 1
      return
    }
  }

  function submitHandler() {
    dispatch('submit', { message: value, emotion })
    value = ''
    emotion = 'neutraal'
  }
</script>

<style lang="scss">
  form {
    display: block;
    position: absolute;
    bottom: 0;
    padding: 1rem;
    width: 100%;
    background: var(--text-secondary);

    + :global(div) {
      position: absolute;
      bottom: calc(5rem + 4px);
      left: 1rem;
      width: 20rem;
      padding: 1rem 1rem 0;
      background: var(--text-secondary);
      border-top-left-radius: var(--br);
      border-top-right-radius: var(--br);
    }
  }

  input {
    appearance: none;
    border: none;
    background: darken(#f4f4f4, 5);
    color: var(--text-primary);
    font-size: 1.5rem;
    line-height: 1em;
    padding: calc(0.5em - 1px) calc(0.75em - 1px);
    border-radius: var(--br);
    border: 1px solid darken(#f4f4f4, 5);
    margin: 0;
    width: 100%;
  }

  input:focus {
    outline: none;
    border-color: var(--primary);
  }

  button {
    appearance: none;
    border: none;
    box-sizing: border-box;
    padding: 0.25rem 0.5rem;
    background: var(--text-secondary);
    display: block;
    font-size: 1rem;
    line-height: 1rem;
    height: 2rem;
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    border-radius: var(--br);
    color: var(--text-primary);
    cursor: pointer;
    z-index: 1;
  }
</style>

<form on:submit|preventDefault={submitHandler}>
  <button on:click={() => (webcamHidden = !webcamHidden)} type="button">
    {webcamHidden ? 'Toon' : 'Verberg'} webcam
  </button>
  <!-- svelte-ignore a11y-autofocus -->
  <input
    on:keydown={keydownHandler}
    placeholder="Typ je bericht"
    bind:value
    type="text"
    autocomplete="off"
    autofocus
  />
</form>
<EmotionWebcam bind:hidden={webcamHidden} bind:emotion={webcamEmotion} />
