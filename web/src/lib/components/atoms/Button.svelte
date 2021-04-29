<script lang="ts">
  export let type: 'button' | 'link' = 'button'
  export let href = ''
  export let large: boolean
  export let center: boolean
</script>

<style lang="scss">
  button,
  a {
    all: unset;
    display: block;
    width: max-content;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1em;
    padding: 0.25em 0.5em;
    color: var(--text-secondary);
    background: var(--success);
    border-radius: var(--br);
  }

  .large {
    font-size: 1.5rem;
    padding: 0.5em 0.75em;
  }

  .center {
    margin: 0 auto;
  }
</style>

{#if type === 'button'}
  <button class:center class:large on:click><slot /></button>
{:else}
  <a role="button" class:center class:large {href}><slot /></a>
{/if}
