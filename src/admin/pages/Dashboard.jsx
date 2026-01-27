import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MoreVertical, LogIn } from "lucide-react";
import RoomCard from "../components/RoomCard";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  const [rooms] = useState([
    {
      id: 1,
      type: "Single sharing",
      occupied: 2,
      total: 30,
      price: 568,
      deals: 2,
    },
    {
      id: 2,
      type: "Double sharing",
      occupied: 2,
      total: 35,
      price: 1068,
      deals: 2,
    },
    {
      id: 3,
      type: "Triple sharing",
      occupied: 2,
      total: 25,
      price: 1568,
      deals: 0,
    },
    { id: 4, type: "VIP Suit", occupied: 4, total: 10, price: 2568, deals: 0 },
  ]);

  const [occupancyData] = useState([
    { month: "May", value: 85 },
    { month: "Jun", value: 65 },
    { month: "Jul", value: 75 },
    { month: "Aug", value: 50 },
    { month: "Sep", value: 95 },
    { month: "Oct", value: 85 },
    { month: "Nov", value: 85 },
    { month: "Dec", value: 85 },
    { month: "Jan", value: 98 },
    { month: "Feb", value: 95 },
  ]);

  const [feedback] = useState([
    { name: "Mark", comment: "Food could be better.", id: "A201" },
    {
      name: "Christian",
      comment: "Facilities are not enough for amount paid.",
      id: "A101",
    },
    {
      name: "Alexander",
      comment: "Room cleaning could be better.",
      id: "A301",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard title="Total Property" value="872" percentage={71} />
          <StatCard title="Lessee Property" value="458" percentage={47} />
          <StatCard title="Total Income" value="97" icon={true} />
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Rooms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Room status
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Occupied rooms</span>
                  <span className="font-semibold text-gray-900">104</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Clean</span>
                  <span className="font-semibold text-gray-900">90</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Dirty</span>
                  <span className="font-semibold text-gray-900">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Inspected</span>
                  <span className="font-semibold text-gray-900">60</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Available rooms</span>
                  <span className="font-semibold text-gray-900">20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Clean</span>
                  <span className="font-semibold text-gray-900">30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Dirty</span>
                  <span className="font-semibold text-gray-900">19</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Inspected</span>
                  <span className="font-semibold text-gray-900">30</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Floor status
            </h2>
            <div className="flex flex-col items-center justify-center h-48">
              <div className="relative w-48 h-24 mb-4">
                <svg className="w-48 h-24" viewBox="0 0 200 100">
                  <path
                    d="M 20 90 A 80 80 0 0 1 180 90"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="20"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 20 90 A 80 80 0 0 1 180 90"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeDasharray="251.2"
                    strokeDashoffset="50.24"
                  />
                </svg>
                <div className="absolute inset-0 flex items-end justify-center pb-2">
                  <span className="text-4xl font-bold text-gray-900">80%</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <span className="text-gray-600">Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <span className="text-gray-600">Yet to Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Occupancy Statistics
              </h2>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Monthly
              </button>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={occupancyData}>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                  ticks={[0, 25, 50, 75, 100]}
                  domain={[0, 100]}
                />
                <Tooltip
                  cursor={{ fill: "rgba(59, 130, 246, 0.1)" }}
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Bar
                  dataKey="value"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Customers feedback
              </h2>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {feedback.map((item, index) => (
                <div
                  key={index}
                  className="pb-4 border-b border-gray-100 last:border-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <span className="text-sm text-gray-500">{item.id}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
