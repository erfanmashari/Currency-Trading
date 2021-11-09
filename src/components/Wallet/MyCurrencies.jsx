import { BsCurrencyBitcoin } from "react-icons/bs"
import { FaEthereum } from "react-icons/fa"
import { SiRipple, SiStellar, SiIota, SiChainlink } from "react-icons/si"

const MyCurrencies = ({ cryptoCurrency, amount }) => {
    let crypto;
    switch (cryptoCurrency) {
        case "Bitcoin":
            crypto = <BsCurrencyBitcoin />
            break;
        case "Ethereum":
            crypto = <FaEthereum />
            break;
        case "Stellar":
            crypto = <SiRipple />
            break;
        case "Iota":
            crypto = <SiStellar />
            break;
        case "Chainlink":
            crypto = <SiIota />
            break;
        case "Ripple":
            crypto = <SiChainlink />
            break;
        default:
            crypto = ""
            break;
    }

    return (
        <div className="flex flex-col items-center text-center border border-4 border-white shadow-xl rounded-xl px-4">
            <div id="hexagon" className="flex justify-center items-center text-7xl mb-32">{crypto}</div>
            <h1 className="text-xl">Investment <br/>amount:</h1>
            <p className="text-blue-700 mb-4">{amount}</p>
        </div>
    )
}

export default MyCurrencies
