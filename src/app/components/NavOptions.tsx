import { ArrowDown, PanelTopDashedIcon, PanelTopOpen } from "lucide-react"


const NavOptions = () => {
    return (
        <div className="flex items-center gap-4 font-medium text-lg">
            <div className="flex cursor-pointer ">
                Products
            </div>
            <div className="flex cursor-pointer">
                Solutions
            </div>
            <div className="flex cursor-pointer">
                Open Source
            </div>
            <div className="flex cursor-pointer">
                Pricing
            </div>

        </div>
    )
}

export default NavOptions