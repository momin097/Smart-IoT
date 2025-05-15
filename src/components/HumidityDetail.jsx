import React from "react";
import Layout from "./Layout";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const humidityData = [
  { time: "00:00", humidity: 60 },
  { time: "01:00", humidity: 61 },
  { time: "02:00", humidity: 62 },
  { time: "03:00", humidity: 63 },
  { time: "04:00", humidity: 64 },
  { time: "05:00", humidity: 64 },
  { time: "06:00", humidity: 63 },
  { time: "07:00", humidity: 62 },
  { time: "08:00", humidity: 61 },
  { time: "09:00", humidity: 60 },
  { time: "10:00", humidity: 60 },
  { time: "11:00", humidity: 60 },
  { time: "12:00", humidity: 61 },
  { time: "13:00", humidity: 62 },
  { time: "14:00", humidity: 63 },
  { time: "15:00", humidity: 64 },
  { time: "16:00", humidity: 63 },
  { time: "17:00", humidity: 62 },
  { time: "18:00", humidity: 61 },
  { time: "19:00", humidity: 60 },
  { time: "20:00", humidity: 60 },
  { time: "21:00", humidity: 60 },
  { time: "22:00", humidity: 60 },
  { time: "23:00", humidity: 60 },
];

const HumidityDetail = () => {
  return (
    <Layout>
      <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen rounded-xl">
        <h2 className="text-4xl font-bold mb-8 flex items-center">
          <span className="mr-3 text-green-500">💧</span> Humidity Details
        </h2>

        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <p className="text-lg mb-2">Current Humidity: <span className="text-green-500 font-bold">60%</span></p>
          <p className="text-lg mb-2">Minimum Humidity Today: 60%</p>
          <p className="text-lg">Maximum Humidity Today: 64%</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">📈 Humidity Trends (Hourly)</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={humidityData}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="humidity" stroke="#2ECC40" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
};

export default HumidityDetail;
