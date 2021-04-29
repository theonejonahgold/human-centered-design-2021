<script>
  import UserImage from '../atoms/UserImage.svelte'

  export let online: boolean
  export let name = 'Berend'
</script>

<style>
  header {
    display: flex;
    align-items: center;
    background: var(--text-secondary);
    border-bottom: 1px solid darken(#f4f4f4, 10);
    padding: 1rem 1rem 0.75rem;
    position: relative;
  }

  div {
    position: absolute;
    top: calc(50% + 0.25rem);
    left: 1rem;
    transform: translateY(-50%);
    height: 3rem;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0;
    margin-left: 4rem;
  }

  .online:before {
    position: absolute;
    bottom: -0.2rem;
    right: -0.2rem;
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: var(--success);
    border: 3px solid var(--text-secondary);
  }
</style>

<header>
  <div class:online>
    <UserImage size="3rem" />
  </div>
  <h1>{name}</h1>
</header>
