import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

const StatusDropdown = ({ value, onChange, position = "right" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const statuses = [
    { label: "New", color: "bg-blue-100 text-blue-600" },
    { label: "In Progress", color: "bg-green-100 text-green-600" },
    { label: "Follow-up", color: "bg-yellow-100 text-yellow-600" },
    { label: "Closed", color: "bg-red-100 text-red-600" },
    { label: "Not Interested", color: "bg-gray-100 text-gray-600" },
  ];

  const currentStatus = statuses.find((s) => s.label === value);

  const handleSelect = (status) => {
    onChange(status.label);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-4 py-2 rounded-lg flex items-center gap-2 min-w-[130px] justify-between ${currentStatus?.color} hover:opacity-80 transition`}
      >
        <span className="font-medium">{value}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`absolute ${
              position === "right" ? "right-0" : "left-0"
            } top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2 min-w-[180px] z-20`}
          >
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 mb-2">
              <span className="text-sm text-gray-600">Select one option</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-1">
              {statuses.map((status) => (
                <button
                  key={status.label}
                  onClick={() => handleSelect(status)}
                  className={`w-full px-3 py-2 rounded-md text-left transition ${status.color} hover:opacity-80`}
                >
                  {status.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StatusDropdown;
