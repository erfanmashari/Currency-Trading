import { Link } from "react-router-dom"
import { BiEnvelope } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'

const PSHeader = () => {
    return (
        <div className="w-full flex items-center justify-end flex-row lg:flex-col gap-2 mb-10">
            <div className="flex flex-row gap-3">
                <Link to="/messages">
                    <p className="w-2 h-2 absolute bg-blue-600 text-white rounded-xl p-0.5 text-sm"></p>
                    <BiEnvelope className="text-2xl cursor-pointer" />
                </Link>
                <Link to="/notif">
                    <IoMdNotificationsOutline className="text-2xl cursor-pointer" />
                </Link>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <img src="../img/Man.png" alt="Man" className="w-10" />
                <h1 className="font-bold">Erfan Mashari</h1>
            </div>
        </div>
    )
}

export default PSHeader
