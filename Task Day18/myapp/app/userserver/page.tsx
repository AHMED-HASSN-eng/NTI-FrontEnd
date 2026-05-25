import { revalidatePath } from 'next/cache';
import React from 'react'
type User={
    id:string,
    name:string
}
async function page() {
    const respond=await fetch("");
    const data=await respond.json();
    async function  addUser(params:FormData) {
         'use server';
         const username=params.get("name");
         await fetch("",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({username})      
         });
         revalidatePath("/userserver")
    }
  return (
    <>
    <form action={addUser} >
        <input name='user' type='text' className=' rounded border-[#8e8181] p-2 m-2' placeholder='ENter New User'></input>
        <button type='submit' className='bg-blue-500 px-3 py-2 rounded text-white'>Add User</button>
    </form>
    <div>
        {
              
        }
    </div>
    </>
  )
}

export default page