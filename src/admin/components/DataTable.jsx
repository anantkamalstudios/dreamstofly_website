// import React, { useState } from "react";
// import { ChevronDown, X } from "lucide-react";
// import StatusDropdown from "./StatusDropdown";

// export default function DataTable({
//   columns = [],
//   data = [],
//   statuses = [],
//   onStatusChange,
// }) {
//   const [selectedRows, setSelectedRows] = useState([]);

//   const toggleSelectAll = () => {
//     if (selectedRows.length === data.length) {
//       setSelectedRows([]);
//     } else {
//       setSelectedRows(data.map((item) => item.id));
//     }
//   };

//   const toggleSelectRow = (id) => {
//     setSelectedRows((prev) =>
//       prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-6">
//       <div className="mx-auto">
//         <div className="bg-white rounded-lg shadow-sm overflow-visible">
//           {/* Table Header */}
//           <div className="bg-blue-100 px-4 py-3 rounded-t-lg">
//             <div className="grid grid-cols-12 gap-4 items-center text-sm font-medium text-gray-700">
//               <div className="col-span-1 flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={
//                     selectedRows.length === data.length && data.length > 0
//                   }
//                   onChange={toggleSelectAll}
//                   className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
//                 />
//               </div>
//               {columns.map((column, index) => (
//                 <div
//                   key={index}
//                   className={`col-span-${column.span} flex items-center gap-1`}
//                 >
//                   {column.label}
//                   {column.sortable && (
//                     <ChevronDown className="w-4 h-4 text-gray-400" />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Table Body */}
//           <div className="divide-y divide-gray-100">
//             {data.length === 0 ? (
//               <div className="px-6 py-12 text-center text-gray-500">
//                 No data available
//               </div>
//             ) : (
//               data.map((row) => (
//                 <div
//                   key={row.id}
//                   className="px-4 py-4 hover:bg-gray-50 transition"
//                 >
//                   <div className="grid grid-cols-12 gap-4 items-center text-sm">
//                     <div className="col-span-1 flex items-center">
//                       <input
//                         type="checkbox"
//                         checked={selectedRows.includes(row.id)}
//                         onChange={() => toggleSelectRow(row.id)}
//                         className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
//                       />
//                     </div>
//                     {columns.map((column, index) => (
//                       <div
//                         key={index}
//                         className={`col-span-${column.span} ${
//                           column.key === columns[0].key
//                             ? "font-medium text-gray-900"
//                             : "text-gray-600"
//                         } ${column.truncate ? "truncate" : ""}`}
//                       >
//                         {column.key === "status" ? (
//                           <StatusDropdown
//                             value={row[column.key]}
//                             statuses={statuses}
//                             onChange={(newStatus) =>
//                               onStatusChange(row.id, newStatus)
//                             }
//                             position="right"
//                           />
//                         ) : (
//                           row[column.key]
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { ChevronDown, MoreVertical } from "lucide-react";
import StatusDropdown from "./StatusDropdown";

// Mobile Card View
function MobileCard({
  row,
  columns,
  statuses,
  onStatusChange,
  isSelected,
  onToggleSelect,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3">
      <div className="flex items-start justify-between mb-3">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggleSelect}
          className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mt-1"
        />
        <div className="flex-1 ml-3">
          <div className="font-medium text-gray-900 mb-1">
            {row[columns[0].key]}
          </div>
          {columns.slice(1).map((column, index) => (
            <div key={index} className="text-sm mt-2">
              <span className="text-gray-500">{column.label}: </span>
              {column.key === "status" ? (
                <StatusDropdown
                  value={row[column.key]}
                  statuses={statuses}
                  onChange={(newStatus) => onStatusChange(row.id, newStatus)}
                  position="right"
                />
              ) : (
                <span className="text-gray-700">{row[column.key]}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main DataTable Component
export default function DataTable({
  columns = [],
  data = [],
  statuses = [],
  onStatusChange,
}) {
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((item) => item.id));
    }
  };

  const toggleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full">
      {/* Desktop Table View - Hidden on mobile */}
      <div className="hidden lg:block bg-white rounded-lg shadow-sm overflow-visible">
        {/* Table Header */}
        <div className="bg-blue-100 px-4 py-3">
          <div className="grid grid-cols-12 gap-4 items-center text-sm font-medium text-gray-700">
            <div className="col-span-1 flex items-center">
              <input
                type="checkbox"
                checked={selectedRows.length === data.length && data.length > 0}
                onChange={toggleSelectAll}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
            </div>
            {columns.map((column, index) => (
              <div
                key={index}
                className={`col-span-${column.span} flex items-center gap-1`}
              >
                {column.label}
                {column.sortable && (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-100">
          {data.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-500">
              No data available
            </div>
          ) : (
            data.map((row) => (
              <div
                key={row.id}
                className="px-4 py-4 hover:bg-gray-50 transition"
              >
                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                  <div className="col-span-1 flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row.id)}
                      onChange={() => toggleSelectRow(row.id)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                  </div>
                  {columns.map((column, index) => (
                    <div
                      key={index}
                      className={`col-span-${column.span} ${
                        column.key === columns[0].key
                          ? "font-medium text-gray-900"
                          : "text-gray-600"
                      } ${column.truncate ? "truncate" : ""}`}
                    >
                      {column.key === "status" ? (
                        <StatusDropdown
                          value={row[column.key]}
                          statuses={statuses}
                          onChange={(newStatus) =>
                            onStatusChange(row.id, newStatus)
                          }
                        />
                      ) : (
                        row[column.key]
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Mobile Card View - Visible on mobile */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between mb-4 bg-blue-100 p-3 rounded-lg">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={selectedRows.length === data.length && data.length > 0}
              onChange={toggleSelectAll}
              className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            Select All
          </label>
          {selectedRows.length > 0 && (
            <span className="text-sm text-gray-600">
              {selectedRows.length} selected
            </span>
          )}
        </div>

        {data.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center text-gray-500">
            No data available
          </div>
        ) : (
          data.map((row) => (
            <MobileCard
              key={row.id}
              row={row}
              columns={columns}
              statuses={statuses}
              onStatusChange={onStatusChange}
              isSelected={selectedRows.includes(row.id)}
              onToggleSelect={() => toggleSelectRow(row.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
