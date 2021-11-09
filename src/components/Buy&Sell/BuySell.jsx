import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import '../../shapes.css'
import { BsCurrencyBitcoin } from "react-icons/bs"
import { FaEthereum } from "react-icons/fa"
import { SiRipple, SiStellar, SiIota, SiChainlink } from "react-icons/si"

const BuySell = () => {
    const [currency, setCurrency] = useState("")
    const [currencyIcon, setCurrencyIcon] = useState(<p className="text-xl text-red-600">"Choose a CryptoCurrency"</p>)
    const [customerType, setCustomerType] = useState("")
    const [price, setPrice] = useState("")
    
    useMemo(() => {
        switch (currency) {
        case "Bitcoin":
            setCurrencyIcon(<BsCurrencyBitcoin className="text-8xl" />)
            break;
        case "Ethereum":
            setCurrencyIcon(<FaEthereum className="text-8xl" />)
            break;
        case "Stellar":
            setCurrencyIcon(<SiStellar className="text-8xl" />)
            break;
        case "Iota":
            setCurrencyIcon(<SiIota className="text-8xl" />)
            break;
        case "Chainlink":
            setCurrencyIcon(<SiChainlink className="text-8xl" />)
            break;
        case "Ripple":
            setCurrencyIcon(<SiRipple className="text-8xl" />)
            break;
        default:
            setCurrencyIcon(<p className="text-2xl text-red-600">Choose a CryptoCurrency</p>)
            break;
    }
    }, [currency])

    const addToWallet = () => {
        setCurrency("")
        setCustomerType("")
        setPrice("")
    }
    
    return (
        <div className="w-7/12 md:w-11/12 sm:w-full relative bg-gray-50 md:rounded-r-xl p-8 md:p-4">
            <h1 className="font-bold text-3xl">Trading</h1>
            <div className="flex flex-col sm:flex-col xl:flex-row">
                <div className="w-full flex xl:flex-col flex-row xl:items-center justify-between xl:gap-y-28 xl:mb-36 mb-28 lg:px-4 px-10">
                    <div id="hexagon" className="flex justify-center items-center text-8xl">
                        <BsCurrencyBitcoin onClick={() => setCurrency("Bitcoin")} className="cursor-pointer" />
                    </div>
                    <div id="hexagon" className="flex justify-center items-center text-7xl">
                        <FaEthereum onClick={() => setCurrency("Ethereum")} className="cursor-pointer" />
                    </div>
                    <div id="hexagon" className="flex justify-center items-center text-7xl">
                        <SiStellar onClick={() => setCurrency("Stellar")} className="cursor-pointer" />
                    </div>
                </div>
                <div className="w-full flex xl:flex-col flex-row xl:items-center justify-between xl:gap-y-28 xl:mb-36 mb-40 lg:px-4 px-10">
                    <div id="hexagon" className="flex justify-center items-center text-7xl">
                        <SiIota onClick={() => setCurrency("Iota")} className="cursor-pointer" />
                    </div>
                    <div id="hexagon" className="flex justify-center items-center text-7xl">
                        <SiChainlink onClick={() => setCurrency("Chainlink")} className="cursor-pointer" />
                    </div>
                    <div id="hexagon" className="flex justify-center items-center text-7xl">
                        <SiRipple onClick={() => setCurrency("Ripple")} className="cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div className="w-full flex flex-row items-center justify-center text-center text-5xl font-bold text-blue-600 mt-4 mb-4 ml-4">
                    {currencyIcon}<p className="ml-3">{currency}</p>
                </div>
            </div>
            <div className="flex flex row items-center gap-6 mb-6">
                <h1 className="text-3xl font-bold">Which one:</h1>
                <div className="flex flex-row items-center text-blue-700 font-bold gap-2">
                    <input type="radio" name="bs" id="buy" phaceholder="Buy" onClick={() => setCustomerType("Buy")} />
                    <p>Buy</p>
                </div>
                <div className="flex flex-row items-center text-blue-700 font-bold gap-2">
                    <input type="radio" name="bs" id="sell" placeholder="Sell" onClick={() => setCustomerType("Sell")} />
                    <p>Sell</p>
                </div>
            </div>
            <div className="flex flex-row sm:flex-col gap-6">
                <h1 className="text-3xl font-bold">Price:</h1>
                <div className="flex flex-row md:text-xl text-3xl font-bold items-center bg-transparent border border-black rounded-lg shadow-md px-3">
                    $<input type="number" value={price} onChange={e => setPrice(e.target.value)}
                    name="price" id="price" className="bg-transparent outline-none p-2" />
                </div>
            </div>
            {currency !== "" && customerType !== "" ?
            <Link to={{
                pathname: "/wallet",
                data: currency // your data array of objects
            }}>
                <button onClick={() => addToWallet()}
                className="w-full bg-blue-700 hover:bg-green-600 text-white rounded-lg mt-6 p-4">
                    {customerType} {currency} 
                </button>
            </Link>
            : ""}
        </div>
    )
}

export default BuySell
