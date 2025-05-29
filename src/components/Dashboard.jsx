import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

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
      <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Title */}
        <h2
          className="
            text-center font-extrabold mb-6 text-gray-900
            text-[clamp(1.25rem,4vw,2.5rem)]
            sm:text-[clamp(1.25rem,4vw,2.75rem)]
            md:text-[clamp(1.25rem,4vw,3rem)]
          "
        >
          🌍 Environmental Dashboard
        </h2>

        {/* Info Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 mb-6">
          {[
            {
              to: "/temperature",
              icon: "🌡️",
              title: "Temperature",
              value: "26.5°C",
              valueColor: "text-red-600",
            },
            {
              to: "/fan-speed",
              icon: "🌀",
              title: "Fan Speed",
              value: "1500 RPM",
              valueColor: "text-blue-600",
            },
            {
              to: "/humidity",
              icon: "💧",
              title: "Humidity",
              value: "60%",
              valueColor: "text-green-600",
            },
            {
              to: "/pm2.5",
              icon: "🌫️",
              title: "PM 2.5",
              value: "35 µg/m³",
              valueColor: "text-purple-600",
            },
          ].map(({ to, icon, title, value, valueColor }) => (
            <Link
              key={title}
              to={to}
              className="
                max-w-xs w-full
                flex flex-col items-center
                bg-white shadow-md rounded-3xl p-4 mb-3
                transition-transform duration-300 hover:scale-105 hover:shadow-xl
              "
            >
              <div
                className="
                  mb-2
                  text-[1.25rem] sm:text-[2rem] md:text-[2.5rem]
                "
              >
                {icon}
              </div>

              <h3
                className="
                  font-semibold mb-2
                  text-[0.9rem] sm:text-[1.375rem]
                "
              >
                {title}
              </h3>

              <p
                className={`
                  font-extrabold ${valueColor}
                  text-[1rem] sm:text-[2rem]
                `}
              >
                {value}
              </p>
            </Link>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Line Chart */}
          <section className="bg-white rounded-3xl shadow-lg p-8 sm:p-8">
            <h3
              className="
                text-center text-gray-800 font-semibold mb-2
                text-[clamp(1rem,4vw,1.5rem)]
                sm:text-[clamp(1.125rem,3vw,1.75rem)]
              "
            >
              📈 Environmental Trends
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data} margin={{ top: 10, right: 20, bottom: 20, left: 0 }}>
                <XAxis dataKey="time" tick={{ fontSize: 10 }} padding={{ left: 10, right: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip contentStyle={{ fontSize: "clamp(10px,1.5vw,14px)" }} wrapperStyle={{ fontSize: "clamp(10px,1.5vw,14px)" }} />
                <Legend verticalAlign="bottom" height={25} />
                <Line
                  type="monotone"
                  dataKey="temperature"
                  stroke="#FF4136"
                  strokeWidth={2.5}
                  name="Temperature (°C)"
                  activeDot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="humidity"
                  stroke="#2ECC40"
                  strokeWidth={2.5}
                  name="Humidity (%)"
                />
                <Line
                  type="monotone"
                  dataKey="pm25"
                  stroke="#B10DC9"
                  strokeWidth={2.5}
                  name="PM 2.5 (µg/m³)"
                />
              </LineChart>
            </ResponsiveContainer>
          </section>

          {/* Pie Chart */}
          <section className="bg-white rounded-3xl shadow-lg p-4 sm:p-5 flex flex-col items-center">
            <h3
              className="
                text-center text-gray-800 font-semibold mb-
                text-[clamp(1rem,4vw,1.5rem)]
                sm:text-[clamp(1.125rem,3vw,1.75rem)]
              "
            >
              🎯 Data Distribution
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label={({ name, value }) => `${name}: ${value}`}
                  labelStyle={{ fontSize: 10 }}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={30} />
              </PieChart>
            </ResponsiveContainer>
          </section>
        </div>
      </div>

    </Layout>
  );
};

export default Dashboard;
