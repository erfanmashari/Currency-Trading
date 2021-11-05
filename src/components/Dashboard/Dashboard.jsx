import DashboardHeader from './DashboardHeader'
import DashboardTransaction from "./DashboardTransaction"
import CandleChart from "./CandleChart"
import DashboardPrices from "./DashboardPrices"

const Dashboard = () => {
    return (
        <div className="w-7/12 md:w-11/12 sm:w-full bg-gray-50 md:rounded-r-xl p-8 md:p-4">
            <DashboardHeader title="Dashboard" />
            <DashboardTransaction />
            <CandleChart />
            <DashboardPrices />
        </div>
    )
}

export default Dashboard
