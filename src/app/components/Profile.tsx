import Image from "next/image"
import logo from "@/assets/gitlogo.png"
const Profile = () =>  {
    return (
        <div className="flex flex-col border-2 max-w-sm p-2 mx-auto mt-4 shadow-md  border-slate-500 rounded-lg items-center justify-center">
            <div className="flex items-center border-b-2 pb-2 w-full border-zinc-800 justify-center">
                <Image className="w-[3rem] h-[3rem] m-2 object-cover" src={logo} alt="profile photo" />
                 <div className="text-lg">
                    <h1 className="text-xl font-medium">c7ultra</h1>
                    <p>cieser</p>
                </div>           
            </div>
            <div className=" pb-2 pt-2   border-b-zinc-800">
                <h1 className="text-blue-600 text-lg font-normal hover:text-blue-800 transition flex flex-col items-center">9 Groups</h1>
                <h1 className="text-blue-600 text-lg font-normal hover:text-blue-800 transition ">13 Starred Repositories</h1>
            </div>
        </div>
    )
}

export default Profile