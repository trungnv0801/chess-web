import { THEMES } from '@/themes'
import type { BoardTheme } from '@/themes/types'
import type { Orientation, Piece } from '@/types'
import { FILES, ORIENTATION, RANKS } from '@/types'
import { START_POSITION } from '@/utils'

interface BoardProps {
  orientation: Orientation
}

export default function Board({ orientation }: BoardProps) {
  const { files, ranks } = getBoardAxes(orientation)

  function getSquareColor(file: string, rank: number) {
    const fileIndex = file.charCodeAt(0) - 'a'.charCodeAt(0)
    const rankIndex = rank - 1

    return (fileIndex + rankIndex) % 2 === 0 ? 'dark' : 'light'
  }

  function getBoardAxes(orientation: Orientation) {
    const files = orientation === ORIENTATION.WHITE ? FILES : [...FILES].reverse()

    const ranks = orientation === ORIENTATION.WHITE ? [...RANKS].reverse() : RANKS

    return { files, ranks }
  }

  function shouldShowFileLabel(rank: number, orientation: Orientation) {
    return orientation === ORIENTATION.WHITE ? rank === 1 : rank === 8
  }

  function shouldShowRankLabel(file: string, orientation: Orientation) {
    return orientation === ORIENTATION.WHITE ? file === 'a' : file === 'h'
  }

  const pieceImage = (piece: Piece, theme: BoardTheme) => `${theme.piecePath}/${piece.color}${piece.role}.png`

  return (
    <div className='flex justify-center'>
      <div className='board border border-solid'>
        {ranks.map((rank) =>
          files.map((file) => {
            const square = `${file}${rank}` as const
            const piece = START_POSITION[square]

            return (
              <div key={square} className={`square relative ${getSquareColor(file, rank)}`}>
                {piece && (
                  <img
                    src={pieceImage(piece, THEMES.classic)}
                    alt={`${piece.color}${piece.role}`}
                    className='absolute inset-0 w-full h-full pointer-events-none select-none'
                    draggable={false}
                  />
                )}
                {shouldShowFileLabel(rank, orientation) && (
                  <span className='absolute bottom-1 right-1 file text-xs'>{file}</span>
                )}

                {shouldShowRankLabel(file, orientation) && (
                  <span className='absolute top-1 left-1 text-xs'>{rank}</span>
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
