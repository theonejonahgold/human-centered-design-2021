<script lang="ts">
  import Button from '$lib/components/atoms/Button.svelte'
  import EmotionWebcam from '$lib/components/molecules/EmotionWebcam.svelte'

  let preview: boolean
  let emotion: Emotion
</script>

<style lang="scss">
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    height: 100%;
  }

  .container div:nth-of-type(2) {
    align-self: center;
  }
</style>

<div class="container">
  <div>
    <h1>Gezichtsuitdrukkingen</h1>
    <p>
      Door te kijken naar de emotie op je gezicht kunnen we vrij snel al
      achterhalen wat de emotie is achter het bericht.
    </p>
    {#if preview}
      <Button center large type="link" href="/onboarding/typespeed">
        Doorgaan
      </Button>
    {/if}
  </div>
  <div>
    {#if preview}
      <EmotionWebcam bind:emotion />
      <p>Emotie: {emotion || ''}</p>
    {:else}
      <Button
        center
        on:click={() => {
          preview = !preview
        }}
        large
      >
        Video aanzetten
      </Button>
    {/if}
  </div>
</div>
