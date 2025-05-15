import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");  
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();

  // ตรวจสอบสถานะการล็อกอินเมื่อเริ่มต้น
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/"); // ไปที่หน้า Dashboard ถ้าล็อกอินแล้ว
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "momin" && password === "123") {
      if (rememberMe) {
        localStorage.setItem("isLoggedIn", "true");  // เก็บไว้ใน localStorage
      } else {
        sessionStorage.setItem("isLoggedIn", "true");  // เก็บไว้ใน sessionStorage
      }
      navigate("/");  // ไปที่หน้า Dashboard
    } else {
      setErrorMessage("Invalid login credentials!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">🔐 Login</h2>

        {/* Username */}
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

        {/* Password */}
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

        {/* Remember Me */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mr-2"
          />
          <label htmlFor="rememberMe" className="text-lg">Remember Me</label>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-4 text-red-500 text-center">
            {errorMessage}
          </div>
        )}

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
