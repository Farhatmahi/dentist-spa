import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../Pages/Dashboard.jsx/Dashboard./Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/appointment",
        element : <Appointment />
      },
      {
        path: "/dashboard",
        element : <PrivateRoute><Dashboard /></PrivateRoute>
      },
    ],
  },
]);

export default routes;
