import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/reducers'
import { decrement, increment } from './reducer'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{count}</h1>
      <div>
        <button aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}
