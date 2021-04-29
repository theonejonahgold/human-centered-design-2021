<script>
  import Button from '$lib/components/atoms/Button.svelte'
</script>

<style lang="scss">
  ol {
    margin: 4rem 0 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    font-size: 1.75rem;
  }
</style>

<h1>Body Chat gebruikt jouw lichaamstaal om emotie over te brengen</h1>
<p>Dit doen we op 3 verschillende manieren:</p>

<ol>
  <li>Gezichtsuitdrukkingen</li>
  <li>Typesnelheid</li>
  <li>Woordkeuze</li>
</ol>
<Button center href="/onboarding/webcam" type="link" large>Doorgaan</Button>
