import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import React from 'react'

async function userUpdate(id:string,formdata:FormData) {
    'use server'
    const data={
        name:formdata.get("username"),
        password:formdata.get("pass"),
    }
    await fetch(`https://6a12e2eb78d0434e0d5d964f.mockapi.io/users/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    revalidatePath("/users")
    redirect("/users")
}
async function page({params}:{params:{id:string}}) {
    const id=(await params).id;
    const res= await fetch(`https://6a12e2eb78d0434e0d5d964f.mockapi.io/users/${id}`)
    const user=await res.json();
  return (
    <form action={userUpdate.bind(null,user.id)} className=" flex flex-col w-[50%]  rounded-2xl shadow m-5">
           
                <label>UserName : </label>
                <input
                defaultValue={user.name}
                    name="username"
                    className="rounded border-[#8e8181] p-2 m-2 border-[2px] border-solid border-[black]"
                ></input>
                <label>Password : </label>
                <input
                    defaultValue={user.password}
                    name="pass"
                    className="rounded border-[#8e8181] p-2 m-2 border-[2px] border-solid border-[black]"
                ></input>
                     <button
                    className="p-1 bg-blue-500 text-white "
                    type="submit"
                >
                    Save
                </button>
                
      </form>
  )
}

export default page