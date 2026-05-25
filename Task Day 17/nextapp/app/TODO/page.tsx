"use client"
import React, { useState,useReducer, useContext } from 'react'
import Reducer from './Reducer';
import { tododata } from './TODOContext';
function TODOList({children}:any) {
    const data= useContext(tododata);
    console.log(data);
    const [task,settask]=useState("");
    const [state, dispatch] = useReducer(Reducer, "");
    console.log(tododata);

  return (
    <div className='shadow-gray-950 w-[50%] bg-white m-auto border-2'>
            <div className='flex items-center justify-between'>
                <input type='text' value={task}
                 placeholder='Enter Your Mission' className='rounded-[4px] h-[50px]  border-2'
                 onChange={(e)=>{
                    settask(e.target.value)
                 }}></input>
                <button className='bg-blue-600 text-white p-2.5 '
                onClick={()=>dispatch({type:"inc",payload:task})}>Add</button>
            </div>
    </div>
  )
}

export default TODOList