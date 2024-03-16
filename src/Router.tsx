import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./netflix/routes/Home";
import Tv from "./netflix/routes/Tv";
import Search from "./netflix/routes/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/tv",
        element: <Tv />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
