import { useState } from "react";
import TemperatureDetail from "../components/TemperatureDetail";
import FanSpeedDetail from "../components/FanSpeedDetail";
import HumidityDetail from "../components/HumidityDetail";
import PMDetail from "../components/PMDetail";

export default function SensorDashboard() {
  const [selectedSensor, setSelectedSensor] = useState("Temperature");

  const renderContent = () => {
    switch (selectedSensor) {
      case "Temperature":
        return <TemperatureDetail />;
      case "Humidity":
        return <HumidityDetail />;
      case "Fan Speed":
        return <FanSpeedDetail />;
      case "PM2.5":
        return <PMDetail />;
      default:
        return <div>Welcome to the Dashboard</div>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-red-500 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Sensors</h2>
        <ul className="space-y-4">
          <li>
            <button
              className="w-full text-left hover:underline"
              onClick={() => setSelectedSensor("Temperature")}
            >
              Temperature
            </button>
          </li>
          <li>
            <button
              className="w-full text-left hover:underline"
              onClick={() => setSelectedSensor("Humidity")}
            >
              Humidity
            </button>
          </li>
          <li>
            <button
              className="w-full text-left hover:underline"
              onClick={() => setSelectedSensor("Fan Speed")}
            >
              Fan Speed
            </button>
          </li>
          <li>
            <button
              className="w-full text-left hover:underline"
              onClick={() => setSelectedSensor("PM2.5")}
            >
              PM2.5
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">{selectedSensor} Details</h1>
        <div className="bg-white p-6 rounded shadow-md">{renderContent()}</div>
      </div>
    </div>
  );
}
