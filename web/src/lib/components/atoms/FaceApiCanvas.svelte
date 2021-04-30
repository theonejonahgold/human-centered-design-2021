<script lang="ts">
  import { onMount, afterUpdate, onDestroy } from 'svelte'
  import * as faceapi from 'face-api.js'

  export let videoEl: HTMLVideoElement
  export let playing: boolean
  export let emotion: string

  let canvas: HTMLCanvasElement
  let interval: number | undefined = undefined

  onMount(
    async () =>
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models'),
      ])
  )

  afterUpdate(() => {
    if ((!videoEl || !playing) && typeof interval !== 'undefined') {
      clearInterval(interval)
      interval = undefined
      return
    }
    if (!videoEl || !playing || typeof interval !== 'undefined') return

    const displaySize = { width: videoEl.width, height: videoEl.height }
    faceapi.matchDimensions(canvas, displaySize)

    interval = (setInterval(async () => {
      const detection = await faceapi
        .detectSingleFace(videoEl, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions()
      if (!detection) return

      const resizedDetections = faceapi.resizeResults(detection, displaySize)
      canvas.getContext('2d')!.clearRect(0, 0, canvas.width, canvas.height)
      faceapi.draw.drawDetections(canvas, resizedDetections)

      emotion = Object.entries(detection.expressions).reduce(
        ([oldEmotion, oldProbability], [emotion, probability]) =>
          probability > oldProbability
            ? [emotion, probability]
            : [oldEmotion, oldProbability],
        ['', 0]
      )[0]
    }, 100) as unknown) as number
  })

  onDestroy(() => clearInterval(interval))
</script>

<style lang="scss">
  canvas {
    width: 100%;
    height: auto;
  }
</style>

<canvas bind:this={canvas} />
