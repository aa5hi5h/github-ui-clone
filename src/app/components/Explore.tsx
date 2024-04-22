import { Key } from "lucide-react"


const Explore = () => {
    const title = [
        "Topics","Collections","Events","Trending","sponsor"
    ]
    return (
        <div className="mt-2 p-2 flex justify-between max-w-3xl  mx-auto items-center">
        <div className="flex gap-4 items-center" >
            {
                title.map((title) => ( <p className="hover:opacity-100 p-2 hover:bg-neutral-200 transition opacity-70  rounded-md cursor-pointer" key={title}>{title}</p>))
            }   
        </div >
        <button className="hidden sm:flex hover:text-neutral-500 hover:border-neutral-500 transition px-2 py-1 border-2 rounded-lg border-zinc-950 ">Subscribe</button>
        </div>
    )
}

export default Explore