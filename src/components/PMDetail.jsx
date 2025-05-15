import React from "react";
import Layout from "./Layout";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const pm25Data = [
  { time: "00:00", pm25: 30 },
  { time: "01:00", pm25: 31 },
  { time: "02:00", pm25: 32 },
  { time: "03:00", pm25: 33 },
  { time: "04:00", pm25: 34 },
  { time: "05:00", pm25: 35 },
  { time: "06:00", pm25: 36 },
  { time: "07:00", pm25: 37 },
  { time: "08:00", pm25: 38 },
  { time: "09:00", pm25: 39 },
  { time: "10:00", pm25: 40 },
  { time: "11:00", pm25: 41 },
  { time: "12:00", pm25: 40 },
  { time: "13:00", pm25: 39 },
  { time: "14:00", pm25: 38 },
  { time: "15:00", pm25: 37 },
  { time: "16:00", pm25: 36 },
  { time: "17:00", pm25: 35 },
  { time: "18:00", pm25: 34 },
  { time: "19:00", pm25: 33 },
  { time: "20:00", pm25: 32 },
  { time: "21:00", pm25: 31 },
  { time: "22:00", pm25: 30 },
  { time: "23:00", pm25: 30 },
];

const PMDetail = () => {
  return (
    <Layout>
      <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen rounded-xl">
        <h2 className="text-4xl font-bold mb-8 flex items-center">
          <span className="mr-3 text-purple-500">🌫️</span> PM 2.5 Details
        </h2>

        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <p className="text-lg mb-2">Current PM 2.5: <span className="text-purple-500 font-bold">35 µg/m³</span></p>
          <p className="text-lg mb-2">Minimum PM 2.5 Today: 30 µg/m³</p>
          <p className="text-lg">Maximum PM 2.5 Today: 41 µg/m³</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">📈 PM 2.5 Trends (Hourly)</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={pm25Data}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pm25" stroke="#B10DC9" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
};

export default PMDetail;
