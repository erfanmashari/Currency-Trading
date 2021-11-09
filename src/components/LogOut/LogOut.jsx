import { Link } from 'react-router-dom'

const LogOut = () => {
    const Logout = () => {
        document.querySelector("#root").firstChild.remove()
    }

    return (
        <div className="w-7/12 md:w-11/12 sm:w-full flex flex-col justify-center items-center text-center gap-y-6 bg-gray-50 md:rounded-r-xl p-8 md:p-4">
            <h1 className="font-bold text-3xl">Are you sure yo want to logout <br/>from your Panel?</h1>
            <p className="text-red-600 font-bold text-3xl">Note: All of your data will be Lost!</p>
            <div className="flex sm:flex-col gap-6">
                <button onClick={() => Logout()}
                className="w-36 text-white hover:bg-red-600 text-xl font-bold bg-blue-600 rounded-lg mx-4 p-4">Logout</button>
                <Link to="/">
                    <button className="w-36 text-white hover:bg-red-600 text-xl font-bold bg-blue-600 rounded-lg mx-4 p-4">Cancel</button>
                </Link>
            </div>
        </div>
    )
}

export default LogOut
