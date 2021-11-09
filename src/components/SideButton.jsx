import { AiFillHome, AiFillDollarCircle } from "react-icons/ai"
import { TiChartLine } from "react-icons/ti"
import { IoMdWallet } from "react-icons/io"
import { CgProfile } from "react-icons/cg"
import { FiPower } from "react-icons/fi"

const SideButton = ({ iconName, title }) => {
    let icon = ""
    switch (iconName) {
        case "home":
            icon = <AiFillHome />
            break;
        case "statistics":
            icon = <TiChartLine />
            break;
        case "wallet":
            icon = <IoMdWallet />
            break;
        case "buy":
            icon = <AiFillDollarCircle />
            break;
        case "profile":
            icon = <CgProfile />
            break;
        case "logout":
            icon = <FiPower />
            break;
        default:
            icon = ""
            break;
    }
    
    return (
        <button className="w-full flex flex-row lg:justify-center items-center text-pink-300 cursor-pointer mx-auto rounded-xl mb-4 p-2 pl-5
        hover:text-blue-600 focus:bg-blue-600 focus:text-white">
            <span className="text-3xl mr-4 group-focus:text-white">{icon}</span> 
            {title !== undefined ? <h2>{title}</h2> : ""}
        </button>
    )
}

export default SideButton
