import { useSelector, useDispatch } from 'react-redux';
import {increment,decrement,AddOnValue} from '../features/counter/counterSlice'
const Counter = () => {
    const count = useSelector(
        (state) => state.counter.count
    )
    const Dispatch=useDispatch();
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>Dispatch(increment())}>INCREMENT</button>
            <button onClick={()=>Dispatch(AddOnValue(5))}>ADD 5</button>
            <button onClick={()=>Dispatch(decrement())}>DECREMENT</button>
        </div>
    )
}

export default Counter