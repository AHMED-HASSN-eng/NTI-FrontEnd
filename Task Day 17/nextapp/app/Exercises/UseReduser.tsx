"use client"
import React, { useReducer } from 'react'
const mytasks=[{id:1,task:"fncdjksnfjkd"},{id:2,task:"fncdjksnfjkd"},
    {id:3,task:"fncdjksnfjkd"},{id:4,task:"fncdjksnfjkd"}]
// function reduser(state:any,action:any){
//      return !action.pyload;
// }
function reduser(state:any,action:any){
     return state.filter((e:any)=>e.id!==action.payload);
}
function UseReduser() {
//    const [isopend,dispatch] =useReducer(reduser,false);
      const [tasks,dispatch] =useReducer(reduser,mytasks);
const notcompeletetasks=tasks.map((e:any)=>{
     return (
          <div key={e.id} className='flex gap-[20px] bg-amber-200 w-[70%]'>
            <h2>{e.task}</h2>
            <button className='bg-blue-400 p-5' onClick={()=>dispatch({type:"complete",payload:e.id})}>Compelete</button>
          </div>
     );
});
  return (
    <div>
        {/* {isopend?<p>🙄</p>:<p>😤</p>}
        <button className='bg-blue-400 ' onClick={()=>dispatch({pyload:isopend})}>
            Toggle Eye
        </button> */}
        {notcompeletetasks}
    </div>
  )
}

export default UseReduser