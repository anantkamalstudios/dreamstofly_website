import { LogIn } from "lucide-react";

const StatCard = ({ title, value, percentage, icon }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <p className="text-gray-500 text-sm mb-1">{title}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
      <div className="flex items-center justify-center">
        {icon ? (
          <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center">
            <LogIn className="w-12 h-12 text-white" />
          </div>
        ) : (
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90">
              <circle
                cx="44"
                cy="44"
                r="36"
                stroke="#e5e7eb"
                strokeWidth="16"
                fill="none"
              />
              <circle
                cx="44"
                cy="44"
                r="36"
                stroke="#3b82f6"
                strokeWidth="16"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 36}`}
                strokeDashoffset={`${
                  2 * Math.PI * 36 * (1 - percentage / 100)
                }`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-900">
                {percentage}%
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default StatCard;
