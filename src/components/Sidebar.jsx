import SideButton from './SideButton'
import { Link } from "react-router-dom"
import { AiFillCodeSandboxSquare } from "react-icons/ai"
import { FaReact } from "react-icons/fa"

const Sidebar = () => {
    return (
        <>
            <div className="w-2/12 lg:hidden justify-center items-center rounded-l-xl bg-white p-4">
                <div className="flex flex-row items-center mb-12">
                    <AiFillCodeSandboxSquare className="text-5xl text-blue-600" />
                    <h1 className="text-xl font-bold">Square</h1>
                </div>
                <Link to="/dashboard">
                    <SideButton iconName="home" title="Dashboard" />
                </Link>
                <Link to="/statistics">
                    <SideButton iconName="statistics" title="Statistics" />
                </Link>
                <Link to="/wallet">
                    <SideButton iconName="wallet" title="Wallet" />
                </Link>
                {/* <Link to="/buysell">
                    <SideButton iconName="buy" title="Buy & Sell" />
                </Link> */}
                <Link to="/profile">
                    <SideButton iconName="profile" title="Profile" />
                </Link>
                <Link to="/logout">
                    <SideButton iconName="logout" title="Log Out" />
                </Link>
                <FaReact className="text-blue-200 text-9xl mx-auto mt-16" />
            </div>
            <div className="w-1/12 hidden sm:w-0 sm:hidden md:w-2/12 lg:block items-center rounded-l-xl bg-white p-4 md:p-1">
                <AiFillCodeSandboxSquare className="block text-5xl text-blue-600 mx-auto mb-12" />
                <Link to="/dashboard">
                    <SideButton iconName="home" />
                </Link>
                <Link to="/statistics">
                    <SideButton iconName="statistics" />
                </Link>
                <Link to="/wallet">
                    <SideButton iconName="wallet" />
                </Link>
                <Link to="/buysell">
                    <SideButton iconName="buy" />
                </Link>
                <Link to="/profile">
                    <SideButton iconName="profile" />
                </Link>
                <Link to="/logout">
                    <SideButton iconName="logout" />
                </Link>
            </div>
        </>
    )
}

export default Sidebar
