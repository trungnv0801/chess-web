export type Piece = {
  color: 'w' | 'b'
  role: 'p' | 'n' | 'b' | 'r' | 'q' | 'k'
}

export type BoardMap = Partial<Record<string, Piece>>
