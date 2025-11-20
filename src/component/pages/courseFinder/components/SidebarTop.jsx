import React from "react";

const SidebarTop = ({ data }) => {
  // return (
  //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  //     <div className="bg-white rounded-lg shadow-sm p-6 text-center">
  //       <div className=" font-normal text-blue-600 mb-2">9 months</div>
  //       <div className="text-sm text-gray-600 font-normal">
  //         Program duration
  //       </div>
  //     </div>
  //     <div className="bg-white rounded-lg shadow-sm p-6 text-center">
  //       <div className=" font-normal text-blue-600 mb-2">Health/Healthcare</div>
  //       <div className="text-sm text-gray-600 font-medium">
  //         Main Subject Area
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="space-y-4 mb-6 w-full">
      <div className="flex flex-wrap justify-between items-center">
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm p-4 text-center border-b-2 border-blue-500"
            >
              <div className="text-lg font-normal text-blue-600 mb-2">
                {item.firstData}
              </div>
              <div className="text-base text-gray-600 font-normal">
                {item.secondData}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SidebarTop;
