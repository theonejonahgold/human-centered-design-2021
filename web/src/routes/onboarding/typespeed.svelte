<script lang="ts">
  import { calibrationSettings } from '$lib/stores/settings'
  import Button from '$lib/components/atoms/Button.svelte'
  import TypespeedTest from '$lib/components/molecules/TypespeedTest.svelte'

  let testStatus: 'explaining' | 'started' | 'finished' = 'explaining'
</script>

{#if testStatus === 'explaining'}
  <h1>Typesnelheid</h1>
  <p>
    Met jouw typesnelheid kunnen we de nuances tussen verschillende emoties
    duidelijk maken, zoals irritatie of boosheid.
  </p>
  <p>
    Om dit juist te laten werken, moeten we wel weten hoe snel je gemiddeld
    typt, dus vragen we je een korte typesnelheid-test uit te voeren.
  </p>
  <Button center on:click={() => (testStatus = 'started')} large>
    Typesnelheid testen
  </Button>
{:else if testStatus === 'started'}
  <h1>Type test</h1>
  <TypespeedTest on:ended={() => (testStatus = 'finished')} />
{:else}
  <h1>Resultaat</h1>
  <p>
    Volgens onze test type je gemiddeld <strong>
      {$calibrationSettings.wpm} woorden per minuut
    </strong>.
  </p>
  <p>
    Dit is slechts een indicatie, en zal zich aanpassen naarmate je Body Chat
    vaker gebruikt. Je kan het aantal woorden per minuut altijd aanpassen in de
    instellingen.
  </p>
  <Button center large type="link" href="/onboarding/wordchoice">
    Doorgaan
  </Button>
{/if}
