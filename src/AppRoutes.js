import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import SignIn from './pages/Auth/SignIn';

const AppRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/signin",
        element: <SignIn />
      }
    ]
  }
];

export default AppRoutes;
