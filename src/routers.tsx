import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "detail/:id",
        element: <Detail />
      }
    ],
  },
]);

export default router;
