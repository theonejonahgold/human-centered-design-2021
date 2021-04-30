<script>
  import { page } from '$app/stores'

  import SidebarUser from '../molecules/SidebarUser.svelte'
</script>

<style>
  aside {
    width: 15rem;
    height: 100%;
    border-right: 1px solid darken(#f4f4f4, 10);
    background: darken(#f4f4f4, 1);
  }

  header {
    padding: 1rem 1rem 0;
    border-bottom: 1px solid darken(#f4f4f4, 10);
    margin-bottom: 0.75rem;
    display: flex;
    align-items: baseline;

    h2 {
      margin-top: 0;
      margin-bottom: 0.75rem;
    }
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0 1rem;
  }

  img {
    display: block;
    height: 1.25rem;
    width: 1.25rem;
    object-fit: contain;
  }

  a {
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    position: relative;
    margin: 0 0.75rem;
    z-index: 0;
  }

  a:first-of-type {
    margin-left: auto;
  }
  a:last-of-type {
    margin-right: 0;
  }

  a:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 2rem;
    z-index: -1;
    border-radius: 5px;
  }

  a.active:before {
    background: darken(#f4f4f4, 15);
  }

  a:hover:before,
  a:focus:before,
  a.active:hover:before,
  a.active:focus:before {
    background: darken(#f4f4f4, 10);
  }
</style>

<aside>
  <header>
    <h2>Chats</h2>
    <a class:active={$page.path === '/app/profile'} href="/app/profile">
      <img src="/profile.svg" alt="Profiel" />
    </a>
    <a class:active={$page.path === '/app/settings'} href="/app/settings">
      <img src="/gear.svg" alt="Instellingen" />
    </a>
  </header>
  <ul>
    <SidebarUser />
    <SidebarUser href="/app/emotion-battle" name="Berend Sr." />
  </ul>
</aside>
