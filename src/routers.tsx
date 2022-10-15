import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

export default router;
