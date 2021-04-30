<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  export let large: boolean = false
  export let fullWidth: boolean = false
  export let value: string
  export let autofocus: boolean

  const dispatch = createEventDispatcher<{
    backspace: null | undefined
    keydown: null | undefined
  }>()

  function keydownHandler(e: KeyboardEvent) {
    switch (e.key) {
      case 'Backspace':
      case 'Delete':
        return dispatch('backspace')
      case 'Shift':
      case 'Enter':
      case 'Control':
      case 'AltGraph':
      case 'Alt':
      case 'CapsLock':
      case 'Fn':
      case 'FnLock':
      case 'Hyper':
      case 'Meta':
      case 'Numlock':
      case 'ScrollLock':
      case 'Super':
      case 'Symbol':
      case 'SymbolLock':
      case 'Tab':
      case 'ArrowDown':
      case 'ArrowUp':
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'End':
      case 'Home':
      case 'PageDown':
      case 'PageUp':
      case 'Clear':
      case 'Copy':
      case 'CrSel':
      case 'Cut':
      case 'EraseEof':
      case 'ExSel':
      case 'Insert':
      case 'Paste':
      case 'Redo':
      case 'Undo':
        break
      default:
        dispatch('keydown')
    }
  }
</script>

<style lang="scss">
  input {
    appearance: none;
    border: none;
    background: var(--primary);
    color: var(--text-secondary);
    font-size: 1rem;
    padding: calc(0.25em - 1px) calc(0.5em - 1px);
    border-radius: var(--br);
    border: 1px solid var(--primary);
  }

  input:focus {
    outline: none;
    border-color: var(--secondary);
  }

  .large {
    font-size: 1.5rem;
    padding: calc(0.5em - 1px) calc(0.75em - 1px);
  }

  .full-width {
    width: 100%;
  }
</style>

<input
  on:keydown={keydownHandler}
  bind:value
  type="text"
  class:large
  class:full-width={fullWidth}
  autocomplete="off"
  {autofocus}
/>
