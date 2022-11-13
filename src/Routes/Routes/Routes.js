import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/appoinment",
        element: <Appoinment></Appoinment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
