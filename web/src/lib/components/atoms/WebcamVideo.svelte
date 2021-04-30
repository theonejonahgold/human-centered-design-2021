<script lang="ts">
  import { onDestroy, onMount } from 'svelte'

  export let video: HTMLVideoElement
  export let playing: boolean = false
  let stream: MediaStream

  onMount(async () => {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: { min: 1024, ideal: 720, max: 1080 },
        height: { min: 576, ideal: 1280, max: 1920 },
        aspectRatio: 16 / 9,
        facingMode: 'user',
      },
    })

    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => video.play())
    video.addEventListener('play', () => (playing = true))
    video.addEventListener('pause', () => (playing = false))
  })

  onDestroy(() => stream?.getTracks().forEach(track => track.stop()))
</script>

<style lang="scss">
  video {
    width: 100%;
    height: auto;
  }
</style>

<!-- svelte=disable-next-line a11y-media-has-caption -->
<video bind:this={video} width="1280" height="720" />
