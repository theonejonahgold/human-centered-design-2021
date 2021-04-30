<script lang="ts">
  import { createEventDispatcher, tick } from 'svelte'

  export let message: string = ''
  export let disabled = false

  const dispatch = createEventDispatcher<{ submit: undefined }>()

  let keystrokeCount = 0

  $: value = message.slice(0, keystrokeCount)

  async function keydownHandler() {
    if (disabled) return
    keystrokeCount += 1
    await tick()
    if (value === message)  {
      dispatch('submit')
      keystrokeCount = 0
    }
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
</style>

<form>
  <!-- svelte-ignore a11y-autofocus -->
  <input
    on:keydown|preventDefault={keydownHandler}
    placeholder="Typ je bericht"
    {disabled}
    {value}
    type="text"
    autocomplete="off"
    autofocus
  />
</form>
