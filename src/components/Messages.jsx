import Message from "./Message"

const Messages = () => {
    return (
        <div className="w-7/12 md:w-11/12 sm:w-full flex flex-col gap-y-6 text-3xl font-bold bg-gray-50 md:rounded-r-xl p-8 md:p-4">
            <h1 className="text-2xl font-bold">Messages</h1>
            <div className="w-full">
                <Message />
            </div>
        </div>
    )
}

export default Messages
