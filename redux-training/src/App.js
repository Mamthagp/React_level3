import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, increment_by } from './actions/countActions';
import Btn from './Btn'
import Show from './Show'

function App() {
  const count = useSelector((state) => {
    return state.count
  })

  const dispatch = useDispatch()

  return (
    <div>
      <h1>Redux training</h1>
      <h2>count - {count}</h2>

      <button onClick={() => {
        dispatch(increment())
      }}>+1</button>

      <button onClick={() => {
        dispatch(decrement())
      }}>-1</button>

      <Btn />
      <hr/>
      <Show />
    </div>
  );
}

export default App;
