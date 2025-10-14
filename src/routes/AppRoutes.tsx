import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SportLayout from "../pages/SportLayout";
import UploadPage from "../pages/UploadPage";
import MePage from "../pages/MePage";
import LoginPage from "../pages/LoginPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sports/:sport/*" element={<SportLayout />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/me" element={<MePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<div className="p-4">없는 페이지</div>} />
    </Routes>
  );
}
