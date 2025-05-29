import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import TemperatureDetail from "./components/TemperatureDetail";
import FanSpeedDetail from "./components/FanSpeedDetail";
import HumidityDetail from "./components/HumidityDetail";
import PMDetail from "./components/PMDetail";

function App() {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true" ||
    sessionStorage.getItem("isLoggedIn") === "true";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        {isLoggedIn && (
          <>
            <Route path="/temperature" element={<TemperatureDetail />} />
            <Route path="/fan-speed" element={<FanSpeedDetail />} />
            <Route path="/humidity" element={<HumidityDetail />} />
            <Route path="/pm2.5" element={<PMDetail />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
