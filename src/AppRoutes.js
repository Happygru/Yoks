import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import SignIn from './pages/Auth/SignIn';
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
