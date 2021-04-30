<script>
  export let size: string
</script>

<style>
  img {
    width: var(--size);
    height: var(--size);
    object-fit: cover;
    border-radius: 50%;
    aspect-ratio: 1/1;
  }
</style>

<img
  style="--size: {size}"
  src="https://unsplash.com/photos/jmURdhtm7Ng/download?force=true&w=640"
  alt="Portrait of Berend, smiling with his big beard and bushy mustache"
/>
