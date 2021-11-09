import React from 'react'

const Transaction = () => {
    return (
        <div className="w-full flex flex-row items-center border-l-4 border-yellow-500 gap-x-3 my-3 py-1">
            <img src="../img/Man.png" alt="Avatar" className="w-14 h-14" />
            <h1 className="text-blue-900 text-2xl font-bold">Jacquelyn Pierce</h1>
            <p className="text-blue-600 font-bold">+$1,400</p>
            <p className="text-pink-400 text-sm">08:00 AM - 19 Aug</p>
        </div>
    )
}

export default Transaction
