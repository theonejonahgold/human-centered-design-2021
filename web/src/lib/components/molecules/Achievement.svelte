<script>
  export let name: string
  export let description: string
  export let occluded = false
  export let reached = false
</script>

<style>
  article {
    display: flex;
    flex-direction: column;
  }

  article:before {
    content: '';
    margin: 0 auto;
    margin-bottom: 1rem;
    background: darken(#f4f4f4, 10);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    color: var(--text-secondary);
    font-size: 2rem;
    text-align: center;
    line-height: 4rem;
  }

  article.reached:before {
    background: var(--green);
    content: '\2713';
  }

  h1,
  p {
    margin: 0;
    text-align: center;
  }

  h1 {
    font-size: 1rem;
  }

  p {
    font-size: 0.75rem;
    color: darken(#f4f4f4, 60);
  }
</style>

<article class:reached>
  <h1>
    {occluded ? (!reached ? '???' : name) : name}
  </h1>
  <p>
    {occluded ? (!reached ? 'Verborgen' : description) : description}
  </p>
</article>
