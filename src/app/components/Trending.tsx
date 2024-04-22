import { TrendingUp } from "lucide-react"
import SubTrends from "./SubTrends"


const Trending = () => {
    const Trending = [
        {profile:"",name:"JJ Kasper",repo:"notion-blog"},
        {profile:"",name:"Casey",repo:"just"},
        {profile:"",name:"jdhao",repo:"nvim-config"},
        {profile:"",name:"shadcn",repo:"taxonomy"},
        {profile:"",name:"quakie",repo:"react-components"}

    ]
    return (
        <div className=" hidden md:flex flex-col mr-8 border-2 mt-8 space-y-2 sticky bg-white top-[116px]   border-slate-800 px-4 py-2 rounded-md h-max">
           <div className="flex bg-neutral-300 rounded-md px-4  w-full gap-2">
            <TrendingUp />
            <p className="text-xl font-normal  border-b-2 pb-2  w-full">Trending developers</p>
           </div>
           <div className="flex flex-col  gap-4">
            {Trending.map((trend) => (
                <SubTrends key={trend.name} name={trend.name} repo={trend.repo}/>
            ))}
           </div>
           <p className="text-xl border-t-2 border-zinc-800 font-normal mb-4  px-2 pt-2 text-blue-600 hover:text-blue-800">See more developers...</p>
        </div>
    )
}

export default Trending