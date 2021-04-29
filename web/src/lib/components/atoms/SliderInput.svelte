<script lang="ts">
  export let results: FixedSizeArray<5, string>
  export let value: number
  export let id: string
</script>

<style lang="scss">
  input[type='range'] {
    display: block;
    height: 2rem;
    -webkit-appearance: none;
    width: 100%;
    margin: 0.2rem 0 0;
  }

  input[type='range']:focus {
    outline: none;
  }

  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.75rem;
    cursor: pointer;
    background: var(--primary);
    border-radius: 6px;
    border: none;
  }

  input[type='range']::-webkit-slider-thumb {
    border: 3px solid var(--text-secondary);
    height: calc(3px + 1.5rem);
    width: calc(3px + 1.5rem);
    border-radius: 50%;
    background: var(--tertiary);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6.5px;
  }

  input[type='range']:focus::-webkit-slider-runnable-track {
    background: var(--primary);
  }

  input[type='range']::-moz-range-track {
    width: 100%;
    height: 0.75rem;
    cursor: pointer;
    background: var(--primary);
    border-radius: 6px;
    border: none;
  }

  input[type='range']::-moz-range-thumb {
    border: 3px solid var(--text-secondary);
    height: calc(3px + 1.5rem);
    width: calc(3px + 1.5rem);
    border-radius: 50%;
    background: var(--tertiary);
    cursor: pointer;
  }

  input[type='range']::-ms-track {
    width: 100%;
    height: 0.75rem;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type='range']::-ms-fill-lower {
    background: var(--primary);
    border: none;
    border-radius: 50%;
  }

  input[type='range']::-ms-fill-upper {
    background: var(--primary);
    border: none;
    border-radius: 50%;
  }

  input[type='range']::-ms-thumb {
    margin-top: 1px;
    border: 3px solid var(--text-secondary);
    height: calc(3px + 1.5rem);
    width: calc(3px + 1.5rem);
    border-radius: 50%;
    background: var(--tertiary);
    cursor: pointer;
  }

  input[type='range']:focus::-ms-fill-lower {
    background: var(--primary);
  }

  input[type='range']:focus::-ms-fill-upper {
    background: var(--primary);
  }
</style>

<input
  {id}
  list="{id}-options"
  type="range"
  bind:value
  min="0"
  max="4"
  step="1"
/>
<datalist id="{id}-options">
  {#each results as result, i (i)}
    <option value={i} label={result} />
  {/each}
</datalist>
