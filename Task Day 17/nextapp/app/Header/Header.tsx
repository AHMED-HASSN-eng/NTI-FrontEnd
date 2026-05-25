import Link from "next/link";

export default function Header() {
    let navitems=["home","about","Products","Contact","TODO","Exercises"];
    let ulitems=navitems.map((e)=>{
            return(
                <Link key={e} href={`/${e}`}><li className="capitalize decoration-0 text-white">{e}</li></Link>
            );
    });
  return (

    <div className="flex bg-black w-full justify-around items-center h-15">
        <div className="w-[25%] text-white ml-5"><h2>Logo</h2></div>
        <nav className="w-[75%]">
            <ul className="flex gap-[4-vw] justify-around items-center">
                {ulitems}
            </ul>
        </nav>
    </div>
  )
}
