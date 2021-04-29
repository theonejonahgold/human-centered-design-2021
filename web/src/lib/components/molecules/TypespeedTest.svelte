<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import Input from '../atoms/Input.svelte'
  import { calibrationSettings } from '$lib/stores/settings'

  let ended: boolean
  let inputValue: string = ''
  let startTime: Date
  let backspaces: number = 0
  let stopWatchTime = '00:00'

  const dispatch = createEventDispatcher<{
    ended: null | undefined
  }>()

  const sentence =
    'Hey daar! Hoe gaat het met jou? Met mij gaat het goed, dankjewel! Ik heb echt onwijs veel zin in vanavond. Kan niet wachten!'

  const sentenceLetters = sentence.split('')
  const status: Array<
    'correct' | 'incorrect' | 'neutral'
  > = sentenceLetters.map(() => 'neutral')

  $: {
    if (!ended) {
      inputValue.split('').forEach((l, i) => {
        if (l === sentenceLetters[i]) status[i] = 'correct'
        else status[i] = 'incorrect'
      })
      for (let i = inputValue.length; i < status.length; i++) {
        status[i] = 'neutral'
      }

      if (!status.includes('neutral')) {
        const difference =
          (Date.now() - startTime.getTime()) / 1000 - backspaces * 0.1
        calibrationSettings.update(val => ({
          ...val,
          wpm: Math.floor((sentence.split(' ').length / difference) * 60),
        }))
        dispatch('ended')
      }
    }
  }

  function startTimer() {
    if (startTime) return
    startTime = new Date(Date.now())
    requestAnimationFrame(updateTimer)
  }

  function updateTimer() {
    if (!ended) requestAnimationFrame(updateTimer)
    const minutes = new Date(Date.now()).getMinutes() - startTime.getMinutes()
    const seconds = new Date(Date.now()).getSeconds() - startTime.getSeconds()
    stopWatchTime = `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`
  }
</script>

<style lang="scss">
  .correct {
    color: var(--success);
  }
  .incorrect {
    color: var(--tertiary);
  }

  .bold {
    font-weight: bold;
  }
</style>

{#if !startTime}
  <p>Typ de dikgedrukte zin na. Begin met typen om de test te starten.</p>
{/if}
<p>{stopWatchTime}</p>
<p class="bold">
  {#each sentenceLetters as letter, i (i)}
    <span class={status[i]}>{letter}</span>
  {/each}
</p>
<Input
  autofocus
  on:backspace={() => (backspaces += 1)}
  on:keydown={startTimer}
  bind:value={inputValue}
  large
  fullWidth
/>
