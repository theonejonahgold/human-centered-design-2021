<script lang="ts">
  import FaceApiCanvas from '../atoms/FaceApiCanvas.svelte'
  import WebcamVideo from '../atoms/WebcamVideo.svelte'

  export let emotion: string
  export let hidden: boolean

  let localEmotion: string

  const emotionDictionary = new Map([
    ['neutral', 'neutraal'],
    ['happy', 'blij'],
    ['sad', 'verdrietig'],
    ['angry', 'boos'],
    ['fearful', 'bang'],
    ['disgusted', 'walgend'],
    ['surprised', 'verrast'],
  ])

  $: emotion = emotionDictionary.get(localEmotion)!

  let videoEl: HTMLVideoElement
  let playing: boolean = false
</script>

<style lang="scss">
  div {
    display: grid;
    place-items: center;
    width: 100%;
  }

  div :global(*) {
    grid-row: 1;
    grid-column: 1;
  }

  .hidden {
    visibility: hidden;
    position: fixed;
    bottom: 100%;
    left: 100%;
  }
</style>

<div class:hidden>
  <WebcamVideo bind:playing bind:video={videoEl} />
  <FaceApiCanvas bind:emotion={localEmotion} bind:playing bind:videoEl />
</div>
