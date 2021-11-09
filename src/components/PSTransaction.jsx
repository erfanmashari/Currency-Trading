import OthersTransaction from './OthersTransaction'

const PSTransaction = () => {
    return (
        <footer className="w-full">
            <h1 className="text-xl font-bold mb-3">Transaction</h1>
            <div className="w-full h-60 bg-white overflow-scroll shadow-md rounded-xl px-2 py-0.5">
                <OthersTransaction />
            </div>
        </footer>
    )
}

export default PSTransaction
