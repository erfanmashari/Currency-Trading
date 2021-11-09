import MyCurrencies from "./MyCurrencies"
import "../../shapes.css"

const Wallet = (props) => {
    return (
        <div className="w-7/12 md:w-11/12 sm:w-full flex flex-col gap-y-6 text-3xl font-bold bg-gray-50 md:rounded-r-xl p-8 md:p-4">
            <div>
                <h1>Your CryptoCurrencies and Investment amount:</h1>
                <div id="wallet-f-row" className="flex flex-row xl:flex-col gap-x-4">
                    <MyCurrencies cryptoCurrency="Bitcoin" amount="$70,000" />
                    <MyCurrencies cryptoCurrency="Ethereum" amount="$10,000" />
                </div>
                <div id="wallet-s-row" className="flex flex-row gap-x-4">
                </div>
            </div>
        </div>
    )
}

export default Wallet
