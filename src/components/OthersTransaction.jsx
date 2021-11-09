import React from 'react'

const OthersTransaction = () => {
    return (
        <div className="w-64 flex flex-row items-center gap-x-2 my-3">
            <img src="../img/Man.png" alt="Man" className="w-12" />
            <div>
                <h1 className="text-blue-900 text-md font-bold">Jacquelyn Pierce</h1>
                <p className="text-pink-200 text-sm">08:00 AM - 19 Aug</p>
            </div>
            <p className="text-blue-600 font-bold">+$1,400</p>
        </div>
    )
}

export default OthersTransaction
