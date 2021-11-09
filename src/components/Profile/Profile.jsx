import React from 'react'

const Profile = () => {
    return (
        <div className="w-7/12 md:w-11/12 sm:w-full flex flex-col text-xl font-bold gap-y-3 bg-gray-50 md:rounded-r-xl p-8 md:p-4">
            <h1 className="text-3xl font-bold">Profile</h1>
            <div className="w-full flex flex-col justify-center items-center">
                <img src="./img/Man.png" alt=" Man Avatar" />
                <p className="text-3xl text-blue-600 font-bold mt-4 mb-8">Erfan Mashari</p>
            </div>
            <h1>First Name:</h1>
            <p className="text-red-500">Erfan</p>
            <h1>Last Name:</h1>
            <p className="text-red-500">Mashari</p>
            <h1>Birthday:</h1>
            <p className="text-red-500">01/14/2003</p>
            <h1>SignUp Date:</h1>
            <p className="text-red-500">11/08/2021</p>
        </div>
    )
}

export default Profile
