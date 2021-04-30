<script>
  import { page } from '$app/stores'
  import UserImage from '../atoms/UserImage.svelte'
  export let name = 'Berend'
  export let href = '/app/chat'
</script>

<style>
  article {
    display: grid;
    grid-template-columns: min-content 1fr;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0;
  }

  p {
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  a {
    display: block;
    color: inherit;
    text-decoration: none;
    position: relative;
    z-index: 0;
  }

  .active:before {
    content: '';
    position: absolute;
    top: -0.375rem;
    left: -1rem;
    width: calc(100% + 2rem);
    height: calc(100% + 0.75rem);
    background: darken(#f4f4f4, 10);
    z-index: -1;
  }
</style>

<li>
  <a class:active={$page.path === href} {href}>
    <article>
      <UserImage size="4rem" />
      <div>
        <h2>{name}</h2>
      </div>
    </article>
  </a>
</li>
