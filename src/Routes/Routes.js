import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard./Dashboard";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import DisplayError from "../Shared/ConfirmationModal/DisplayError/DisplayError";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError />,
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
        element: <Appointment />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-doctor",
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-doctors",
        element: (
          <AdminRoute>
            <ManageDoctors />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5002/booking/${params.id}`);
        },
      },
    ],
  },
]);

export default routes;
