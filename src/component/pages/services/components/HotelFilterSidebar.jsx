import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const BOARD_LABELS = {
  RO: "Room Only",
  BB: "Bed & Breakfast",
  HB: "Half Board",
  FB: "Full Board",
  AI: "All Inclusive",
};

const HotelFilterSidebar = ({
  filterCounts,
  filters,
  onFiltersChange,
  onClearFilters,
  isLoading = false,
}) => {
  const [expandedSections, setExpandedSections] = useState({
    stars: true,
    board: true,
    price: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleStarChange = (star) => {
    const current = filters.stars || [];
    const newStars = current.includes(star)
      ? current.filter((s) => s !== star)
      : [...current, star];
    onFiltersChange({ ...filters, stars: newStars });
  };

  const handleBoardChange = (code) => {
    const current = filters.boardTypes || [];
    const newBoards = current.includes(code)
      ? current.filter((b) => b !== code)
      : [...current, code];
    onFiltersChange({ ...filters, boardTypes: newBoards });
  };

  const handlePriceRangeChange = (range) => {
    const current = filters.priceRanges || [];
    const newRanges = current.includes(range)
      ? current.filter((r) => r !== range)
      : [...current, range];
    onFiltersChange({ ...filters, priceRanges: newRanges });
  };

  const hasActiveFilters = Object.keys(filters).some((key) => {
    if (Array.isArray(filters[key])) return filters[key].length > 0;
    return false;
  });

  if (!filterCounts) {
    return (
      <div className="w-full lg:w-80 bg-white rounded-2xl border border-neutral-200 p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-neutral-200 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-neutral-200 rounded"></div>
            <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
            <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-80 bg-white rounded-2xl border border-neutral-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-neutral-900">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Star Rating */}
      {filterCounts.starRatings && (
        <div className="mb-6">
          <button
            onClick={() => toggleSection("stars")}
            className="flex items-center justify-between w-full mb-3"
          >
            <h4 className="text-sm font-semibold text-neutral-800">Star Rating</h4>
            {expandedSections.stars ? (
              <ChevronUp className="w-4 h-4 text-neutral-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-neutral-500" />
            )}
          </button>
          {expandedSections.stars && (
            <div className="space-y-2">
              {Object.entries(filterCounts.starRatings)
                .filter(([, count]) => count > 0)
                .sort(([a], [b]) => Number(b) - Number(a))
                .map(([star, count]) => (
                  <label
                    key={star}
                    className="flex items-center justify-between cursor-pointer hover:bg-neutral-50 p-2 rounded-lg"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={(filters.stars || []).includes(star)}
                        onChange={() => handleStarChange(star)}
                        className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                        disabled={isLoading}
                      />
                      <span className="ml-3 text-sm text-neutral-700">
                        {"⭐".repeat(Number(star))} {star} Star{Number(star) !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-500">({count})</span>
                  </label>
                ))}
            </div>
          )}
        </div>
      )}

      {/* Board Type */}
      {filterCounts.boardTypes && (
        <div className="mb-6">
          <button
            onClick={() => toggleSection("board")}
            className="flex items-center justify-between w-full mb-3"
          >
            <h4 className="text-sm font-semibold text-neutral-800">Board Type</h4>
            {expandedSections.board ? (
              <ChevronUp className="w-4 h-4 text-neutral-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-neutral-500" />
            )}
          </button>
          {expandedSections.board && (
            <div className="space-y-2">
              {Object.entries(filterCounts.boardTypes)
                .filter(([, count]) => count > 0)
                .map(([code, count]) => (
                  <label
                    key={code}
                    className="flex items-center justify-between cursor-pointer hover:bg-neutral-50 p-2 rounded-lg"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={(filters.boardTypes || []).includes(code)}
                        onChange={() => handleBoardChange(code)}
                        className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                        disabled={isLoading}
                      />
                      <span className="ml-3 text-sm text-neutral-700">
                        {BOARD_LABELS[code] || code}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-500">({count})</span>
                  </label>
                ))}
            </div>
          )}
        </div>
      )}

      {/* Price Range */}
      {filterCounts.priceRanges && (
        <div className="mb-6">
          <button
            onClick={() => toggleSection("price")}
            className="flex items-center justify-between w-full mb-3"
          >
            <h4 className="text-sm font-semibold text-neutral-800">Price Range (EUR)</h4>
            {expandedSections.price ? (
              <ChevronUp className="w-4 h-4 text-neutral-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-neutral-500" />
            )}
          </button>
          {expandedSections.price && (
            <div className="space-y-2">
              {Object.entries(filterCounts.priceRanges)
                .filter(([, count]) => count > 0)
                .map(([range, count]) => (
                  <label
                    key={range}
                    className="flex items-center justify-between cursor-pointer hover:bg-neutral-50 p-2 rounded-lg"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={(filters.priceRanges || []).includes(range)}
                        onChange={() => handlePriceRangeChange(range)}
                        className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                        disabled={isLoading}
                      />
                      <span className="ml-3 text-sm text-neutral-700">
                        €{range.replace("-", " – €").replace("+", "+")}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-500">({count})</span>
                  </label>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HotelFilterSidebar;
