import { Laptop, PhoneCall, UserRound } from "lucide-react"

interface trendsProp{
    name: string,
    repo: string
}

const SubTrends: React.FC<trendsProp> = ({name,repo}) => {
    return (
        <div className="flex  border-t-2 border-zinc-800 w-full  gap-4 items-center ">
            <div className="">
                <UserRound className="bg-slate-400 items-center flex rounded-full cursor-pointer " size={38} />
            </div>
            <div className="flex  flex-col gap-1 mt-1">
                <p className="text-xl font-medium hover:text-neutral-600">{name}</p>
                <div className="flex group ">
                    <Laptop className="group-hover:underline" />
                <p className="text-sm font-light group-hover:underline ">{repo}</p>
                </div>
                
            </div>
        </div>
    )
}

export default SubTrends