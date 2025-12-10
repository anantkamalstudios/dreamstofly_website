import { MoreVertical } from "lucide-react";

const RoomCard = ({ room }) => (
  <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 relative">
    {room.deals > 0 && (
      <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
        {room.deals} Deals
      </span>
    )}
    <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
      <MoreVertical className="w-5 h-5" />
    </button>
    <div className="mt-6">
      <p className="text-gray-700 font-medium mb-2">{room.type}</p>
      <p className="text-gray-500 text-sm mb-1">
        <span className="text-2xl font-semibold text-gray-900">
          {room.occupied}
        </span>
        <span className="text-gray-400">/{room.total}</span>
      </p>
      <p className="text-blue-600 text-xl font-semibold">
        $ {room.price.toLocaleString()}
        <span className="text-sm text-gray-400 font-normal">/day</span>
      </p>
    </div>
  </div>
);

export default RoomCard;
