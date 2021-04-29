<script>
  export let checked: boolean
  export let name: string
  export let value: string
</script>

<style>
  input {
    appearance: none;
    width: 1rem;
    height: 1rem;
    margin: 0;
    font-size: 1rem;
    border-radius: var(--br);
    border: 1px solid var(--primary);
    box-shadow: none;
    line-height: 1;
    margin-left: auto;
  }

  input:hover,
  input:focus {
    background: darken(#f4f4f4, 5);
  }

  input:checked {
    background: var(--primary);
  }
</style>

<input type="checkbox" bind:checked {name} {value} />
