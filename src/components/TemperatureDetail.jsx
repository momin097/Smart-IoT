import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout"; // 🔥 import Layout มา

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const temperatureData = [
  { time: "00:00", temperature: 26.5 },
  { time: "01:00", temperature: 26.4 },
  { time: "02:00", temperature: 26.3 },
  { time: "03:00", temperature: 26.2 },
  { time: "04:00", temperature: 26.1 },
  { time: "05:00", temperature: 26.0 },
  { time: "06:00", temperature: 26.1 },
  { time: "07:00", temperature: 26.3 },
  { time: "08:00", temperature: 26.5 },
  { time: "09:00", temperature: 26.8 },
  { time: "10:00", temperature: 27.0 },
  { time: "11:00", temperature: 27.1 },
  { time: "12:00", temperature: 27.2 },
  { time: "13:00", temperature: 27.1 },
  { time: "14:00", temperature: 27.0 },
  { time: "15:00", temperature: 26.8 },
  { time: "16:00", temperature: 26.7 },
  { time: "17:00", temperature: 26.6 },
  { time: "18:00", temperature: 26.4 },
  { time: "19:00", temperature: 26.3 },
  { time: "20:00", temperature: 26.2 },
  { time: "21:00", temperature: 26.1 },
  { time: "22:00", temperature: 26.0 },
  { time: "23:00", temperature: 26.0 },
];

const TemperatureDetail = () => {
  return (
    <Layout>
      <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen rounded-xl">
        <h2 className="text-4xl font-bold mb-8 flex items-center">
          <span className="mr-3 text-red-500">🌡️</span> Temperature Details
        </h2>

        {/* ข้อมูล Temperature */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <p className="text-lg mb-2">Current Temperature: <span className="text-red-500 font-bold">26.5°C</span></p>
          <p className="text-lg mb-2">Minimum Temperature Today: 25.2°C</p>
          <p className="text-lg">Maximum Temperature Today: 27.2°C</p>
        </div>

        {/* กราฟ Temperature */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            📈 Temperature Trends (Hourly)
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={temperatureData}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temperature" stroke="#FF4136" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
};

export default TemperatureDetail;
