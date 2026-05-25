// 'use client';

import Header from "./Companent/Header/Header";

// import { useRouter } from "next/navigation";

export default function Home() {
  // const router = useRouter();
  async function userLogin(params: FormData) {
    "use server";
    const _username = params.get("username");
    const _password = params.get("pass");
    const responed = await fetch(
      "https://6a12e2eb78d0434e0d5d964f.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name: _username, password: _password }),
      },
    );
  }
  return (
    <div className="w-[50%] shadow-[0px 4px 8px rgb(0,0,0,0.2)] rounded-[10px]">
      <form
        action={userLogin}
        className="w-full flex flex-col justify-around items-center m-2"
      >
        <input
          type="text"
          name="username"
          className=" rounded border-[#8e8181] p-2 m-2"
          placeholder="Enter Your User Name"
        ></input>
        <input
          type="password"
          name="pass"
          className=" rounded border-[#8e8181] p-2 m-2"
          placeholder="Enter Your Password"
        ></input>
        <button
          type="submit"
          className="bg-blue-500 px-3 py-2 rounded text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}
