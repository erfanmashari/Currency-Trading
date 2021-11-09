import React from 'react'

const Welcome = () => {
    return (
        <div className="w-7/12 md:w-11/12 sm:w-full flex flex-col justify-center items-center text-center text-red-600 text-5xl gap-y-6 font-bold bg-gray-50 md:rounded-r-xl p-8 md:p-4">
          <h1>Welcome to Square!</h1>
          <p>Have a Good Trading...</p>
          <p className="text-sm text-white bg-red-700 rounded-lg p-4 mt-6">Tip: Check out Messages in top of your right column!</p>
        </div>
    )
}

export default Welcome
