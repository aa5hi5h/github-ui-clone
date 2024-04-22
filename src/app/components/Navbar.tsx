import logo from "@/assets/gitlogo.png"
import { Search } from "lucide-react"

import Image from "next/image"
import Link from "next/link"
import NavOptions from "./NavOptions"

const Navbar = () => {
    return (
        <div className="flex items-center border-b-2 rounded-md border-neutral-400 px-2 pt-1 pb-2 justify-between">
            <div className="flex items-center gap-8">
            <Link href={'/'} >
            <Image className="w-20 h-20 object-cover hidden md:flex " src={logo} alt="logo" />
            </Link>
            <div className="hidden lg:flex ">
                <NavOptions />
            </div>
            </div>

            <div className=" flex  gap-8 relative ">
                <div className="absolute top-0 right-[180px] md:flex  items-center">
                    <Search className="absolute left-2   " />
            <input className="outline-0 border-2 pl-10 py-1 border-neutral-900 rounded-lg" placeholder="Search or jump to..." />
            </div>
            <div className="flex gap-4 md:gap-2  rounded-lg">
                <button className="hover:text-neutral-500  transition">Sign in</button>
                <button className="hover:text-neutral-500 hover:border-neutral-500 transition  py-1 border-2 rounded-lg border-zinc-950 ">Sign up</button>
            </div>
            </div>
        </div>
    )
}

export default Navbar