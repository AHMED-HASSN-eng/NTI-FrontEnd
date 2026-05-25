'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function UpdateButton({user}:any) {
    const router=useRouter();
  return (
      <button
                    className="p-1 bg-yellow-500 text-white "
                    type="submit"
                    onClick={()=>{
                    router.push("/updatepage")
                    }}
                >
                    Update
                </button>
  )
}

export default UpdateButton