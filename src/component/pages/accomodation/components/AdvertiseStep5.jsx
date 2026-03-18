import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ageOptions = ["select", ...Array.from({ length: 63 }, (_, i) => String(i + 18))];
const languageOptions = ["English", "French", "Spanish", "German", "Hindi", "Other"];
const nationalityOptions = ["Select nationality", "British", "American", "Indian", "Australian", "Canadian", "Irish", "Other"];

const FormRow = ({ label, hint, children }) => (
  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 mb-7">
    <div className="sm:w-52 flex-shrink-0">
      <span className="text-teal-700 font-semibold text-sm md:text-base">{label}</span>
      {hint && <p className="text-xs text-gray-400 mt-0.5">{hint}</p>}
    </div>
    <div className="flex-1">{children}</div>
  </div>
);

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

const AdvertiseRoomStep5 = ({ onBack }) => {
  const [adTitle, setAdTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ageFrom, setAgeFrom] = useState("select");
  const [ageTo, setAgeTo] = useState("select");
  const [language, setLanguage] = useState("English");
  const [nationality, setNationality] = useState("Select nationality");
  const [interests, setInterests] = useState("");
  const [photos, setPhotos] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/services/accommodation");
    console.log("Form submitted!");
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
        Step 5 of 5
      </p>

      {/* Section bar */}
      <div className="bg-blue-50 border border-blue-300 px-4 md:px-5 py-3 md:py-4 text-blue-600 text-sm font-medium mb-8">
        Your ad & contact details
      </div>

      {/* Ad title */}
      <FormRow label="Ad title" hint="(short description – max 50 characters)">
        <input
          type="text"
          value={adTitle}
          maxLength={50}
          onChange={(e) => setAdTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
        />
      </FormRow>

      {/* Description */}
      <FormRow label="Description">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400 resize-none"
        />
        <p className="text-xs text-gray-400 mt-2 leading-relaxed">
          Tips: Give more detail about the accommodation, who you are looking for and what a potential flatmate should expect living with you. You must write at least 25 words and can write as much as you like within reason. (No contact details permitted within description).
        </p>
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

      {/* Responsibility notice */}
      <div className="bg-orange-50 border border-orange-100 rounded-md px-5 py-4 mb-8 text-sm text-gray-600 leading-relaxed">
        <p className="font-medium text-gray-700 mb-2">
          As the advertiser, it's your responsibility to:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Include council tax band (specify in your ad's description)</li>
          <li>Familiarise yourself with discrimination laws</li>
        </ul>
      </div>

      {/* Upload photos */}
      <FormRow label="Upload photos">
        <label className="w-full border border-gray-300 rounded-md h-24 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => setPhotos([...e.target.files])}
          />
          <svg className="w-7 h-7 text-gray-400 mb-1" fill="none" stroke="currentColor"
            strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          <p className="text-xs text-blue-500">Maximum file size is 24mb</p>
        </label>
        {photos.length > 0 && (
          <p className="text-xs text-gray-500 mt-2">{photos.length} file(s) selected</p>
        )}
      </FormRow>

      {/* Your Name */}
      <FormRow label="Your Name">
        <div className="flex gap-3 flex-wrap">
          <div className="flex-1 min-w-[120px]">
            <p className="text-xs text-gray-400 mb-1">First Name</p>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex-1 min-w-[120px]">
            <p className="text-xs text-gray-400 mb-1">Last Name</p>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>
      </FormRow>

      {/* Telephone */}
      <FormRow label="Telephone">
        <input
          type="tel"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
        />
      </FormRow>

      {/* Email info */}
      <FormRow label="Email">
        <p className="text-sm text-gray-500 leading-relaxed">
          As per your login details provided on the next step (NOTE We never reveal your email address – users email you through our messaging system which we then forward to your email, thus protecting your privacy)
        </p>
      </FormRow>

      {/* Back & Submit */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <button
          onClick={onBack}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-64 py-3.5 rounded-xl text-base font-semibold transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-64 py-3.5 rounded-xl text-base font-semibold transition-colors"
        >
          Submit
        </button>
      </div>

    </div>
  );
};

export default AdvertiseRoomStep5;