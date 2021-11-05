import PriceCard from './PriceCard'

const DashboardPrices = () => {
    return (
        <footer>
            <h1 className="font-bold">Willie Meadows</h1>
            <div className="flex flex-row gap-x-4 overflow-x-scroll">
                <PriceCard currency="bit" />
                <PriceCard currency="bit" />
                <PriceCard currency="bit" />
                <PriceCard currency="bit" />
            </div>
        </footer>
    )
}

export default DashboardPrices
