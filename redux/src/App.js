import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {inc,dec} from './features/counter/CounterSlice'

function App() {
  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()
  return (
    <>
   <button onClick={()=>dispatch(inc())}>+</button>
  <h1>count:{count}</h1>
   <button onClick={()=>dispatch(dec())}>-</button>
   </>
   
  );
}

export default App;
