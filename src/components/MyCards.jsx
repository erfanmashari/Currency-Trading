import { FaReact } from 'react-icons/fa'

const MyCards = () => {
    return (
        <div className="w-full mb-10">
            <h1 className="text-xl font-bold mb-3">My Cards</h1>
            <div className="w-full flex flex-col bg-gradient-to-r from-blue-500 to-blue-800 rounded-2xl p-4">
                <FaReact className="text-blue-200 text-3xl mb-4" />
                <p className="text-white text-2xl mb-4">**** **** **** 1234</p>
                <div className="flex flex-row gap-x-5">
                    <div>
                        <h1 className="text-pink-200">Valid from</h1>
                        <p className="text-white">11/21</p>
                    </div>
                    <div>
                        <h1 className="text-pink-200">Expiration date</h1>
                        <p className="text-white">11/25</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCards
