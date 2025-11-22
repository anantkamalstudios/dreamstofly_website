import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

const MoreProgrammes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMaster, setSelectedMaster] = useState("Master");
  const [selectedMBA, setSelectedMBA] = useState("MBA");

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 lg:p-8 bg-white">
      <div className="border-2 border-blue-500 rounded-lg overflow-hidden">
        <div className="bg-white p-4 md:p-6 border-b-2 border-blue-500">
          <h2 className="text-xl md:text-2xl font-bold">
            More programmes from the university
          </h2>
        </div>

        <div className="p-4 md:p-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search university Courses"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            />
          </div>

          <div className="relative">
            <select
              value={selectedMaster}
              onChange={(e) => setSelectedMaster(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-600 font-medium text-sm md:text-base bg-white"
            >
              <option value="Master">Master</option>
              <option value="Bachelor">Bachelor</option>
              <option value="PhD">PhD</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-5 h-5 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={selectedMBA}
              onChange={(e) => setSelectedMBA(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-600 font-medium text-sm md:text-base bg-white"
            >
              <option value="MBA">MBA</option>
              <option value="MSc">MSc</option>
              <option value="MA">MA</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-5 h-5 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProgrammes;
