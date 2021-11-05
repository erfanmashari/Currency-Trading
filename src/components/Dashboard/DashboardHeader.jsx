import { CgSearch } from 'react-icons/cg'
import { BiMenu } from 'react-icons/bi'

const DashboardHeader = ({ title }) => {
    return (
        <div className="w-full flex flex-row sm:flex-col sm:items-center justify-between">
            <div className="w-full flex flex-row justify-between items-center sm:mb-4">
                <BiMenu className="text-3xl hidden sm:block cursor-pointer" />
                <h1 className="font-bold text-3xl">{title}</h1>
            </div>
            <div className="w-8/12 sm:w-full flex flex-row gap-1 sm:justify-between items-center">
                <div className="w-full md:w-10/12 flex flex-row justify-center items-center rounded-lg bg-white shadow-md p-2">
                    <CgSearch className="w-2/12 text-xl mr-2" />
                    <input type="text" placeholder="Search Anything..." className="w-10/12 outline-none h-8" />
                </div>
                <img src="./img/Man.png" alt="Avatar" className="w-2/12 hidden md:block cursor-pointer" />
            </div>
        </div>
    )
}

export default DashboardHeader
