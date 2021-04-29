import { readable, writable } from 'svelte/store'

export const outputSettings = writable<OutputSettings>({
  backgroundColor: 'all',
  animation: 'none',
  emoji: false,
  storyTelling: true,
})

export interface OutputSettings {
  backgroundColor: OutputToggle
  animation: OutputToggle
  emoji: boolean
  storyTelling: boolean
}

export type OutputToggle = 'all' | 'chat' | 'message' | 'none'

export const calibrationSettings = writable<CalibrationSettings>({
  wpm: 70,
  swearAmount: 1,
  directAmount: 3,
  emojiAmount: 2,
  emotionAmount: 3,
})

interface CalibrationSettings {
  wpm: number
  swearAmount: NrRange<0, 5>
  directAmount: NrRange<0, 5>
  emotionAmount: NrRange<0, 5>
  emojiAmount: NrRange<0, 5>
}

export const emojis = readable(
  new Map<Emotion, string>([
    ['voldaan', '☺️'],
    ['somber', '😔'],
    ['vrolijk', '🙂'],
    ['bozig', '😠'],
    ['angstig', '😥'],
    ['verrukt', '😁'],
    ['razend', '🤬'],
    ['verdrietig', '😢'],
    ['neutraal', '😶'],
    ['verrast', '😯'],
    ['geschrokken', '😱'],
    ['boos', '😡'],
    ['geïrriteerd', '😒'],
    ['blij', '😊'],
    ['teleurgesteld', '😕'],
    ['over the moon', '🥳'],
    ['bang', '😰'],
  ]),
  () => {}
)
