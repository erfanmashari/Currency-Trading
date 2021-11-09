import Transaction from './Transaction'

const Transactions = () => {
    return (
        <div className="w-7/12 md:w-11/12 sm:w-full relative bg-gray-50 md:rounded-r-xl p-8 md:p-4">
            <h1 className="font-bold text-3xl">Transactions</h1>
            <Transaction />
        </div>
    )
}

export default Transactions
