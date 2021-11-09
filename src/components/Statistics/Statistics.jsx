import Chart from "react-apexcharts";

const Statistics = () => {
    const chartMonth = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1, 2, 3, 4]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 45, 60, 70]
          }
        ]
      };

    const chartYear = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91, 95, 91, 89, 92]
          }
        ]
      };
    
    return (
        <div className="w-7/12 md:w-11/12 sm:w-full lg:overflow-x-scroll text-3xl font-bold bg-gray-50 md:rounded-r-xl p-8 md:p-4">
            <h1>Last Month</h1>
            <Chart
                options={chartMonth.options}
                series={chartMonth.series}
                type="line"
                width="500"
            />
            <h1>Last Year</h1>
            <Chart
                options={chartYear.options}
                series={chartYear.series}
                type="line"
                width="500"
            />
        </div>
    )
}

export default Statistics
