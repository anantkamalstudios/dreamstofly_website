import { ChevronDown, Search } from "lucide-react";

const FilterSection = ({
  title,
  filterKey,
  options = [],
  selected = [],
  searchValue = "",
  onSearchChange = () => {},
  onToggle,
}) => {
  return (
    <div className="border border-blue-600 mb-3">
      {/* Header */}
      <button
        onClick={() => toggleFilter(filterKey)}
        className="w-full flex items-center justify-between p-3 bg-white hover:bg-gray-50 transition-colors border-b-blue-600"
      >
        <span className="font-semibold text-gray-900 text-sm">{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            expandedFilters[filterKey] ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Inside Content */}
      {expandedFilters[filterKey] && (
        <div className="bg-white border-t border-gray-200 p-3">
          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${title.toLowerCase()}`}
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* List */}
          <div className="max-h-44 overflow-y-auto border border-gray-200 rounded">
            {options.map((item) => (
              <label
                key={item.value}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(item.value)}
                  onChange={() => onToggle(item.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                />
                <span className="text-sm text-gray-700">{item.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
