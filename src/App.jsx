import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import TemperatureDetail from "./components/TemperatureDetail";
import FanSpeedDetail from "./components/FanSpeedDetail";
import HumidityDetail from "./components/HumidityDetail";
import PMDetail from "./components/PMDetail";

function App() {
  // ตรวจสอบว่าล็อกอินอยู่ไหม (ดูทั้ง localStorage และ sessionStorage)
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true" ||
    sessionStorage.getItem("isLoggedIn") === "true";

  return (
    <BrowserRouter>
      <Routes>
        {/* เส้นทาง /login เปิดให้ทุกคนเข้าได้ */}
        <Route path="/login" element={<Login />} />

        {/* ถ้า login แล้วเข้าเส้นทางอื่นๆ ได้ */}
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/temperature" element={<TemperatureDetail />} />
            <Route path="/fan-speed" element={<FanSpeedDetail />} />
            <Route path="/humidity" element={<HumidityDetail />} />
            <Route path="/pm2.5" element={<PMDetail />} />
          </>
        ) : (
          // ถ้าไม่ล็อกอิน พยายามเข้าหน้าอื่น ➔ ส่งกลับไปหน้า /login
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;