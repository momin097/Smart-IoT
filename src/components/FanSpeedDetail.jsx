import React from "react";
import Layout from "./Layout";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const fanSpeedData = [
  { time: "00:00", fanSpeed: 1400 },
  { time: "01:00", fanSpeed: 1420 },
  { time: "02:00", fanSpeed: 1450 },
  { time: "03:00", fanSpeed: 1440 },
  { time: "04:00", fanSpeed: 1430 },
  { time: "05:00", fanSpeed: 1410 },
  { time: "06:00", fanSpeed: 1400 },
  { time: "07:00", fanSpeed: 1450 },
  { time: "08:00", fanSpeed: 1500 },
  { time: "09:00", fanSpeed: 1520 },
  { time: "10:00", fanSpeed: 1550 },
  { time: "11:00", fanSpeed: 1530 },
  { time: "12:00", fanSpeed: 1500 },
  { time: "13:00", fanSpeed: 1490 },
  { time: "14:00", fanSpeed: 1480 },
  { time: "15:00", fanSpeed: 1470 },
  { time: "16:00", fanSpeed: 1450 },
  { time: "17:00", fanSpeed: 1440 },
  { time: "18:00", fanSpeed: 1430 },
  { time: "19:00", fanSpeed: 1420 },
  { time: "20:00", fanSpeed: 1410 },
  { time: "21:00", fanSpeed: 1400 },
  { time: "22:00", fanSpeed: 1400 },
  { time: "23:00", fanSpeed: 1400 },
];

const FanSpeedDetail = () => {
  return (
    <Layout>
      <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen rounded-xl">
        <h2 className="text-4xl font-bold mb-8 flex items-center">
          <span className="mr-3 text-blue-500">🌀</span> Fan Speed Details
        </h2>

        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <p className="text-lg mb-2">Current Fan Speed: <span className="text-blue-500 font-bold">1500 RPM</span></p>
          <p className="text-lg mb-2">Minimum Fan Speed Today: 1400 RPM</p>
          <p className="text-lg">Maximum Fan Speed Today: 1550 RPM</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">📈 Fan Speed Trends (Hourly)</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={fanSpeedData}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="fanSpeed" stroke="#007BFF" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
};

export default FanSpeedDetail;
