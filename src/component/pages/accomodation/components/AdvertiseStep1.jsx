import { useState } from "react";

const roomOptions = [
  "1 Room For a rent",
  "2 Rooms For a rent",
  "3 Rooms For a rent",
  "Entire property",
];

const bedOptions = ["1 bed", "2 bed", "3 bed", "4 bed", "5+ bed"];
const propertyTypeOptions = [
  "select", "Flat", "House", "Studio", "Bedsit",
  "Shared House", "Student Hall", "Bungalow",
];
const alreadyOptions = Array.from({ length: 10 }, (_, i) => String(i));
const landlordOptions = [
  "Live in landlord (I own the property and live there)",
  "Live out landlord (I own the property but don't live there)",
  "Current tenant/flatmate (I am living in the property)",
  "Agent (I am advertising on a landlord's behalf)",
  "Former flatmate (I am moving out and need someone to replace me)",
];

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

const AdvertiseStep1 = ({ onNext }) => {
  const [iHave, setIHave] = useState("1 Room For a rent");
  const [beds, setBeds] = useState("2 bed");
  const [propertyType, setPropertyType] = useState("select");
  const [alreadyThere, setAlreadyThere] = useState("1");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [area, setArea] = useState("");
  const [landlordType, setLandlordType] = useState(landlordOptions[0]);
  const [email, setEmail] = useState("");

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
        Step 1 of 5
      </p>

      {/* Blue info bar */}
      <div className="bg-blue-50 border border-blue-300 px-4 md:px-5 py-3 md:py-4 text-blue-600 text-sm mb-8 md:mb-10">
        Get started with your free ad
      </div>

      {/* I have */}
      <FormRow label="I have">
        <SelectField
          value={iHave}
          onChange={setIHave}
          options={roomOptions}
          className="w-full sm:w-56"
        />
      </FormRow>

      {/* Size and type */}
      <FormRow label="Size and type of property">
        <div className="flex gap-2 flex-wrap">
          <SelectField
            value={beds}
            onChange={setBeds}
            options={bedOptions}
            className="w-28"
          />
          <SelectField
            value={propertyType}
            onChange={setPropertyType}
            options={propertyTypeOptions}
            className="w-32"
          />
        </div>
      </FormRow>

      {/* There are already */}
      <FormRow label="There are already">
        <SelectField
          value={alreadyThere}
          onChange={setAlreadyThere}
          options={alreadyOptions}
          className="w-28"
        />
      </FormRow>

      {/* Postcode */}
      <FormRow label="Postcode of property" hint="(e.g SE15 8PD)">
        <input
          type="text"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
        />
      </FormRow>

      {/* City */}
      <FormRow label="City">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
        />
      </FormRow>

      {/* Country */}
      <FormRow label="Country">
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
        />
      </FormRow>

      {/* Area */}
      <FormRow label="Area">
        <input
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
        />
      </FormRow>

      {/* I am a */}
      <FormRow label="I am a">
        <div className="flex flex-col gap-2">
          {landlordOptions.map((opt) => (
            <label key={opt} className="flex items-start gap-2 cursor-pointer text-sm text-gray-700">
              <input
                type="radio"
                name="landlordType"
                value={opt}
                checked={landlordType === opt}
                onChange={() => setLandlordType(opt)}
                className="accent-blue-600 w-4 h-4 mt-0.5 flex-shrink-0"
              />
              {opt}
            </label>
          ))}
        </div>
      </FormRow>

      {/* Email */}
      <FormRow label="My email address is*">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
        />
        <p className="text-xs text-gray-400 mt-1">
          (We'll keep this safe and not display it publicly)
        </p>
      </FormRow>

      {/* Next button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => onNext({ iHave, beds, propertyType, alreadyThere, postcode, city, country, area, landlordType, email })}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-64 py-3.5 rounded-xl text-base font-semibold transition-colors"
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default AdvertiseStep1;