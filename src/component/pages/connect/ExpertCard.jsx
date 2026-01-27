import React, { useState } from "react";
import {
  MessageCircle,
  Phone,
  Star,
  GraduationCap,
  Languages,
  BookOpen,
  Clock,
  Calendar,
  X,
} from "lucide-react";

const ScheduleCallModal = ({ isOpen, onClose, expert, type }) => {
  const [callDateTime, setCallDateTime] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Scheduling ${type} with ${expert.name} at ${callDateTime}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 text-center mb-6">
          Schedule {type === "call" ? "Call" : "Chat"}
        </h2>

        <div className="mb-6 space-y-2">
          <p className="text-base sm:text-lg">
            <span className="font-semibold">Your current balance is Rs.0</span>
          </p>
          <p className="text-base sm:text-lg">
            Maximum {type} duration for this consultant is{" "}
            <span className="font-semibold">0 minutes.</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              {type === "call" ? "Call" : "Chat"} Datetime
            </label>
            <div className="relative">
              <input
                type="datetime-local"
                value={callDateTime}
                onChange={(e) => setCallDateTime(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

const ExpertCard = ({ expert }) => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto hover:shadow-lg transition-shadow">
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="flex-shrink-0 relative pb-3">
            <div className="w-32 h-40 sm:w-36 sm:h-44 bg-blue-900 rounded-lg overflow-hidden mx-auto sm:mx-0">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 sm:left-[4.5rem] -translate-x-1/2 bg-white flex items-center gap-1 px-2 py-1 rounded-full shadow-lg">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-0.5 text-sm font-semibold">
                {expert.rating}
              </span>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <h3 className="text-xl font-bold text-gray-800">{expert.name}</h3>

            <div className="space-y-2">
              <div className="flex items-start gap-2 text-gray-600">
                <GraduationCap size={20} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm">{expert.university}</span>
              </div>

              <div className="flex items-start gap-2 text-gray-600">
                <Languages size={20} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm">{expert.languages}</span>
              </div>

              <div className="flex items-start gap-2 text-gray-600">
                <BookOpen size={20} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm">{expert.status}</span>
              </div>

              <div className="flex items-start gap-2 text-gray-600">
                <Clock size={20} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm">{expert.rate}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            onClick={() => setIsChatModalOpen(true)}
          >
            <MessageCircle size={20} />
            <span>Chat</span>
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            onClick={() => setIsCallModalOpen(true)}
          >
            <Phone size={20} />
            <span>Call</span>
          </button>
        </div>
      </div>

      <ScheduleCallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        expert={expert}
        type="call"
      />
      <ScheduleCallModal
        isOpen={isChatModalOpen}
        onClose={() => setIsChatModalOpen(false)}
        expert={expert}
        type="chat"
      />
    </>
  );
};

export default ExpertCard;
