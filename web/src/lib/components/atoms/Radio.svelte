<script>
  export let group: any
  export let value: string
  export let name: string
</script>

<style>
  input {
    appearance: none;
    width: 1rem;
    height: 1rem;
    margin: 0;
    font-size: 1rem;
    border-radius: 50%;
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

<input type="radio" bind:group {value} {name} />
