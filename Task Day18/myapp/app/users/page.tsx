import React from "react";
import Header from "../Companent/Header/Header";
import { revalidatePath } from "next/cache";
import UpdateButton from "../Companent/Header/UpdateButton";
import Link from "next/link";
type User = {
  id: string;
  name: string;
  password: string;
};
async function userDelete(id: string) {
  "use server";
  console.log(id);
  await fetch(`https://6a12e2eb78d0434e0d5d964f.mockapi.io/users/${id}`, {
    method: "DELETE",
  });
  revalidatePath("/users");
}



async function page() {
  const respond = await fetch(
    "https://6a12e2eb78d0434e0d5d964f.mockapi.io/users",
  );
  const data = await respond.json();
  // console.log(data);

  return (
    <>
     
      <div className="flex flex-wrap justify-around items-center w-full">
        
        {data.map((e: User) => {
          return (
            <div key={e.id} className="bg-green-500 text-white p-5 m-3">
               
                <div className=" flex flex-col">
                <label>UserName : </label>
                <input
                defaultValue={e.name}
                    name="username"
                    className="rounded border-[#8e8181] p-2 m-2 border-[2px] border-solid border-[black]"
                ></input>
                <label>Password : </label>
                <input
                    defaultValue={e.password}
                    name="username"
                    className="rounded border-[#8e8181] p-2 m-2 border-[2px] border-solid border-[black]"
                ></input>
                </div>
                <div className="flex justify-around items-center">
                <form action={userDelete.bind(null, e.id)}>
                <button className="p-1 bg-red-500 text-white" type="submit">
                    Delete
                </button>
                </form>
                    <Link href={`/users/${e.id}`} className="p-1 bg-yellow-500 text-white ">Update</Link>
                </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default page;
