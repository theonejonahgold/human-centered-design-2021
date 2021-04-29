<script>
  import '../../app.scss'
  import Sidebar from '$lib/components/organisms/Sidebar.svelte'
</script>

<style>
  div {
    display: grid;
    grid-template-columns: min-content auto;
    height: 100%;
  }
</style>

<div>
  <Sidebar />
  <slot />
</div>
