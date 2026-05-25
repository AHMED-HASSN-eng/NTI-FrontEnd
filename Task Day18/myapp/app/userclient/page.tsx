import React, { useEffect } from 'react'
import {useState} from 'react'
type User={
    id:string,
    name:string
}
function page() {
    const [users,setusers]=useState<User[]>([]);
    const [error,seterror]=useState<any>(null);
    const [loadding,setloadding]=useState(true);
    useEffect(()=>{
       async function getUsers(){
            try{
                const respond=await fetch("");
                if(!respond.ok) throw new Error ("The Fetch Data Failed");
               const data=await respond.json();
               setusers(data);
            }
            catch(error){
                seterror(error);
            }
            finally{
               setloadding(false);
            }

        }
        getUsers();
    },[])
    if(error)return <div>{error}</div>
    if(loadding)return <div className='w-full h-screen flex justify-center items-center text-blue-500'>Loadding....</div>
  return (
    <div className=''>
        {
            users.map((e)=>{
                return <p>{e.name}</p>
            })
        }
    </div>
  )
}

export default page