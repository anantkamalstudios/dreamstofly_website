import { useState } from "react";
import { useNavigate } from "react-router-dom";

const amenitiesList = [
  "Furnished", "Parking",
  "Shared living room", "Garage",
  "Washing machine", "Disabled access",
  "Garden/patio", "Broadband",
  "Balcony/roof terrace", "En-suite",
];

const durationOptions = ["No Minimum", "1 month", "2 months", "3 months", "6 months", "12 months"];
const stayOptions = ["7 days a week", "5 days a week", "Weekends only", "Flexible"];
const ageOptions = Array.from({ length: 83 }, (_, i) => i + 18);
const occupationOptions = ["Not Disclosed", "Student", "Professional", "Self-employed", "Retired"];
const smokeOptions = ["No", "Yes", "Outside only"];
const petsOptions = ["No", "Yes"];
const orientationOptions = ["Undisclosed", "Straight", "Gay", "Bisexual", "Other"];
const languageOptions = ["English", "French", "Spanish", "German", "Hindi", "Other"];
const genderPrefOptions = ["Female", "Male", "Any"];
const occupationPrefOptions = ["Don't Mind", "Student", "Professional", "Working"];
const smokingPrefOptions = ["Don't Mind", "No Smokers", "Smokers OK"];
const petsPrefOptions = ["Don't Mind", "No Pets", "Pets OK"];
const orientationPrefOptions = ["Not Important", "Straight only", "Gay only"];

const SectionBar = ({ label }) => (
  <div className="bg-blue-50 border border-blue-300 px-5 py-4 text-blue-600 text-sm font-medium mb-8">
    {label}
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

const RoomWantedStep2 = ({ onBack }) => {
  // Your search
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("");
  const [budgetType, setBudgetType] = useState("per calendar month");
  const [moveDay, setMoveDay] = useState("");
  const [moveMonth, setMoveMonth] = useState("");
  const [moveYear, setMoveYear] = useState("");
  const [periodFrom, setPeriodFrom] = useState("No Minimum");
  const [periodTo, setPeriodTo] = useState("No Maximum");
  const [stayDays, setStayDays] = useState("7 days a week");
  const [amenities, setAmenities] = useState([...amenitiesList]);

  // About yourselves
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [occupation, setOccupation] = useState("Not Disclosed");
  const [smoke, setSmoke] = useState("No");
  const [pets, setPets] = useState("No");
  const [orientation, setOrientation] = useState("Undisclosed");
  const [orientationSearch, setOrientationSearch] = useState(true);
  const [language, setLanguage] = useState("English");
  const [nationality, setNationality] = useState("");
  const [interests, setInterests] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Preferred flatmate
  const [prefGender, setPrefGender] = useState("Female");
  const [prefAgeFrom, setPrefAgeFrom] = useState("");
  const [prefAgeTo, setPrefAgeTo] = useState("");
  const [prefOccupation, setPrefOccupation] = useState("Don't Mind");
  const [prefSmoking, setPrefSmoking] = useState("Don't Mind");
  const [prefPets, setPrefPets] = useState("Don't Mind");
  const [prefOrientation, setPrefOrientation] = useState("Not Important");
  const navigate = useNavigate();

  // Ad details
  const [adTitle, setAdTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);
  const [telephone, setTelephone] = useState("");

  const toggleAmenity = (item) =>
    setAmenities((prev) =>
      prev.includes(item) ? prev.filter((a) => a !== item) : [...prev, item]
    );

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const years = Array.from({ length: 10 }, (_, i) => String(new Date().getFullYear() + i));

  return (
    <div className="bg-white w-full max-w-3xl px-5 sm:px-8 md:px-14 py-8 md:py-12 shadow-md">

      {/* Title */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block">
          Post new room wanted ad
        </h2>
        <div className="h-0.5 bg-blue-500 mt-2 mx-auto w-48 md:w-72" />
      </div>

      <p className="text-base md:text-lg font-bold text-gray-900 mb-5">Step 2 of 2</p>

      {/* ── YOUR SEARCH ── */}
      <SectionBar label="Your search" />

      {/* Where */}
      <FormRow label="Where do you want to live?">
        <div className="flex gap-2">
          <SelectField
            value={area}
            onChange={setArea}
            options={["London", "Nottingham", "New York", "Paris"]}
            placeholder="Select an area"
            className="flex-1"
          />
          <button className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 whitespace-nowrap">
            Select
          </button>
        </div>
      </FormRow>

      {/* Budget */}
      <FormRow label="Your combined budget" hint="(total combined rental you can both afford)">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="text-gray-500 text-sm">£</span>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-24 focus:outline-none focus:border-blue-400"
            />
          </div>
          {["per calendar month", "per week"].map((opt) => (
            <label key={opt} className="flex items-center gap-1.5 text-sm text-gray-700 cursor-pointer">
              <input type="radio" name="budgetType" value={opt} checked={budgetType === opt}
                onChange={() => setBudgetType(opt)} className="accent-blue-600 w-4 h-4" />
              {opt}
            </label>
          ))}
        </div>
      </FormRow>

      {/* Move in */}
      <FormRow label="We are available to move in from">
        <div className="flex gap-2 flex-wrap">
          {[
            { val: moveDay, set: setMoveDay, ph: "Day", opts: days },
            { val: moveMonth, set: setMoveMonth, ph: "Month", opts: months },
            { val: moveYear, set: setMoveYear, ph: "Year", opts: years },
          ].map(({ val, set, ph, opts }) => (
            <SelectField key={ph} value={val} onChange={set} options={opts} placeholder={ph} className="w-24" />
          ))}
        </div>
      </FormRow>

      {/* Period */}
      <FormRow label="Period accommodation needed for">
        <div className="flex items-center gap-2 flex-wrap">
          <SelectField value={periodFrom} onChange={setPeriodFrom} options={durationOptions} className="w-36" />
          <span className="text-sm text-gray-500">To</span>
          <SelectField value={periodTo} onChange={setPeriodTo}
            options={["No Maximum", ...durationOptions.slice(1)]} className="w-36" />
        </div>
      </FormRow>

      {/* Stay */}
      <FormRow label="We want to stay in the accommodation">
        <SelectField value={stayDays} onChange={setStayDays} options={stayOptions} className="w-48" />
      </FormRow>

      {/* Amenities */}
      <FormRow label="We would prefer these amenities">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {amenitiesList.map((item) => (
            <label key={item} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" checked={amenities.includes(item)}
                onChange={() => toggleAmenity(item)} className="accent-blue-600 w-4 h-4 rounded" />
              {item}
            </label>
          ))}
        </div>
      </FormRow>

      {/* ── ABOUT YOURSELVES ── */}
      <SectionBar label="About yourselves" />

      <FormRow label="Aged between">
        <div className="flex items-center gap-2 flex-wrap">
          <SelectField value={ageFrom} onChange={setAgeFrom}
            options={ageOptions.map(String)} placeholder="select" className="w-24" />
          <span className="text-sm text-gray-500">and</span>
          <SelectField value={ageTo} onChange={setAgeTo}
            options={ageOptions.map(String)} placeholder="select" className="w-24" />
          <span className="text-sm text-gray-500">Year old</span>
        </div>
      </FormRow>

      <FormRow label="Occupation">
        <SelectField value={occupation} onChange={setOccupation} options={occupationOptions} className="w-48" />
      </FormRow>

      <FormRow label="Do any of you smoke?">
        <SelectField value={smoke} onChange={setSmoke} options={smokeOptions} className="w-48" />
      </FormRow>

      <FormRow label="Do you have any pets?">
        <SelectField value={pets} onChange={setPets} options={petsOptions} className="w-48" />
      </FormRow>

      <FormRow label="Your sexual orientation">
        <SelectField value={orientation} onChange={setOrientation} options={orientationOptions} className="w-48" />
        <label className="flex items-start gap-2 mt-3 text-sm text-blue-600 cursor-pointer">
          <input type="checkbox" checked={orientationSearch} onChange={() => setOrientationSearch(!orientationSearch)}
            className="accent-blue-600 w-4 h-4 rounded mt-0.5 flex-shrink-0" />
          Yes, I would like my orientation to form part of my ad's search criteria and allow others to search on this field.
        </label>
      </FormRow>

      <FormRow label="Your preference language">
        <SelectField value={language} onChange={setLanguage} options={languageOptions} className="w-48" />
      </FormRow>

      <FormRow label="Your nationality">
        <SelectField value={nationality} onChange={setNationality}
          options={["British", "American", "Indian", "Australian", "Canadian", "Irish", "Other"]}
          placeholder="Select nationality" className="w-48" />
      </FormRow>

      <FormRow label="Your interests">
        <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)}
          placeholder="Enter interests"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
      </FormRow>

      <FormRow label="Your Name">
        <div className="flex gap-3 flex-wrap">
          <div className="flex-1 min-w-[120px]">
            <p className="text-xs text-gray-400 mb-1">First Name</p>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
          </div>
          <div className="flex-1 min-w-[120px]">
            <p className="text-xs text-gray-400 mb-1">Last Name</p>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
          </div>
        </div>
      </FormRow>

      <FormRow label="My email address is*">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
      </FormRow>

      {/* ── YOUR PREFERRED FLATMATE ── */}
      <SectionBar label="Your preferred flatmate" />

      <FormRow label="Gender">
        <SelectField value={prefGender} onChange={setPrefGender} options={genderPrefOptions} className="w-48" />
      </FormRow>

      <FormRow label="Aged between">
        <div className="flex items-center gap-2 flex-wrap">
          <SelectField value={prefAgeFrom} onChange={setPrefAgeFrom}
            options={ageOptions.map(String)} placeholder="select" className="w-24" />
          <span className="text-sm text-gray-500">To</span>
          <SelectField value={prefAgeTo} onChange={setPrefAgeTo}
            options={ageOptions.map(String)} placeholder="select" className="w-24" />
        </div>
      </FormRow>

      <FormRow label="Occupation">
        <SelectField value={prefOccupation} onChange={setPrefOccupation} options={occupationPrefOptions} className="w-48" />
      </FormRow>

      <FormRow label="Smoking">
        <SelectField value={prefSmoking} onChange={setPrefSmoking} options={smokingPrefOptions} className="w-48" />
      </FormRow>

      <FormRow label="Pets">
        <SelectField value={prefPets} onChange={setPrefPets} options={petsPrefOptions} className="w-48" />
      </FormRow>

      <FormRow label="Orientation">
        <SelectField value={prefOrientation} onChange={setPrefOrientation} options={orientationPrefOptions} className="w-48" />
      </FormRow>

      {/* ── AD DETAILS (OPTIONAL) ── */}
      <SectionBar label="Ad details (optional)" />

      <FormRow label="Ad title" hint="(Short description)">
        <input type="text" value={adTitle} onChange={(e) => setAdTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
      </FormRow>

      <FormRow label="Description">
        <p className="text-xs text-gray-400 mb-1">(No contact details permitted within description)</p>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={5}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400 resize-none" />
        <p className="text-xs text-gray-400 mt-2 leading-relaxed">
          Include details about the accommodation you are looking for, who you'd like to live with and what a potential flatmate should expect living with you.
        </p>
      </FormRow>

      <FormRow label="Upload photos">
        <label className="w-full border border-gray-300 rounded-md h-24 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
          <input type="file" multiple accept="image/*" className="hidden"
            onChange={(e) => setPhotos([...e.target.files])} />
          <svg className="w-7 h-7 text-gray-400 mb-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          <p className="text-xs text-gray-400">Maximum file size is 24mb</p>
        </label>
      </FormRow>

      <FormRow label="Telephone">
        <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
        <p className="text-xs text-gray-400 mt-2 leading-relaxed">
          (We won't display your number on SpareRoom or pass it onto any third parties. We need your number in case we need to contact you about your account or to help verify your details)
        </p>
      </FormRow>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <button onClick={onBack}
          className="border border-gray-300 text-gray-700 w-full sm:w-auto px-10 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
          Back
        </button>
        {/* here we will use useNavigate /services/accommodation */}
        <button onClick={() => navigate("/services/accommodation")} className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-10 py-3 rounded-full font-semibold transition-colors">
          Post Add
        </button>
      </div>

    </div>
  );
};

export default RoomWantedStep2;