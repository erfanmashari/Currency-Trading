import Chart from "react-apexcharts";

const CandleChart = () => {
    const chartState = 
        {options: {
    },
    series: [{
        data: [
          [14, [3, 10, 0, 7]], 
          [15, [2, 6, 1, 6]],
          [16, [6, 10, 4, 6]],
          [17, [1, 9, 1, 7]]
        ]
    }]}

    return (
        <div className="w-full justify-center mt-6">
            <header className="w-full flex flex-row justify-between">
                <h1 className="font-bold">Market Overview</h1>
                <p>Date</p>
            </header>
            <Chart
              options={chartState.options}
              series={chartState.series}
              type="candlestick"
              width="400"
              className="flex justify-center"
            />
        </div>
    )
}

export default CandleChart
