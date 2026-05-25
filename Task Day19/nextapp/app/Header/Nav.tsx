import Link from 'next/link'
import React from 'react'

function Nav() {
       const ulData=[
        {href:"/",name:"Home"},
        {href:"/about",name:"aboutUs"},
        {href:"/courses",name:"courses"},
        {href:"/pages",name:"pages"},
        {href:"/blog",name:"blog"},
        {href:"/contact",name:"contact"},
    ]
 const ullinks=ulData.map((e)=>{
    return(
        <Link href={e.href} key={e.href} className='capitalize'><li>{e.name}</li></Link>
    )
   
 })   
  return (
    <div className='flex justify-between items-center w-[85%] h-20 text-gray-500 text-[20px]'>
        <div className='flex justify-center items-center w-[10%] text-gray-600 font-bold ml-[4vw]'>
            <h2>Last Task</h2>
        </div>
        <nav className='w-[65%]'>
            <ul className='flex justify-center items-center gap-[4vw]  w-full'>
                {ullinks}
            </ul>
        </nav>
    </div>
  )
}

export default Nav