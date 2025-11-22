import React from "react";
import { useServiceData } from "../hooks/useServiceData";

const RoomReplacement = () => {
  const { service, serviceDetails, formConfig, loading } = useServiceData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!service || !serviceDetails) return null;

  // Render your custom Room Replacement page here
  return (
    <div className="min-h-screen">
      <h1>{service.title}</h1>
      <p>{serviceDetails.description}</p>
      {/* Add your custom components here */}
    </div>
  );
};

export default RoomReplacement;

