import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";

interface IChartContext {
  coinId: string;
}

function Chart() {
  const { coinId } = useOutletContext<IChartContext>();
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  console.log(data);

  return <h1>Chart {coinId} </h1>;
}

export default Chart;
