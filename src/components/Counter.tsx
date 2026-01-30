import { useAppDispatch, useAppSelector } from '@/app/hook'
import { decrement, increment, incrementByAmount } from '@/store'

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className='flex justify-center flex-col'>
        <h1>Counter: {count}</h1>
        <div className='flex justify-center items-center flex-col gap-5'>
          <button className='block btn btn-primary text-base' onClick={() => dispatch(increment())}>
            +
          </button>
          <button className='block btn btn-primary text-base' onClick={() => dispatch(decrement())}>
            -
          </button>
          <button className='block btn btn-primary text-base' onClick={() => dispatch(incrementByAmount(5))}>
            +5
          </button>
        </div>
      </div>
    </>
  )
}
