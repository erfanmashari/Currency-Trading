import { BsCurrencyBitcoin } from 'react-icons/bs'
import { IoMdArrowDropup } from 'react-icons/io'

const PriceCard = ({ currency }) => {
    let currencyIcon = ""
    switch (currency) {
        case "bit":
            currencyIcon = <BsCurrencyBitcoin className="text-5xl text-white bg-blue-600 rounded-xl mr-2 p-1" />
            break;
        default:
            break;
    }

    return (
        <div className="w-60 min-w-max flex flex-row items-center bg-white shadow-md rounded-2xl mt-3 mb-2 p-3">
            {currencyIcon}
            <div>
                <h1 className="text-xl font-bold">$66,556</h1>
                <div className="flex flex-row items-center">
                    <IoMdArrowDropup className="text-xl text-blue-500" />
                    <h2 className="text-blue-600 mr-1">45%</h2>
                    <p className="text-blue-600">This Week</p>
                </div>
            </div>
        </div>
    )
}

export default PriceCard
