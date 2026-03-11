import React, { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";

const formatPrice = (price, currency = "INR") => {
  if (price == null) return "—";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
};

const FlightFilterSidebar = ({ 
  filtersMeta, 
  filters, 
  onFiltersChange, 
  onClearFilters,
  isLoading = false 
}) => {
  const [expandedSections, setExpandedSections] = useState({
    stops: true,
    airlines: true,
    departure_time: true,
    price: true,
    airports: true,
    aircraft: true,
    amenities: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleStopsChange = (value) => {
    const currentStops = filters.stops || [];
    const newStops = currentStops.includes(value)
      ? currentStops.filter(s => s !== value)
      : [...currentStops, value];
    
    onFiltersChange({ ...filters, stops: newStops });
  };

  const handleAirlineChange = (code) => {
    const currentAirlines = filters.airlines || [];
    const newAirlines = currentAirlines.includes(code)
      ? currentAirlines.filter(a => a !== code)
      : [...currentAirlines, code];
    
    onFiltersChange({ ...filters, airlines: newAirlines });
  };

  const handleDepartureTimeChange = (value) => {
    const currentTimes = filters.departure_time || [];
    const newTimes = currentTimes.includes(value)
      ? currentTimes.filter(t => t !== value)
      : [...currentTimes, value];
    
    onFiltersChange({ ...filters, departure_time: newTimes });
  };

  const handleDepartureAirportChange = (iata) => {
    const currentAirports = filters.departure_airports || [];
    const newAirports = currentAirports.includes(iata)
      ? currentAirports.filter(a => a !== iata)
      : [...currentAirports, iata];
    
    onFiltersChange({ ...filters, departure_airports: newAirports });
  };

  const handleArrivalAirportChange = (iata) => {
    const currentAirports = filters.arrival_airports || [];
    const newAirports = currentAirports.includes(iata)
      ? currentAirports.filter(a => a !== iata)
      : [...currentAirports, iata];
    
    onFiltersChange({ ...filters, arrival_airports: newAirports });
  };

  const handleAircraftSizeChange = (value) => {
    const currentSizes = filters.aircraft_size || [];
    const newSizes = currentSizes.includes(value)
      ? currentSizes.filter(s => s !== value)
      : [...currentSizes, value];
    
    onFiltersChange({ ...filters, aircraft_size: newSizes });
  };

  const handlePriceChange = (type, value) => {
    onFiltersChange({ 
      ...filters, 
      [`price_${type}`]: type === 'min' ? parseInt(value) || 0 : parseInt(value) || 999999 
    });
  };

  const handleAmenityChange = (amenity) => {
    onFiltersChange({ 
      ...filters, 
      [amenity]: !filters[amenity] 
    });
  };

  const hasActiveFilters = Object.keys(filters).some(key => {
    if (Array.isArray(filters[key])) {
      return filters[key].length > 0;
    }
    return filters[key] === true || (key.includes('price') && filters[key] !== undefined);
  });

  if (!filtersMeta) {
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
        <h3 className="text-lg font-semibold text-neutral-900">Popular Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Stops Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('stops')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h4 className="text-sm font-semibold text-neutral-800">Stops</h4>
          {expandedSections.stops ? (
            <ChevronUp className="w-4 h-4 text-neutral-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-neutral-500" />
          )}
        </button>
        
        {expandedSections.stops && (
          <div className="space-y-2">
            {filtersMeta.stops?.map((stop) => (
              <label key={stop.value} className="flex items-center justify-between cursor-pointer hover:bg-neutral-50 p-2 rounded-lg">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={(filters.stops || []).includes(stop.value)}
                    onChange={() => handleStopsChange(stop.value)}
                    className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                    disabled={isLoading}
                  />
                  <span className="ml-3 text-sm text-neutral-700">{stop.label}</span>
                </div>
                <span className="text-xs text-neutral-500">({stop.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Airlines Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('airlines')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h4 className="text-sm font-semibold text-neutral-800">Airlines</h4>
          {expandedSections.airlines ? (
            <ChevronUp className="w-4 h-4 text-neutral-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-neutral-500" />
          )}
        </button>
        
        {expandedSections.airlines && (
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {filtersMeta.airlines?.map((airline) => (
              <label key={airline.code} className="flex items-center justify-between cursor-pointer hover:bg-neutral-50 p-2 rounded-lg">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={(filters.airlines || []).includes(airline.code)}
                    onChange={() => handleAirlineChange(airline.code)}
                    className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                    disabled={isLoading}
                  />
                  <img 
                    src={airline.logo} 
                    alt={airline.name}
                    className="w-5 h-5 ml-3 rounded"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="ml-2 text-sm text-neutral-700" style={{display: 'none'}}>
                    {airline.code}
                  </span>
                  <span className="ml-2 text-sm text-neutral-700">{airline.name}</span>
                </div>
                <span className="text-xs text-neutral-500">({airline.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Departure Time Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('departure_time')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h4 className="text-sm font-semibold text-neutral-800">Departure Time</h4>
          {expandedSections.departure_time ? (
            <ChevronUp className="w-4 h-4 text-neutral-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-neutral-500" />
          )}
        </button>
        
        {expandedSections.departure_time && (
          <div className="space-y-2">
            {filtersMeta.departure_time?.map((time) => (
              <label key={time.value} className="flex items-center justify-between cursor-pointer hover:bg-neutral-50 p-2 rounded-lg">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={(filters.departure_time || []).includes(time.value)}
                    onChange={() => handleDepartureTimeChange(time.value)}
                    className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                    disabled={isLoading}
                  />
                  <span className="ml-3 text-sm text-neutral-700">{time.label}</span>
                </div>
                <span className="text-xs text-neutral-500">({time.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Airports Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('airports')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h4 className="text-sm font-semibold text-neutral-800">Airports</h4>
          {expandedSections.airports ? (
            <ChevronUp className="w-4 h-4 text-neutral-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-neutral-500" />
          )}
        </button>
        
        {expandedSections.airports && (
          <div className="space-y-4">
            {/* Departure Airports */}
            {filtersMeta.departure_airports && filtersMeta.departure_airports.length > 0 && (
              <div>
                <h5 className="text-xs font-medium text-neutral-600 mb-2 uppercase">Departure Airports</h5>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {filtersMeta.departure_airports?.map((airport) => (
                    <label key={`dep_${airport.iata}`} className="flex items-center justify-between cursor-pointer hover:bg-neutral-50 p-2 rounded-lg">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={(filters.departure_airports || []).includes(airport.iata)}
                          onChange={() => handleDepartureAirportChange(airport.iata)}
                          className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                          disabled={isLoading}
                        />
                        <div className="ml-3">
                          <span className="text-sm text-neutral-700 font-medium">{airport.name}</span>
                          <span className="text-xs text-neutral-500 ml-2">
                            {airport.iata} {airport.terminal && `T${airport.terminal}`}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-neutral-500">({airport.count})</span>
                        <span className="text-xs text-neutral-600 block">{formatPrice(airport.min_price)}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Arrival Airports */}
            {filtersMeta.arrival_airports && filtersMeta.arrival_airports.length > 0 && (
              <div>
                <h5 className="text-xs font-medium text-neutral-600 mb-2 uppercase">Arrival Airports</h5>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {filtersMeta.arrival_airports?.map((airport) => (
                    <label key={`arr_${airport.iata}`} className="flex items-center justify-between cursor-pointer hover:bg-neutral-50 p-2 rounded-lg">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={(filters.arrival_airports || []).includes(airport.iata)}
                          onChange={() => handleArrivalAirportChange(airport.iata)}
                          className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                          disabled={isLoading}
                        />
                        <div className="ml-3">
                          <span className="text-sm text-neutral-700 font-medium">{airport.name}</span>
                          <span className="text-xs text-neutral-500 ml-2">
                            {airport.iata} {airport.terminal && `T${airport.terminal}`}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-neutral-500">({airport.count})</span>
                        <span className="text-xs text-neutral-600 block">{formatPrice(airport.min_price)}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Aircraft Size Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('aircraft')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h4 className="text-sm font-semibold text-neutral-800">Aircraft Size</h4>
          {expandedSections.aircraft ? (
            <ChevronUp className="w-4 h-4 text-neutral-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-neutral-500" />
          )}
        </button>
        
        {expandedSections.aircraft && (
          <div className="space-y-2">
            {filtersMeta.aircraft_size?.map((aircraft) => (
              <label key={aircraft.value} className="flex items-center justify-between cursor-pointer hover:bg-neutral-50 p-2 rounded-lg">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={(filters.aircraft_size || []).includes(aircraft.value)}
                    onChange={() => handleAircraftSizeChange(aircraft.value)}
                    className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                    disabled={isLoading}
                  />
                  <div className="ml-3">
                    <span className="text-sm text-neutral-700">{aircraft.label}</span>
                    <p className="text-xs text-neutral-500 mt-0.5">{aircraft.description}</p>
                    {aircraft.examples && aircraft.examples.length > 0 && (
                      <p className="text-xs text-neutral-400 mt-1">
                        {aircraft.examples.slice(0, 3).join(', ')}
                        {aircraft.examples.length > 3 && ' + more'}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-neutral-500">({aircraft.count})</span>
                  <span className="text-xs text-neutral-600 block">{formatPrice(aircraft.min_price)}</span>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h4 className="text-sm font-semibold text-neutral-800">Price Range</h4>
          {expandedSections.price ? (
            <ChevronUp className="w-4 h-4 text-neutral-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-neutral-500" />
          )}
        </button>
        
        {expandedSections.price && (
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-neutral-600 mb-1">Min Price</label>
              <input
                type="number"
                value={filters.price_min || filtersMeta.price?.min || 0}
                onChange={(e) => handlePriceChange('min', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Min"
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="block text-xs text-neutral-600 mb-1">Max Price</label>
              <input
                type="number"
                value={filters.price_max || filtersMeta.price?.max || 999999}
                onChange={(e) => handlePriceChange('max', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Max"
                disabled={isLoading}
              />
            </div>
          </div>
        )}
      </div>

      {/* Amenities Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('amenities')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h4 className="text-sm font-semibold text-neutral-800">Amenities</h4>
          {expandedSections.amenities ? (
            <ChevronUp className="w-4 h-4 text-neutral-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-neutral-500" />
          )}
        </button>
        
        {expandedSections.amenities && (
          <div className="space-y-2">
            {filtersMeta.baggage_included !== undefined && (
              <label className="flex items-center cursor-pointer hover:bg-neutral-50 p-2 rounded-lg">
                <input
                  type="checkbox"
                  checked={filters.baggage_included || false}
                  onChange={() => handleAmenityChange('baggage_included')}
                  className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                  disabled={isLoading}
                />
                <span className="ml-3 text-sm text-neutral-700">Baggage Included</span>
              </label>
            )}
            
            {filtersMeta.refundable !== undefined && (
              <label className="flex items-center cursor-pointer hover:bg-neutral-50 p-2 rounded-lg">
                <input
                  type="checkbox"
                  checked={filters.refundable || false}
                  onChange={() => handleAmenityChange('refundable')}
                  className="w-4 h-4 text-blue-600 border-neutral-300 rounded focus:ring-blue-500"
                  disabled={isLoading}
                />
                <span className="ml-3 text-sm text-neutral-700">Refundable</span>
              </label>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightFilterSidebar;
