import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout"; // << สำคัญ! ต้องครอบ Layout ด้วย
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  { time: "6:00", temperature: 26.5, humidity: 60, pm25: 35 },
  { time: "12:00", temperature: 27, humidity: 62, pm25: 38 },
  { time: "18:00", temperature: 26.8, humidity: 64, pm25: 40 },
  { time: "24:00", temperature: 26.2, humidity: 61, pm25: 36 },
];

const pieData = [
  { name: "Temperature (°C)", value: data[0].temperature, color: "#FF4136" },
  { name: "Humidity (%)", value: data[0].humidity, color: "#2ECC40" },
  { name: "PM 2.5 (µg/m³)", value: data[0].pm25, color: "#B10DC9" },
];

const Dashboard = () => {
  return (
    <Layout>
      {/* เนื้อหา Dashboard จริงๆ อยู่ใน Layout แล้ว */}
      
      {/* ชื่อหน้า Dashboard */}
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">🌍 Environmental Dashboard</h2>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <Link to="/temperature" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <div className="text-5xl mb-2">🌡️</div>
          <h3 className="text-lg font-semibold mb-1">Temperature</h3>
          <p className="text-red-500 text-2xl font-bold">26.5°C</p>
        </Link>

        <Link to="/fan-speed" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <div className="text-5xl mb-2">🌀</div>
          <h3 className="text-lg font-semibold mb-1">Fan Speed</h3>
          <p className="text-blue-500 text-2xl font-bold">1500 RPM</p>
        </Link>

        <Link to="/humidity" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <div className="text-5xl mb-2">💧</div>
          <h3 className="text-lg font-semibold mb-1">Humidity</h3>
          <p className="text-green-500 text-2xl font-bold">60%</p>
        </Link>

        <Link to="/pm2.5" className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <div className="text-5xl mb-2">🌫️</div>
          <h3 className="text-lg font-semibold mb-1">PM 2.5</h3>
          <p className="text-purple-500 text-2xl font-bold">35 µg/m³</p>
        </Link>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Line Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-center">📈 Environmental Trends</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
              <Line type="monotone" dataKey="temperature" stroke="#FF4136" strokeWidth={3} name="Temperature (°C)" />
              <Line type="monotone" dataKey="humidity" stroke="#2ECC40" strokeWidth={3} name="Humidity (%)" />
              <Line type="monotone" dataKey="pm25" stroke="#B10DC9" strokeWidth={3} name="PM 2.5 (µg/m³)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 text-center">🎯 Data Distribution</h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label={({ name, value }) => `${name}: ${value}`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </Layout>
  );
};

export default Dashboard;
