import '@/App.css'
import { Counter } from './components/Counter'

export default function App() {
  return (
    <>
      <Counter />
      <div className='card'>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  )
}
