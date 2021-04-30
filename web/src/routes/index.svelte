<script>
  import { goto, prefetch, prefetchRoutes } from '$app/navigation'

  import Button from '$lib/components/atoms/Button.svelte'
  import { calibrationDone } from '$lib/stores/settings'
  import { onMount } from 'svelte'
  import { get } from 'svelte/store'

  onMount(async () => {
    await prefetchRoutes(['/app/*'])
    const redirect = get(calibrationDone)
    if (redirect) goto('/app', { replaceState: true })
  })
</script>

<style lang="scss">
  h1 {
    font-size: 3rem;
  }
</style>

<h1>Welkom bij Body Chat</h1>
<p>Dé tool om betekenis te geven aan je berichten.</p>
<Button large type="link" href="/onboarding">Beginnen</Button>
