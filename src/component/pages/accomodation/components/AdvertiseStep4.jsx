import { useState } from "react";

const smokingOptions = ["No", "Yes", "Outside only"];
const occupationOptions = ["Not Disclosed", "Student", "Professional", "Working", "Retired"];
const petsOptions = ["No", "Yes"];
const ageOptions = ["select", ...Array.from({ length: 63 }, (_, i) => String(i + 18))];
const languageOptions = ["English", "French", "Spanish", "German", "Hindi", "Other"];
const nationalityOptions = ["Select nationality", "British", "American", "Indian", "Australian", "Canadian", "Irish", "Other"];
const genderCountOptions = Array.from({ length: 11 }, (_, i) => String(i));

const smokingPrefOptions = ["No Preferences", "No Smokers", "Smokers OK"];
const genderPrefOptions = ["No Preferences", "Male only", "Female only", "Any"];
const petsPrefOptions = ["No", "Yes", "Don't Mind"];
const ageMinOptions = ["No Minimum", ...Array.from({ length: 63 }, (_, i) => String(i + 18))];
const ageMaxOptions = ["No Maximum", ...Array.from({ length: 63 }, (_, i) => String(i + 18))];
const langPrefOptions = ["English", "French", "Spanish", "German", "Hindi", "Any"];

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

const SectionBar = ({ label }) => (
  <div className="bg-blue-50 border border-blue-300 px-4 md:px-5 py-3 md:py-4 text-blue-600 text-sm font-medium mb-8">
    {label}
  </div>
);

const AdvertiseStep4 = ({ onNext, onBack }) => {
  // Existing flatmates
  const [smoking, setSmoking] = useState("No");
  const [maleCount, setMaleCount] = useState("0");
  const [femaleCount, setFemaleCount] = useState("0");
  const [othersCount, setOthersCount] = useState("0");
  const [occupation, setOccupation] = useState("Not Disclosed");
  const [pets, setPets] = useState("No");
  const [ageFrom, setAgeFrom] = useState("select");
  const [ageTo, setAgeTo] = useState("select");
  const [language, setLanguage] = useState("English");
  const [nationality, setNationality] = useState("Select nationality");
  const [interests, setInterests] = useState("");

  // Preferences for new flatmates
  const [prefSmoking, setPrefSmoking] = useState("No Preferences");
  const [prefGender, setPrefGender] = useState("No Preferences");
  const [prefOccupation, setPrefOccupation] = useState("Students only");
  const [prefPets, setPrefPets] = useState("No");
  const [prefMinAge, setPrefMinAge] = useState("No Minimum");
  const [prefMaxAge, setPrefMaxAge] = useState("No Maximum");
  const [prefLanguage, setPrefLanguage] = useState("English");
  const [couplesWelcome, setCouplesWelcome] = useState("Yes");
  const [lgbtPreferred, setLgbtPreferred] = useState(true);
  const [veganPreferred, setVeganPreferred] = useState(true);

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
        Step 4 of 5
      </p>

      {/* ── EXISTING FLATMATES ── */}
      <SectionBar label="The Existing Flatmates" />

      {/* Smoking */}
      <FormRow label="Smoking">
        <SelectField value={smoking} onChange={setSmoking}
          options={smokingOptions} className="w-full sm:w-48" />
      </FormRow>

      {/* Gender */}
      <FormRow label="Gender">
        <div className="flex flex-wrap items-center gap-3">
          <SelectField value={maleCount} onChange={setMaleCount}
            options={genderCountOptions} className="w-20" />
          <span className="text-sm text-gray-600">Male</span>
          <SelectField value={femaleCount} onChange={setFemaleCount}
            options={genderCountOptions} className="w-20" />
          <span className="text-sm text-gray-600">Female</span>
          <SelectField value={othersCount} onChange={setOthersCount}
            options={genderCountOptions} className="w-20" />
          <span className="text-sm text-gray-600">Others</span>
        </div>
      </FormRow>

      {/* Occupation */}
      <FormRow label="Occupation">
        <SelectField value={occupation} onChange={setOccupation}
          options={occupationOptions} className="w-full sm:w-48" />
      </FormRow>

      {/* Pets */}
      <FormRow label="Do you have any pets?">
        <SelectField value={pets} onChange={setPets}
          options={petsOptions} className="w-full sm:w-48" />
      </FormRow>

      {/* Ages */}
      <FormRow label="Ages">
        <div className="flex items-center gap-2 flex-wrap">
          <SelectField value={ageFrom} onChange={setAgeFrom}
            options={ageOptions} className="w-28" />
          <span className="text-sm text-gray-500">To</span>
          <SelectField value={ageTo} onChange={setAgeTo}
            options={ageOptions} className="w-28" />
        </div>
      </FormRow>

      {/* Language */}
      <FormRow label="Your preference language">
        <SelectField value={language} onChange={setLanguage}
          options={languageOptions} className="w-full sm:w-48" />
      </FormRow>

      {/* Nationality */}
      <FormRow label="Your nationality">
        <SelectField value={nationality} onChange={setNationality}
          options={nationalityOptions} className="w-full sm:w-48" />
      </FormRow>

      {/* Interests */}
      <FormRow label="Interests">
        <input
          type="text"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="Enter interests"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
        />
      </FormRow>

      {/* ── PREFERENCES FOR NEW FLATMATES ── */}
      <SectionBar label="Preferences For New flatmates" />

      {/* Smoking OK */}
      <FormRow label="Smoking OK?">
        <SelectField value={prefSmoking} onChange={setPrefSmoking}
          options={smokingPrefOptions} className="w-full sm:w-56" />
      </FormRow>

      {/* Gender pref */}
      <FormRow label="Gender">
        <SelectField value={prefGender} onChange={setPrefGender}
          options={genderPrefOptions} className="w-full sm:w-56" />
      </FormRow>

      {/* Occupation pref */}
      <FormRow label="Occupation">
        <div className="flex flex-wrap gap-5">
          {["Students only", "Available to all"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
              <input
                type="radio"
                name="prefOccupation"
                value={opt}
                checked={prefOccupation === opt}
                onChange={() => setPrefOccupation(opt)}
                className="accent-blue-600 w-4 h-4"
              />
              {opt}
            </label>
          ))}
        </div>
      </FormRow>

      {/* Pets considered */}
      <FormRow label="Pets considered">
        <SelectField value={prefPets} onChange={setPrefPets}
          options={petsPrefOptions} className="w-full sm:w-48" />
      </FormRow>

      {/* Min age */}
      <FormRow label="Minimum age">
        <SelectField value={prefMinAge} onChange={setPrefMinAge}
          options={ageMinOptions} className="w-full sm:w-48" />
      </FormRow>

      {/* Max age */}
      <FormRow label="Maximum age">
        <SelectField value={prefMaxAge} onChange={setPrefMaxAge}
          options={ageMaxOptions} className="w-full sm:w-48" />
      </FormRow>

      {/* Language pref */}
      <FormRow label="Language">
        <SelectField value={prefLanguage} onChange={setPrefLanguage}
          options={langPrefOptions} className="w-full sm:w-48" />
      </FormRow>

      {/* Couples welcome */}
      <FormRow label="Couples welcome?">
        <div className="flex gap-5">
          {["Yes", "No"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
              <input
                type="radio"
                name="couplesWelcome"
                value={opt}
                checked={couplesWelcome === opt}
                onChange={() => setCouplesWelcome(opt)}
                className="accent-blue-600 w-4 h-4"
              />
              {opt}
            </label>
          ))}
        </div>
      </FormRow>

      {/* Other preferences */}
      <FormRow label="Other preferences">
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <input type="checkbox" checked={lgbtPreferred}
              onChange={() => setLgbtPreferred(!lgbtPreferred)}
              className="accent-blue-600 w-4 h-4 rounded" />
            LGBT preferred
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
            <input type="checkbox" checked={veganPreferred}
              onChange={() => setVeganPreferred(!veganPreferred)}
              className="accent-blue-600 w-4 h-4 rounded" />
            Vegetarian/vegan preferred
          </label>
        </div>
      </FormRow>

      {/* Back & Next */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <button onClick={onBack}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-64 py-3.5 rounded-xl text-base font-semibold transition-colors">
          Back
        </button>
        <button
          onClick={() => onNext({
            smoking, maleCount, femaleCount, othersCount, occupation, pets,
            ageFrom, ageTo, language, nationality, interests,
            prefSmoking, prefGender, prefOccupation, prefPets,
            prefMinAge, prefMaxAge, prefLanguage, couplesWelcome,
            lgbtPreferred, veganPreferred
          })}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-64 py-3.5 rounded-xl text-base font-semibold transition-colors">
          Next
        </button>
      </div>

    </div>
  );
};

export default AdvertiseStep4;