"use client"
import React, { useContext } from 'react'
import UseReduser from './UseReduser'
import { useStaticLang } from './LanguageProvider'
import languageContext from './LanguageProvider'

function page() {
  const data=useStaticLang();
  return (
   <>
   </>
    
  )
}

export default page