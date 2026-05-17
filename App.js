import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar    from "./components/Navbar";
import Home      from "./pages/Home";
import Estimator from "./pages/Estimator";
import Result    from "./pages/Result";

import "./styles/global.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/estimate" element={<Estimator />} />
        <Route path="/result"   element={<Result />} />
        {/* Catch-all → home */}
        <Route path="*"         element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
