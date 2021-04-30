<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  export let large: boolean = false
  export let fullWidth: boolean = false
  export let value: number
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
  bind:value
  type="number"
  class:large
  step="1"
  class:full-width={fullWidth}
  autocomplete="off"
/>
