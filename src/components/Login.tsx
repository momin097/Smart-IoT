import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // สถานะขั้นตอน login, email, otp
  const [step, setStep] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // ตรวจสอบสถานะล็อกอินตอนเปิดหน้า
  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem("isLoggedIn") === "true" ||
      sessionStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/"); // ถ้าล็อกอินแล้ว ไปหน้า Dashboard
    }
  }, [navigate]);

  // ขั้นตอน 1: ตรวจสอบ username/password แบบง่าย ๆ
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // ตรวจสอบกับค่าคงที่ (เปลี่ยนตามระบบจริงได้)
    if (username === "momin" && password === "123") {
      setStep("email"); // ถ้าถูกต้อง ไปกรอก email เพื่อขอ OTP
    } else {
      setErrorMessage("Invalid login credentials!");
    }
  };

  // ขั้นตอน 2: ส่ง OTP ไปที่ email (fetch API ใช้ path แบบ relative)
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      // เรียก backend API /api/send-otp (ต้องตั้ง proxy ใน vite.config.js)
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStep("otp"); // ถ้า backend ตอบ OK ให้ไปกรอก OTP
      } else {
        setErrorMessage("Failed to send OTP. Please check your email.");
      }
    } catch (err) {
      setErrorMessage("Server error. Please try again later.");
    }
  };

  // ขั้นตอน 3: ตรวจสอบ OTP ที่กรอก
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      // เรียก backend API /api/verify-otp
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      if (res.ok) {
        // ถ้า OTP ถูกต้อง เก็บสถานะล็อกอินตาม rememberMe
        if (rememberMe) {
          localStorage.setItem("isLoggedIn", "true");
        } else {
          sessionStorage.setItem("isLoggedIn", "true");
        }
        navigate("/"); // ไปหน้า Dashboard
      } else {
        setErrorMessage("Invalid OTP. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* ฟอร์มล็อกอิน */}
      {step === "login" && (
        <form
          onSubmit={handleLoginSubmit}
          className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">🔐 Login</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-lg font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-lg">
              Remember Me
            </label>
          </div>
          {errorMessage && (
            <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      )}

      {/* ฟอร์มกรอก email เพื่อส่ง OTP */}
      {step === "email" && (
        <form
          onSubmit={handleEmailSubmit}
          className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">📧 Enter Email for OTP</h2>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          {errorMessage && (
            <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Send OTP
          </button>
        </form>
      )}

      {/* ฟอร์มกรอก OTP */}
      {step === "otp" && (
        <form
          onSubmit={handleOtpSubmit}
          className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">🔢 Enter OTP</h2>
          <div className="mb-6">
            <label htmlFor="otp" className="block text-lg font-semibold mb-2">
              OTP Code
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          {errorMessage && (
            <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Verify OTP
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
