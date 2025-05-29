import React from "react";
import Layout from "./Layout"; // 🔥 import Layout มา

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

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
      <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen rounded-xl">
        <h2 className="text-2xl sm:text-4xl font-bold mb-6 flex items-center">
          <span className="mr-3 text-red-500 text-3xl sm:text-4xl">🌡️</span>{" "}
          Temperature Details
        </h2>

        {/* ข้อมูล Temperature */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg mb-6 sm:mb-8 text-base sm:text-lg">
          <p className="mb-2">
            Current Temperature:{" "}
            <span className="text-red-500 font-bold text-lg sm:text-xl">
              26.5°C
            </span>
          </p>
          <p className="mb-2">Minimum Temperature Today: 25.2°C</p>
          <p>Maximum Temperature Today: 27.2°C</p>
        </div>

        {/* กราฟ Temperature */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
          <h3 className="text-xl sm:text-3xl font-bold mb-4 flex items-center">
            📈 Temperature Trends (Hourly)
          </h3>
          {/* ปรับความสูงกราฟในมือถือให้พอดี */}
          <div style={{ width: "100%", height: window.innerWidth < 640 ? 300 : 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={temperatureData}>
                <XAxis
                  dataKey="time"
                  tick={{ fontSize: window.innerWidth < 640 ? 10 : 12 }}
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis tick={{ fontSize: window.innerWidth < 640 ? 10 : 12 }} />
                <Tooltip
                  contentStyle={{ fontSize: window.innerWidth < 640 ? 12 : 14 }}
                  wrapperStyle={{ fontSize: window.innerWidth < 640 ? 12 : 14 }}
                />
                <Legend
                  wrapperStyle={{ fontSize: window.innerWidth < 640 ? 12 : 14 }}
                  verticalAlign="bottom"
                  height={36}
                />
                <Line
                  type="monotone"
                  dataKey="temperature"
                  stroke="#FF4136"
                  strokeWidth={3}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TemperatureDetail;
