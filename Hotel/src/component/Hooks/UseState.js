import React, { useEffect, useReducer, useState } from 'react'
import './Style.css'
const reducer = (state, action) => {
    if (action.type === "INC") {
       state= state + 1;
    }
    if (state>0 && action.type === "DICR") {
      state =  state - 1;
    }
    return state;

}

function UseState() {

    // const[mydata,setmydata] = useState(0)
    useEffect(()=>{
        document.title=`chats(${state})`
    })
   const initialdata = 0;
    const [state, dispatch] = useReducer(reducer, initialdata)

    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                {/* <div className="button2"  onClick={()=>setmydata(mydata+1)} > */}
                <div className="button2" onClick={() => dispatch({ type: "INC" })} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCRIMENT
                </div>
                {/* <div className="button2"  onClick={ ()=>{
            
            if(mydata > 0){
            setmydata(mydata-1)}
            else{
                setmydata(0);
            }}
              }
            > */}
                <div className="button2" onClick={() => dispatch({ type: "DICR" })} >
                <span></span>
                <span></span>
                <span></span>
                DECRIMENT
                </div>
        </div>
    </>
  )
}

export default UseState