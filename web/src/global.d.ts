/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

type FixedSizeArray<N extends number, T> = N extends 0
  ? never[]
  : {
      0: T
      length: N
    } & ReadonlyArray<T>

type NrRange<Start extends number, End extends number> = Exclude<
  _NumbersFrom0ToN<End>,
  _NumbersFrom0ToN<Start>
>

type Emotion =
  | 'voldaan'
  | 'somber'
  | 'vrolijk'
  | 'bozig'
  | 'angstig'
  | 'verrukt'
  | 'razend'
  | 'verdrietig'
  | 'neutraal'
  | 'verrast'
  | 'geschrokken'
  | 'boos'
  | 'geïrriteerd'
  | 'blij'
  | 'teleurgesteld'
  | 'over the moon'
  | 'bang'

type _NumbersFrom0ToN<Nr extends number> = Nr extends Nr
  ? number extends Nr
    ? number
    : Nr extends 0
    ? never
    : _NumbersFrom0ToNRec<Nr, [], 0>
  : never

type _NumbersFrom0ToNRec<
  Nr extends number,
  Counter extends any[],
  Accumulator extends number
> = Counter['length'] extends Nr
  ? Accumulator
  : _NumbersFrom0ToNRec<Nr, [any, ...Counter], Accumulator | Counter['length']>

declare module 'svelte-emoji'

interface Message {
  emotion: Emotion
  message: string
  username: string
}
