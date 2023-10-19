import Layout from "./layouts/Layout";
import MyAccountLayout from "./layouts/MyAccountLayout";
import Home from "./pages/Home";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Teams from "./pages/Teams";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurFleet from "./pages/OurFleet";
import Booking from "./pages/Booking";
import Services from "./pages/Services";
import ServiceDetail from "./pages/Services/ServiceDetail";
import TeamDetail from "./pages/Teams/TeamDetail";
import Dashboard from "./pages/MyAccount/Dashboard";
import Profile from "./pages/MyAccount/Profile";
import ChangePassword from "./pages/MyAccount/ChangePassword";
import MyBooking from "./pages/MyAccount/MyBooking";
import ManageVehicles from "./pages/MyAccount/Vehicle_Management/ManageVehicles";
import IncomeTransaction from "./pages/MyAccount/IncomeTransaction";
import ExpensesTransaction from "./pages/MyAccount/ExpensesTransaction";
import Submit from "./pages/Booking/Submit";
import NewVehicle from "./pages/MyAccount/Vehicle_Management/NewVehicle";

const AppRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/ourfleet",
        element: <OurFleet />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/book_submit",
        element: <Submit />,
      },
      {
        path: "/service_detail",
        element: <ServiceDetail />,
      },
      {
        path: "/team_detail",
        element: <TeamDetail />,
      },
    ],
  },
  {
    path: "/",
    element: <MyAccountLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/change_password",
        element: <ChangePassword />,
      },
      {
        path: "/mybooking",
        element: <MyBooking />,
      },
      {
        path: "/manage_vehicles",
        element: <ManageVehicles />
      },
      {
        path: "/new_vehicle",
        element: <NewVehicle />
      },
      {
        path: "/income",
        element: <IncomeTransaction />
      },
      {
        path: '/expenses',
        element: <ExpensesTransaction />
      }
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/forgot_password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset_password",
        element: <ResetPassword />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
];

export default AppRoutes;
