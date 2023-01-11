import { Routes, Route } from "react-router-dom";
import History from "../pages/History";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import Profile from "../pages/Profile";
import Rewards from "../pages/Rewards";
import Voucher from "../pages/Voucher";

const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/reward",
    element: <Rewards />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/voucher",
    element: <Voucher />,
  },
];
