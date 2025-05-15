import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout"; // ใช้ Layout ครอบ

const MeasurementSelect = () => {
  return (
    <Layout>
      <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen rounded-xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Select Data to View</h2>

        {/* ตัวเลือกวัดข้อมูล */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link to="/temperature" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <div className="text-5xl mb-2">🌡️</div>
            <h3 className="text-lg font-semibold mb-1">Temperature</h3>
          </Link>

          <Link to="/fan-speed" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <div className="text-5xl mb-2">🌀</div>
            <h3 className="text-lg font-semibold mb-1">Fan Speed</h3>
          </Link>

          <Link to="/humidity" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <div className="text-5xl mb-2">💧</div>
            <h3 className="text-lg font-semibold mb-1">Humidity</h3>
          </Link>

          <Link to="/pm2.5" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <div className="text-5xl mb-2">🌫️</div>
            <h3 className="text-lg font-semibold mb-1">PM 2.5</h3>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default MeasurementSelect;
