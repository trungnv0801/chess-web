export const ORIENTATION = {
  WHITE: 'white',
  BLACK: 'black'
} as const

export type Orientation = (typeof ORIENTATION)[keyof typeof ORIENTATION]
