import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Rewards from "./pages/Rewards";
import History from "./pages/History";
import VoucherList from "./pages/Voucher";
import PrivateRoutes from "./component/Protected";
import CreatePage from "./pages/Create";
function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
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
  );
}

export default App;
