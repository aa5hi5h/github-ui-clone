import { Bug, Code, GitPullRequest, LaptopMinimal, Star } from "lucide-react"

interface InterestProp{
    title: string,
    stars: string,
    color: string,
    language: string,
    date: string

}

const InterestModal : React.FC<InterestProp> = ({title,stars,color,language,date}) => {
    return (
        <div className="flex flex-col mb-8 border-2 shadow-sm  border-zinc-800 px-4  py-2 rounded-lg gap-2 ">
            <h1 className="font-mono">Based on Your Interest's</h1>
            <div className="flex justify-between ">
                <div className="flex items-center  gap-2">
                <LaptopMinimal />
                <h1 className="text-sky-600 hover:text-blue-800 text-lg font-medium">{title.slice(0, 20).replace(/'/g, "&apos;")}</h1>
                </div>
                
                <div className="flex gap-2 px-2 py-1  items-center rounded-md border-2 border-slate-600">
                    <Star />
                    <div className="flex items-center gap-1 pr-4"> Stars <p className=" font-medium pl-2 p-1 rounded-md  bg-neutral-200">{stars}</p></div>
                </div>
            </div>
            <div className="flex gap-4 border-2 border-slate-500 max-w-[22rem] p-2 pr-4 rounded-md ">
                <div className="flex gap-1 opacity-80 hover:opacity-100 cursor-pointer">
                <Code />
                <h1>Code</h1>
                </div >
                <div className="flex gap-1 border-x-2 border-slate-500 px-2 h-full   opacity-80 hover:opacity-100 cursor-pointer">
                <Bug />
                <h1>Issue</h1>
                </div>
                <div className="flex gap-1 opacity-80 hover:opacity-100 cursor-pointer">
                <GitPullRequest />
                <h1>Pull Request</h1>
                </div>
                
            </div>
            <div className="flex  gap-4 mt-2 pt-2 mb-2 border-zinc-800  border-t-2 ">
                <div >{date}</div>
                <div className="flex pl-8 gap-1 items-center">
                <div className={`${color} rounded-full w-3.5 h-3.5   `}></div>
                <div className="">{language}</div>
            </div>
            </div>

        </div>
    )
}

export default InterestModal
