"use client"
import React, { createContext,useContext } from 'react'
const lang=[{language:"EN"},{language:"AR"}]
export const languageContext=createContext<any[]>([]);  
function LanguageProvider({children}:any) {
  return (
    <languageContext.Provider value={lang}>
            {children}
    </languageContext.Provider>
  )
}
export const useStaticLang = () => useContext(languageContext);
export default LanguageProvider