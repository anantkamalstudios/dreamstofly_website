import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

const MoreProgrammes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMaster, setSelectedMaster] = useState("Master");
  const [selectedMBA, setSelectedMBA] = useState("MBA");

  return (
    <div className="w-full max-w-4xl mx-auto bg-none">
      <div className="overflow-hidden">
        <div className="bg-none p-4 md:p-6 ">
          <h2 className="text-xl md:text-2xl font-medium">
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
              className="w-full pl-10 pr-4 py-3 border border-blue-500 text-sm md:text-base focus:outline-none focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <select
              value={selectedMaster}
              onChange={(e) => setSelectedMaster(e.target.value)}
              className="w-full px-4 py-3 border border-blue-500 appearance-none focus:outline-none focus:ring-blue-500 text-blue-600 font-medium text-sm md:text-base bg-white"
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
              className="w-full px-4 py-3 border border-blue-500 appearance-none focus:outline-none focus:ring-blue-500 text-blue-600 font-medium text-sm md:text-base bg-white"
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
