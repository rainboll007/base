import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Dashboard from "../components/Perfil/Dashboard";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRouter;