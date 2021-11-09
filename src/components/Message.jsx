import { useState } from "react"
import { BsEnvelopeFill } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

const Message = () => {
    const [arrow, setArrow] = useState(true)
    const [display, setDisplay] = useState("hidden")
    
    const showMessage = () => {
        setArrow(!arrow)

        if(!arrow) {
            setDisplay("hidden")
        } else {
            setDisplay("flex")
        }
    }


    return (
        <div className="w-full flex flex-col  border-2 border-black rounded-md px-2 py-1">
            <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row gap-x-4">
                    <BsEnvelopeFill className="w-8 h-8" />
                    <h1 className="text-xl font-bold">From Developer</h1>
                </div>
                {arrow ? 
                <MdOutlineKeyboardArrowDown onClick={() => showMessage()}
                className="cursor-pointer" /> :
                <MdOutlineKeyboardArrowUp onClick={() => showMessage()}
                className="cursor-pointer" /> }
            </div>
            <div className={display + " font-bold text-sm p-4"}>
                <p>
                    Hello There,<br/>
                    Thank you for seeing my sample work I hope you like it!<br/>
                    with this project i just want to show you my work with libraries like 
                    React, React Router DOM and Apexchart and Tailwind Framework.<br/>
                    if you have any opinion about this, i'd be glad if you send it to my email address as forward:<br/>
                    Erfanmashari2@gmail.com<br/>
                    Best Wishes For You!<br/>
                    Erfan Mashari
                </p>
            </div>
        </div>
    )
}

export default Message
