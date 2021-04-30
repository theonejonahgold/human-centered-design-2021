<script lang="ts">
  export let results: FixedSizeArray<5, string>
  export let value: NrRange<0, typeof results.length>
  export let forID: string = ''
</script>

<style lang="scss">
  output {
    font-size: 0.9rem;
  }
</style>

<output for={forID}>{results[value]}</output>
