import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar ด้านบน */}
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🌍 Environmental Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl transition"
        >
          Logout
        </button>
      </header>

      {/* ส่วนที่เหลือแบ่ง Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg p-6 space-y-6">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-lg hover:text-blue-500">🏠 Dashboard</Link>
            <Link to="/temperature" className="text-lg hover:text-blue-500">🌡️ Temperature</Link>
            <Link to="/fan-speed" className="text-lg hover:text-blue-500">🌀 Fan Speed</Link>
            <Link to="/humidity" className="text-lg hover:text-blue-500">💧 Humidity</Link>
            <Link to="/pm2.5" className="text-lg hover:text-blue-500">🌫️ PM 2.5</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gradient-to-br from-blue-50 to-green-50 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
