export const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const

export type File = (typeof FILES)[number]
