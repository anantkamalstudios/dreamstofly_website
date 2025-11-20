import { ArrowRight } from "lucide-react";
import React from "react";

const PopularDestination = () => {
  return (
    <div className="w-full p-8">
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <h1 className="text-3xl">Popular Destination</h1>
          <button className="py-2 px-6 rounded-3xl bg-blue-600 text-white flex gap-2">
            View All Cities <ArrowRight className="text-white" />
          </button>
        </div>
        <div>{/* citi mapped */}</div>
      </div>
    </div>
  );
};

export default PopularDestination;
