"use client"
import React, { createContext, useContext, useReducer } from 'react'
import Reducer from './Reducer';
const dataTasks=[{id:1,task:"dsmcndmsnc"},{id:1,task:"dsmcndmsnc"},{id:1,task:"dsmcndmsnc"}]
export const tododata =createContext<any []>([]);
function TODOContextProvider({children}:any) {
  return 
  <tododata.Provider value={dataTasks}>
     {children}
  </tododata.Provider>
}

export default TODOContextProvider