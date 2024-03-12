import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";

interface IHistoricalData {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface IChartContext {
  coinId: string;
  isDark: boolean;
}

function Chart() {
  const { coinId, isDark } = useOutletContext<IChartContext>();
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  console.log(data);

  return (
    <>
      <div>
        {isLoading ? (
          "Loading chart..."
        ) : (
          <ReactApexChart
            type="line"
            series={[
              {
                name: "price",
                data: data?.map((price) => price.close),
              },
            ]}
            options={{
              theme: {
                mode: isDark ? "dark" : "light",
              },
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },

              grid: {
                show: false,
              },

              stroke: {
                curve: "smooth",
                width: 3,
              },

              yaxis: {
                show: false,
              },

              xaxis: {
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
                labels: {
                  show: false,
                },
                // type: "datetime",
                categories: data?.map((price) => price.time_close),
              },

              fill: {
                type: "gradient",
                gradient: {
                  gradientToColors: ["#2200ff"],
                  stops: [0, 100],
                },
              },
              colors: ["#de0000f7"],

              tooltip: {
                y: {
                  formatter: (value: number) => `$${value.toFixed(2)}`,
                },
              },
            }}
          />
        )}
      </div>
    </>
  );
}

export default Chart;
