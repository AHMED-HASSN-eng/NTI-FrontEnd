"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

function Header() {
    const _path=usePathname();
    const ulData=[
    {href:"/",name:"home"},
    {href:"/updatePage",name:"updatepage"},
    {href:"/users",name:"users"},
    {href:"/testr",name:"test"},
    {href:"/about",name:"about"},
    {href:"/product",name:"product"},
    {href:"/service",name:"service"},
    ]
    // if(_path==="/")
    //   return("");
  return (
    <div className='bg-gray-400 flex p-5 justify-between items-center'>
            <div className='w-[25%]'>
                <h2>Logo</h2>
            </div>
            <div className='w-[75%]'>
                <ul className='flex justify-around items-center gap-[4vw] text-blue-500'>
                   {
                    ulData.map((e,i)=>{
                      return <Link key={i} href={e.href} className="capitalize {}"  >
                                <li>{e.name}</li>
                             </Link>
                     })
                   } 
                </ul>
            </div>
    </div>
  )
}

export default Header