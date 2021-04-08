import io from 'socket.io-client'
import * as faceapi from 'face-api.js'

const socketUrl = import.meta.env.VITE_SOCKET_URL
if (!socketUrl) throw 'socketUrl not found in environment'

const socket = io()
const messages = document.querySelector('section ul') as HTMLUListElement
const input = document.querySelector('input') as HTMLInputElement
const video = document.querySelector('video') as HTMLVideoElement
const canvas = document.querySelector('canvas') as HTMLCanvasElement
let emotion = 'neutral'

window.addEventListener('load', () => {
  loadFacialRecognition()
})
;(document.querySelector('form') as HTMLFormElement).addEventListener(
  'submit',
  event => {
    event.preventDefault()
    if (input.value) {
      socket.emit('message', { value: input.value, emotion })
      input.value = ''
    }
  }
)

socket.on('message', message => {
  const element = document.createElement('li')
  element.textContent = message.value
  element.style.setProperty('--background', `var(--${message.emotion})`)
  messages.appendChild(element)
  messages.scrollTop = messages.scrollHeight
})

async function loadFacialRecognition() {
  await Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
    faceapi.nets.faceExpressionNet.loadFromUri('./models'),
  ])
  try {
    video.srcObject = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: { min: 1024, ideal: 1280, max: 1920 },
        height: { min: 576, ideal: 1280, max: 1920 },
        facingMode: 'user',
      },
    })
    video.addEventListener('loadedmetadata', () => {
      video.play()
    })
  } catch (err) {
    console.error(err)
    return
  }
}

video.addEventListener('play', detectEmotion)

function detectEmotion() {
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)

  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    ;(canvas.getContext('2d') as CanvasRenderingContext2D).clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    )
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)

    if (detections.length === 0) {
      emotion = 'neutral'
      return input.style.setProperty('--border', `var(--${emotion})`)
    }
    detections.forEach(element => {
      let status = ''
      let valueStatus = 0.0
      for (const [key, value] of Object.entries(element.expressions)) {
        if (value > valueStatus) {
          status = key
          valueStatus = value
        }
      }
      emotion = status
    })
    input.style.setProperty('--border', `var(--${emotion})`)
  }, 1000)
}
