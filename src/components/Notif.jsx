import React from 'react'

const Notif = () => {
    return (
        <div className="w-7/12 md:w-11/12 sm:w-full flex flex-col gap-y-6 text-3xl font-bold bg-gray-50 md:rounded-r-xl p-8 md:p-4">
            <h1 className="text-2xl font-bold">Notifications</h1>
            <div className="w-full flex justify-center items-center mt-36">
                <p className="text-3xl font-bold text-red-600">No Notifications Yet!</p>
            </div>
        </div>
    )
}

export default Notif
