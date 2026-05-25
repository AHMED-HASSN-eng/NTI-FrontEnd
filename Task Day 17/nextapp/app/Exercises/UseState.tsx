"use client"
import React, { useState } from 'react'

function UseState() {
    // const [counter,setcounter]=useState(1);
    // const [showdiv,setdiv]=useState("");
    const [showres,setres]=useState("");
    const [showlogin,setlogindata]=useState({email:"",pass:""});
  return (
    <div>
        <h2>{showres}</h2>
        <div className=''>
            <input type='text' className='w-[50%] h-[40px] mb-5 ' value={showlogin.email} 
            placeholder='Enter Your Email' onChange={(e)=>{
                setlogindata({...showlogin,email:e.target.value})
            }}></input>
            <input type='password' className='w-[50%] h-[40px] mb-5 ' value={showlogin.pass} 
            placeholder='Enter Your Password' onChange={(e)=>{
                setlogindata({...showlogin,pass:e.target.value})
            }}></input>
        </div>
         <button className='w-[50%] h-[40px] mb-5 bg-amber-300' onClick={()=>{
            if(showlogin.email.includes("@")&&showlogin.pass.length>6)
                setres("OK")
            else
                setres("has ERROR")
                   
         }}>Submit</button>
        {/* <h2>{counter}</h2>
        <div>
        <button className='bg-blue-400' onClick={()=>{
            setcounter(counter*2);
        }}>Add Double</button>
        <br/>
        <button className='bg-blue-400' onClick={()=>{
            setcounter(counter/2);
        }}>Div BY 2</button>
        </div> */}
        {/* <div>
            {showdiv}
        </div>
        <div className='flex gap-[4vw]'>
            <button className='bg-blue-500' onClick={()=>{
                setdiv(`<div>Home div</div>`)
            }}>Home</button>

            <button className='bg-blue-500' onClick={()=>{
                setdiv(`<div>Profile div</div>`)
            }}>Profile</button>

            <button className='bg-blue-500' onClick={()=>{
                setdiv(`<div>Setting div</div>`)
            }}>Setting</button>
        </div> */}
        
        
    </div>
  )
}

export default UseState