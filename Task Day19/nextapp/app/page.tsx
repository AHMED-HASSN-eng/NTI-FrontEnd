import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-between bg-white font-sans dark:bg-black w-[80%] mx-auto mt-[5%]">
      <div className=" flex flex-col justify-center items-start w-[50%]">
          <h1 className="text-[#426eb5] text-[40px] font-bold">We are expert</h1>
          <h1 className="text-[#f9b01b] text-[40px] font-bold">Digital Marketing</h1>
          <p className="text-gray-500 mt-2.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Explicabo adipisci quasi reprehenderit, omnis ex minus nisi 
            modi dicta sint neque mollitia voluptates molestias ullam magnam 
            sapiente ad quos, possimus est.</p>
          <div className="flex justify-center items-center gap-[4vw] mt-7">
            <button className="bg-[#426eb5] text-white px-10 py-3 rounded-[3px] cursor-pointer">Get Services</button>
            <button className="border-[2px] border-[#426eb5] px-10 py-3 rounded-[3px] cursor-pointer">About Us</button>
          </div>  
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <img src="sea.jpg" alt="sea" className="rounded-full w-[80%]"></img>
      </div>
    </div>
  );
}
