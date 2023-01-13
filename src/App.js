import React, { useEffect, useState } from "react";
import "./App.css";
import Navs from "./component/Navbar";
import Logo from "./assets/hft_logo.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Rewards from "./pages/Rewards";
import History from "./pages/History";
import VoucherList from "./pages/Voucher";
import PrivateRoutes from "./component/Protected";
// import CreatePage from "./pages/Create";
import LogoImg from "./component/Logo";
function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <LogoImg src={Logo} bgColor={"white"} />
        <div className="w-full my-[5px] border-2 border-red-500"></div>
      </div>
      <Navs />
      <div className="w-full flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/history" element={<History />} />
            {/* <Route path="/create" element={<CreatePage />} /> */}
            <Route path="/voucher" element={<VoucherList />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
