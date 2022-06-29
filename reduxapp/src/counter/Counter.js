import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from '../features/counter/counterSlice'

const Counter = () => {
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()
    return (
        <>
            <div className="main">
                <button onClick={()=>{dispatch(increment())}}>+</button>
                <h3>count:{count}</h3>
                <button onClick={()=>{dispatch(decrement())}}>-</button>
            </div>
        </>
    )
}

export default Counter