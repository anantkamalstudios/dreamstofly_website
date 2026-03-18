import { useState } from "react";

const areaOptions = ["Select Area", "North", "South", "East", "West", "Central"];
const transportModeOptions = ["select", "Bus", "Tube", "Train", "Tram", "Walk"];
const transportTimeOptions = ["select", "5", "10", "15", "20", "30", "45", "60"];
const transportFromOptions = ["select", "Station", "Bus Stop", "Tram Stop", "Town Centre"];

const outsideAmenitiesList = [
  "Parking",
  "Garden/patio",
  "Garage",
  "Balcony/roof terrace",
  "Disabled access",
];

const SelectField = ({ value, onChange, options, className = "" }) => (
  <div className={`relative ${className}`}>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 appearance-none pr-8 focus:outline-none focus:border-blue-400 bg-white"
    >
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span>
  </div>
);

const FormRow = ({ label, hint, children }) => (
  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 mb-7">
    <div className="sm:w-52 flex-shrink-0">
      <span className="text-teal-700 font-semibold text-sm md:text-base">{label}</span>
      {hint && <p className="text-xs text-gray-400 mt-0.5">{hint}</p>}
    </div>
    <div className="flex-1">{children}</div>
  </div>
);

const AdvertiseStep2 = ({ onNext, onBack }) => {
  const [address, setAddress] = useState("10 Downing Street, London, SW1A 2AA");
  const [area, setArea] = useState("Select Area");
  const [transportMode, setTransportMode] = useState("select");
  const [transportTime, setTransportTime] = useState("select");
  const [transportFrom, setTransportFrom] = useState("select");
  const [livingRoom, setLivingRoom] = useState("No");
  const [outsideAmenities, setOutsideAmenities] = useState([...outsideAmenitiesList]);

  const toggleAmenity = (item) =>
    setOutsideAmenities((prev) =>
      prev.includes(item) ? prev.filter((a) => a !== item) : [...prev, item]
    );

  return (
    <div className="bg-white w-full max-w-3xl px-5 sm:px-8 md:px-14 py-8 md:py-12 shadow-md">

      {/* Title */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block">
          Got a room to let
        </h2>
        <div className="h-0.5 bg-blue-500 mt-2 mx-auto w-48 md:w-72" />
      </div>

      {/* Step indicator */}
      <p className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-5">
        Step 2 of 5
      </p>

      {/* Blue info bar */}
      <div className="bg-blue-50 border border-blue-300 px-4 md:px-5 py-3 md:py-4 text-blue-600 text-sm mb-8 md:mb-10">
        More about the property
      </div>

      {/* Address */}
      <FormRow label="Address of property">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
        />
      </FormRow>

      {/* Area */}
      <FormRow label="Area">
        <SelectField
          value={area}
          onChange={setArea}
          options={areaOptions}
          className="w-full sm:w-64"
        />
      </FormRow>

      {/* Transport */}
      <FormRow label="Transport">
        <div className="flex flex-wrap items-center gap-2">
          <SelectField
            value={transportMode}
            onChange={setTransportMode}
            options={transportModeOptions}
            className="w-24"
          />
          <span className="text-sm text-gray-500">minutes</span>
          <SelectField
            value={transportTime}
            onChange={setTransportTime}
            options={transportTimeOptions}
            className="w-24"
          />
          <span className="text-sm text-gray-500">from</span>
          <SelectField
            value={transportFrom}
            onChange={setTransportFrom}
            options={transportFromOptions}
            className="w-32"
          />
        </div>
      </FormRow>

      {/* Living room */}
      <FormRow label="Living room?">
        <div className="flex flex-col gap-2">
          {["Yes, there is a shared living room", "No"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
              <input
                type="radio"
                name="livingRoom"
                value={opt}
                checked={livingRoom === opt}
                onChange={() => setLivingRoom(opt)}
                className="accent-blue-600 w-4 h-4"
              />
              {opt}
            </label>
          ))}
        </div>
      </FormRow>

      {/* Outside amenities */}
      <FormRow label="I am a">
        <div className="flex flex-col gap-2">
          {outsideAmenitiesList.map((item) => (
            <label key={item} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
              <input
                type="checkbox"
                checked={outsideAmenities.includes(item)}
                onChange={() => toggleAmenity(item)}
                className="accent-blue-600 w-4 h-4 rounded"
              />
              {item}
            </label>
          ))}
        </div>
      </FormRow>

      {/* Back & Next buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <button
          onClick={onBack}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-64 py-3.5 rounded-xl text-base font-semibold transition-colors"
        >
          Back
        </button>
        <button
          onClick={() => onNext({ address, area, transportMode, transportTime, transportFrom, livingRoom, outsideAmenities })}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-64 py-3.5 rounded-xl text-base font-semibold transition-colors"
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default AdvertiseStep2;