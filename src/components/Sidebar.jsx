import SideButton from './SideButton'
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
                <SideButton iconName="home" title="Dashboard" />
                <SideButton iconName="trade" title="Trading" />
                <SideButton iconName="wallet" title="Wallet" />
                <SideButton iconName="exchange" title="Exchange" />
                <SideButton iconName="buy" title="Buy & Sell" />
                <SideButton iconName="profile" title="Profile" />
                <SideButton iconName="setting" title="Setting" />
                <FaReact className="text-blue-200 text-9xl mx-auto mt-16" />
            </div>
            <div className="w-1/12 hidden sm:w-0 md:w-2/12 lg:block items-center rounded-l-xl bg-white p-4 md:p-1">
                <AiFillCodeSandboxSquare className="block text-5xl text-blue-600 mx-auto mb-12" />
                <SideButton iconName="home" />
                <SideButton iconName="trade" />
                <SideButton iconName="wallet" />
                <SideButton iconName="exchange" />
                <SideButton iconName="buy" />
                <SideButton iconName="profile" />
                <SideButton iconName="setting" />
            </div>
        </>
    )
}

export default Sidebar
