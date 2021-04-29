<script lang="ts">
  import SliderInput from '../atoms/SliderInput.svelte'
  import SliderOutput from '../atoms/SliderOutput.svelte'

  export let value: NrRange<0, 5>
  export let id: string

  export let results: FixedSizeArray<5, string> = [
    'Nooit',
    'Soms',
    'Regelmatig',
    'Vaak',
    'Altijd',
  ]
</script>

<style lang="scss">
  label {
    display: block;
    font-size: 1.25rem;
    font-weight: bold;
  }
</style>

<div>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>
    <slot />
    <SliderInput {results} {id} bind:value />
  </label>
  <SliderOutput {results} forID={id} bind:value />
</div>
