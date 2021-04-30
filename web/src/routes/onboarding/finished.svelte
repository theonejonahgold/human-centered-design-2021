<script>
  import Button from '$lib/components/atoms/Button.svelte'
  import { calibrationDone } from '$lib/stores/settings'
  import { onMount } from 'svelte'

  onMount(() => {
    calibrationDone.set(true)
  })
</script>

<h1>Je bent klaar!</h1>
<p>Veel plezier met Body Chat!</p>
<Button large center type="link" href="/app">Afronden</Button>
