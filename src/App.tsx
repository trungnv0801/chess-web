import { useState } from 'react'
import Board from './components/Board'
import { ORIENTATION, type Orientation } from './types'

function App() {
  const [orientation, setOrientation] = useState<Orientation>(ORIENTATION.WHITE)

  return (
    <>
      <div className='text-center my-10'>
        <button
          className='text-2xl'
          onClick={() => setOrientation((o) => (o === ORIENTATION.WHITE ? ORIENTATION.BLACK : ORIENTATION.WHITE))}
        >
          Flip
        </button>
      </div>
      <Board orientation={orientation} />
    </>
  )
}

export default App
