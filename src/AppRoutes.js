import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import SignIn from './pages/Auth/SignIn';
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Teams from "./pages/Teams";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

const AppRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
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
