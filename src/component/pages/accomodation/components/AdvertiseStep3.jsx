import { useState } from "react";

const transportModeOptions = ["select", "Bus", "Tube", "Train", "Tram", "Walk"];
const transportTimeOptions = ["select", "5", "10", "15", "20", "30", "45", "60"];
const transportFromOptions = ["select", "Station", "Bus Stop", "Tram Stop", "Town Centre"];
const stayOptions = ["No Minimum", "1 month", "2 months", "3 months", "6 months", "12 months"];
const daysOptions = ["7 Day a week", "5 Day a week", "Weekends only", "Flexible"];
const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const years = Array.from({ length: 10 }, (_, i) => String(new Date().getFullYear() + i));

const SelectField = ({ value, onChange, options, placeholder, className = "" }) => (
  <div className={`relative ${className}`}>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 appearance-none pr-8 focus:outline-none focus:border-blue-400 bg-white"
    >
      {placeholder && <option value="">{placeholder}</option>}
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

const defaultRoom = () => ({
  cost: "",
  costType: "per calendar month",
  size: "Single",
  transportMode: "select",
  transportTime: "select",
  transportFrom: "select",
  enSuite: true,
  furnishing: "Furnished",
  securityDeposit: "",
});

const RoomBlock = ({ index, room, onChange }) => {
  const update = (key, val) => onChange(index, key, val);

  return (
    <div className="mb-10">
      {/* Room heading */}
      <h3 className="text-lg font-bold text-gray-900 mb-1">Room {index + 1}</h3>
      <div className="h-0.5 bg-gray-200 mb-6" />

      {/* Cost */}
      <FormRow label="Cost of room">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="text-gray-500 text-sm">£</span>
            <input
              type="number"
              value={room.cost}
              onChange={(e) => update("cost", e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-24 focus:outline-none focus:border-blue-400"
            />
          </div>
          {["per calendar month", "per week"].map((opt) => (
            <label key={opt} className="flex items-center gap-1.5 text-sm text-gray-700 cursor-pointer">
              <input
                type="radio"
                name={`costType-${index}`}
                value={opt}
                checked={room.costType === opt}
                onChange={() => update("costType", opt)}
                className="accent-blue-600 w-4 h-4"
              />
              {opt}
            </label>
          ))}
        </div>
      </FormRow>

      {/* Size */}
      <FormRow label="Size of room">
        <div className="flex gap-5">
          {["Single", "Double"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
              <input
                type="radio"
                name={`size-${index}`}
                value={opt}
                checked={room.size === opt}
                onChange={() => update("size", opt)}
                className="accent-blue-600 w-4 h-4"
              />
              {opt}
            </label>
          ))}
        </div>
      </FormRow>

      {/* Transport */}
      <FormRow label="Transport">
        <div className="flex flex-wrap items-center gap-2">
          <SelectField value={room.transportMode} onChange={(v) => update("transportMode", v)}
            options={transportModeOptions} className="w-24" />
          <span className="text-sm text-gray-500">minutes</span>
          <SelectField value={room.transportTime} onChange={(v) => update("transportTime", v)}
            options={transportTimeOptions} className="w-24" />
          <span className="text-sm text-gray-500">from</span>
          <SelectField value={room.transportFrom} onChange={(v) => update("transportFrom", v)}
            options={transportFromOptions} className="w-32" />
        </div>
      </FormRow>

      {/* Amenities */}
      <FormRow label="Amenities">
        <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
          <input
            type="checkbox"
            checked={room.enSuite}
            onChange={() => update("enSuite", !room.enSuite)}
            className="accent-blue-600 w-4 h-4 rounded"
          />
          En-suite (tick if room has own toilet and/or bath/shower)
        </label>
      </FormRow>

      {/* Furnishings */}
      <FormRow label="Furnishings">
        <div className="flex gap-5">
          {["Furnished", "Unfurnished"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
              <input
                type="radio"
                name={`furnishing-${index}`}
                value={opt}
                checked={room.furnishing === opt}
                onChange={() => update("furnishing", opt)}
                className="accent-blue-600 w-4 h-4"
              />
              {opt}
            </label>
          ))}
        </div>
      </FormRow>

      {/* Security deposit */}
      <FormRow label="Security deposit">
        <div className="flex items-center gap-1">
          <span className="text-gray-500 text-sm">£</span>
          <input
            type="number"
            value={room.securityDeposit}
            onChange={(e) => update("securityDeposit", e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm w-24 focus:outline-none focus:border-blue-400"
          />
        </div>
      </FormRow>
    </div>
  );
};

const AdvertiseStep3 = ({ onNext, onBack, formData }) => {
  // Number of rooms comes from step 1
  const roomCount = parseInt(formData?.iHave?.match(/\d+/) || [1]) || 1;

  const [rooms, setRooms] = useState(
    Array.from({ length: roomCount }, () => defaultRoom())
  );

  // Availability fields (shared across all rooms)
  const [availDay, setAvailDay] = useState("");
  const [availMonth, setAvailMonth] = useState("");
  const [availYear, setAvailYear] = useState("");
  const [minStay, setMinStay] = useState("No Minimum");
  const [maxStay, setMaxStay] = useState("No Maximum");
  const [shortTerm, setShortTerm] = useState(true);
  const [daysAvailable, setDaysAvailable] = useState("7 Day a week");
  const [referencesRequired, setReferencesRequired] = useState("yes");
  const [billsIncluded, setBillsIncluded] = useState("yes");
  const [broadbandIncluded, setBroadbandIncluded] = useState("yes");

  const updateRoom = (index, key, value) => {
    setRooms((prev) => prev.map((r, i) => i === index ? { ...r, [key]: value } : r));
  };

  return (
    <div className="bg-white w-full max-w-3xl px-5 sm:px-8 md:px-14 py-8 md:py-12 shadow-md">

      {/* Title */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block">
          Got a room to let
        </h2>
        <div className="h-0.5 bg-blue-500 mt-2 mx-auto w-48 md:w-72" />
      </div>

      <p className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-5">
        Step 3 of 5
      </p>

      {/* Blue info bar */}
      <div className="bg-blue-50 border border-blue-300 px-4 md:px-5 py-3 md:py-4 text-blue-600 text-sm mb-8 md:mb-10">
        The rooms
      </div>

      {/* Dynamic room blocks */}
      {rooms.map((room, index) => (
        <RoomBlock key={index} index={index} room={room} onChange={updateRoom} />
      ))}

      {/* Availability section — shared */}
      <div className="h-px bg-gray-200 mb-8" />

      {/* Available from */}
      <FormRow label="Available from">
        <div className="flex gap-2 flex-wrap">
          {[
            { val: availDay, set: setAvailDay, ph: "Day", opts: days },
            { val: availMonth, set: setAvailMonth, ph: "Month", opts: months },
            { val: availYear, set: setAvailYear, ph: "Year", opts: years },
          ].map(({ val, set, ph, opts }) => (
            <SelectField key={ph} value={val} onChange={set}
              options={opts} placeholder={ph} className="w-24" />
          ))}
        </div>
      </FormRow>

      {/* Minimum stay */}
      <FormRow label="Minimum stay">
        <SelectField value={minStay} onChange={setMinStay}
          options={["No Minimum", ...stayOptions.slice(1)]} className="w-full sm:w-64" />
      </FormRow>

      {/* Maximum stay */}
      <FormRow label="Maximum stay">
        <SelectField value={maxStay} onChange={setMaxStay}
          options={["No Maximum", ...stayOptions.slice(1)]} className="w-full sm:w-64" />
      </FormRow>

      {/* Short term */}
      <FormRow label="Short term lets considered?" hint="(i.e. 1 week to 3 months)">
        <label className="flex items-start gap-2 cursor-pointer text-sm text-gray-700">
          <input type="checkbox" checked={shortTerm} onChange={() => setShortTerm(!shortTerm)}
            className="accent-blue-600 w-4 h-4 rounded mt-0.5 flex-shrink-0" />
          <span>
            Tick for yes
            <br />
            <span className="text-xs text-gray-400">
              *Please specify any rent adjustments in your ad description (step 5).
            </span>
          </span>
        </label>
      </FormRow>

      {/* Days available */}
      <FormRow label="Days available">
        <SelectField value={daysAvailable} onChange={setDaysAvailable}
          options={daysOptions} className="w-full sm:w-64" />
      </FormRow>

      {/* References required */}
      <FormRow label="References required?">
        <div className="flex gap-5">
          {["yes", "No"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
              <input type="radio" name="references" value={opt}
                checked={referencesRequired === opt}
                onChange={() => setReferencesRequired(opt)}
                className="accent-blue-600 w-4 h-4" />
              {opt}
            </label>
          ))}
        </div>
      </FormRow>

      {/* Bills included */}
      <FormRow label="Bills included?">
        <div className="flex gap-5">
          {["yes", "No", "Some"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
              <input type="radio" name="bills" value={opt}
                checked={billsIncluded === opt}
                onChange={() => setBillsIncluded(opt)}
                className="accent-blue-600 w-4 h-4" />
              {opt}
            </label>
          ))}
        </div>
      </FormRow>

      {/* Broadband included */}
      <FormRow label="Broadband included?">
        <div className="flex gap-5">
          {["yes", "No"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
              <input type="radio" name="broadband" value={opt}
                checked={broadbandIncluded === opt}
                onChange={() => setBroadbandIncluded(opt)}
                className="accent-blue-600 w-4 h-4" />
              {opt}
            </label>
          ))}
        </div>
      </FormRow>

      {/* Back & Next */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <button onClick={onBack}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-64 py-3.5 rounded-xl text-base font-semibold transition-colors">
          Back
        </button>
        <button
          onClick={() => onNext({ rooms, availDay, availMonth, availYear, minStay, maxStay, shortTerm, daysAvailable, referencesRequired, billsIncluded, broadbandIncluded })}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-64 py-3.5 rounded-xl text-base font-semibold transition-colors">
          Next
        </button>
      </div>

    </div>
  );
};

export default AdvertiseStep3;