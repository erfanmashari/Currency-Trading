// import Man from "../img/Man.png"
import { BiEnvelope } from 'react-icons/bi'
import { IoMdNotificationsOutline, IoIosArrowDown } from 'react-icons/io'

const PSHeader = () => {
    return (
        <div className="w-full flex items-center justify-end flex-row lg:flex-col gap-2 mb-10">
            <div className="flex flex-row gap-3">
                <BiEnvelope className="text-2xl cursor-pointer" />
                <IoMdNotificationsOutline className="text-2xl cursor-pointer" />
            </div>
            <div className="flex flex-row gap-2 items-center">
                <img src="./img/Man.png" alt="Man" className="w-10" />
                <h1 className="font-bold">Erfan Mashari</h1>
                <IoIosArrowDown className="text-pink-400 cursor-pointer" />
            </div>
        </div>
    )
}

export default PSHeader
