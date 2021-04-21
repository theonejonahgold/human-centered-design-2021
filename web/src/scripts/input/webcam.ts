import * as faceapi from 'face-api.js'
import { registerSettingsChangeListener, Settings } from '../settings'

let emotion: string

const emotionDictionary = new Map([
  ['neutral', 'neutraal'],
  ['happy', 'blij'],
  ['sad', 'verdrietig'],
  ['angry', 'boos'],
  ['fearful', 'bang'],
  ['disgusted', 'walgend'],
  ['surprised', 'verrast'],
])

export default async function initWebcam(initialSettings: Settings) {
  await loadFacialRecognitionModels()
  let stream: MediaStream | undefined
  registerSettingsChangeListener(async settings => {
    if (!settings.input.webcam) {
      stopWebcam(stream)
      stream = undefined
      return
    }
    if (settings.input.webcam && !stream) stream = await startWebcam()
  })
  if (!initialSettings.input.webcam) return
  stream = await startWebcam()
}

export function retrieveResult() {
  return emotionDictionary.get(emotion)!
}

async function loadFacialRecognitionModels() {
  await Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
    faceapi.nets.faceExpressionNet.loadFromUri('./models'),
  ])
}

async function startWebcam() {
  let stream = await startMediaStream()
  if (!stream) return stream
  playStreamOnVideoElement(stream)
  return stream
}

function stopWebcam(stream: MediaStream | undefined) {
  if (stream) stopMediaStream(stream)
  return clearCanvas()
}

async function startMediaStream() {
  try {
    return await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: { min: 1024, ideal: 1280, max: 1920 },
        height: { min: 576, ideal: 1280, max: 1920 },
        facingMode: 'user',
      },
    })
  } catch (err) {
    console.error(err)
    return
  }
}

function playStreamOnVideoElement(stream: MediaStream) {
  const video = document.querySelector('video')!
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => video.play())
  video.addEventListener('play', detectEmotion)
}

function stopMediaStream(stream: MediaStream) {
  stream.getTracks()[0].stop()
  const video = document.querySelector('video')!
  video.removeEventListener('play', detectEmotion)
}

function clearCanvas() {
  const canvas = document.querySelector('canvas')!
  canvas.getContext('2d')!.clearRect(0, 0, canvas.width, canvas.height)
}

function detectEmotion(this: HTMLVideoElement) {
  const video = this
  const canvas = document.querySelector('canvas')!

  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)

  const interval = (setInterval(async () => {
    if (video.paused) return clearInterval(interval)
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d')!.clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)

    if (detections.length === 0) {
      return
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
  }, 1000) as unknown) as number
}
