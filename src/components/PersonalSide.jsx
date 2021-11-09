import PSHeader from './PSHeader'
import MyCards from './MyCards'
import PSTransaction from './PSTransaction'

const PersonalSide = () => {
    return (
        <div className="w-3/12 md:hidden bg-gray-50 rounded-r-xl pt-4 pr-4">
            <PSHeader />
            <MyCards />
            <div className="w-full border-b-4 border-yellow-500 mb-8">
                <h1 className="font-bold mb-2">Monthly Limits</h1>
                <p className="text-xl font-bold mb-4">$20,000 of $100,000</p>
            </div>
            <PSTransaction />
        </div>
    )
}

export default PersonalSide
