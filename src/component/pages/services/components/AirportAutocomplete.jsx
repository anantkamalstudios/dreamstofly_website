import React, { useState, useEffect, useRef, useCallback } from "react";
import { Plane, MapPin, ChevronDown } from "lucide-react";
import { searchAirports } from "../../../../api/flightApi";
import defaultAirports from "../../../../data/airports.json";
import debounce from "lodash.debounce";

const AirportAutocomplete = ({
  label,
  icon: Icon = Plane,
  value,
  onSelect,
  placeholder = "City or airport",
  name,
}) => {
  const [inputValue, setInputValue] = useState(value?.display || "");
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const wrapperRef = useRef(null);

  const fetchAirports = useCallback(
    debounce(async (keyword) => {
      if (!keyword || keyword.length < 2) {
        setSuggestions(defaultAirports);
        setLoading(false);
        setIsSearchMode(false);
        return;
      }
      setIsSearchMode(true);
      setLoading(true);
      try {
        const res = await searchAirports(keyword);
        setSuggestions(res?.data?.length ? res.data : defaultAirports);
      } catch (err) {
        setSuggestions(defaultAirports);
        console.error("Airport search error:", err);
      } finally {
        setLoading(false);
      }
    }, 400),
    []
  );

  useEffect(() => {
    if (value?.iata) {
      setInputValue(value.display || `${value.iata} - ${value.name}`);
    } else if (!value) {
      setInputValue("");
    }
  }, [value]);

  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleInputChange = (e) => {
    const v = e.target.value;
    setInputValue(v);
    if (v.length >= 2) {
      fetchAirports(v);
      setIsOpen(true);
    } else {
      setSuggestions(defaultAirports);
      setIsOpen(true);
      setIsSearchMode(false);
      if (!v) onSelect(null);
    }
  };

  const handleSelect = (airport) => {
    const display = airport
      ? `${airport.iata} - ${airport.name}, ${airport.city}`
      : "";
    setInputValue(display);
    onSelect(airport ? { iata: airport.iata, name: airport.name, city: airport.city, country: airport.country, display } : null);
    setIsOpen(false);
    setSuggestions([]);
  };

  const handleFocus = () => {
    if (inputValue.length < 2) {
      setSuggestions(defaultAirports);
      setIsSearchMode(false);
    }
    setIsOpen(true);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600 z-10 pointer-events-none" />
        <input
          type="text"
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
        />
        {loading && (
          <div className="absolute right-10 top-1/2 -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((a) => (
            <li
              key={a.iata}
              onClick={() => handleSelect(a)}
              className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm border-b border-gray-100 last:border-0"
            >
              <span className="font-semibold text-gray-900">{a.iata}</span>
              <span className="text-gray-600 ml-2">{a.name}</span>
              <div className="text-xs text-gray-500 mt-0.5">
                {a.city}, {a.country}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AirportAutocomplete;
