import React from 'react'
import { AiFillHome, AiFillDollarCircle } from "react-icons/ai"
import { TiChartLine } from "react-icons/ti"
import { IoMdWallet } from "react-icons/io"
import { RiExchangeBoxFill, RiSettings5Fill } from "react-icons/ri"
import { CgProfile } from "react-icons/cg"

const SideButton = ({ iconName, title }) => {
    let icon = ""
    switch (iconName) {
        case "home":
            icon = <AiFillHome />
            break;
        case "trade":
            icon = <TiChartLine />
            break;
        case "wallet":
            icon = <IoMdWallet />
            break;
        case "exchange":
            icon = <RiExchangeBoxFill />
            break;
        case "buy":
            icon = <AiFillDollarCircle />
            break;
        case "profile":
            icon = <CgProfile />
            break;
        case "setting":
            icon = <RiSettings5Fill />
            break;
        default:
            icon = ""
            break;
    }
    
    return (
        <div className="flex flex-row lg:justify-center items-center cursor-pointer mx-auto rounded-xl mb-4 p-2 pl-5">
            <span className="text-pink-300 text-3xl mr-4">{icon}</span> 
            {title !== undefined ? <h2 className="text-pink-300">{title}</h2> : ""}
        </div>
    )
}

export default SideButton
