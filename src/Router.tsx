import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Coins from "./screens/Coins";
import ErrorComponent from "./components/ErrorComponent";
import Coin from "./screens/Coin";
import Price from "./screens/Price";
import Chart from "./screens/Chart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Coins />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/:coinId",
        element: <Coin />,
        children: [
          {
            path: "price",
            element: <Price />,
          },
          {
            path: "chart",
            element: <Chart />,
          },
        ],
      },
    ],
  },
]);

export default router;
