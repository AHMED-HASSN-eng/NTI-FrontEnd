import React, { useContext } from 'react'
function Reducer(state:any,action:any) {
  switch(state.type)
  {
    case "inc": 
        return [...state,{task:action.payload}]
    case "remove":
        {
            state.map(()=>{
                
            })
        }
            
    default:
        return state;
  }
}

export default Reducer