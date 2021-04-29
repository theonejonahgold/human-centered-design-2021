<script>
  import '../app.scss'
</script>

<style lang="scss">
  main {
    padding: 2rem;
    height: 100%;
    position: relative;
  }

  main :global(h1) {
    margin: 0;
    text-align: center;
  }

  main :global(p) {
    font-size: 1.5rem;
    text-align: center;
  }

  main :global(a[href^='/onboarding']) {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
  }
</style>

<main>
  <slot />
</main>
