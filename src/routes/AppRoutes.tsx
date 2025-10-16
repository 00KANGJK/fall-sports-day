import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div className="p-4">없는 페이지</div>} />
    </Routes>
  );
}
