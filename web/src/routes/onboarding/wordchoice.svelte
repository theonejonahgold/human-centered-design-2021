<script lang="ts">
  import Button from '$lib/components/atoms/Button.svelte'
  import Slider from '$lib/components/molecules/Slider.svelte'
  import { calibrationSettings } from '$lib/stores/settings'
</script>

<style lang="scss">
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
  }
</style>

<h1>Woordkeuze</h1>
<p>
  Woordkeuze is natuurlijk erg persoonlijk, maar je kan er zeker heel wat emotie
  uit halen. We vragen je daarom deze instellingen af te stellen naar jouw
  voorkeuren. Je kan ze altijd later nog aanpassen.
</p>
<form on:submit|preventDefault>
  <Slider id="swears" bind:value={$calibrationSettings.swearAmount}
    >Hoe vaak scheld je?</Slider
  >
  <Slider
    id="mood"
    results={['Niet', 'Een beetje', '50/50', 'Heel erg', 'Recht-toe-recht-aan']}
    bind:value={$calibrationSettings.directAmount}
  >
    Hoe direct ben je met je woorden?
  </Slider>
  <Slider
    results={['Niet', 'Weinig', '50/50', 'Erg', 'Heel erg']}
    bind:value={$calibrationSettings.emotionAmount}
    id="emotion"
  >
    Hoe expressief ben je?
  </Slider>
  <Slider
    id="emoji"
    results={['Nooit', 'Af en toe', 'Regelmatig', 'Vaak', '(Bijna) altijd']}
    bind:value={$calibrationSettings.emojiAmount}
  >
    Hoevaak gebruik je emoji's?
  </Slider>
  <Button center large type="link" href="/onboarding/output">Doorgaan</Button>
</form>
