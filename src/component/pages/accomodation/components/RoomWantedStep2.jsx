import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const amenitiesList = [
  { label: "Furnished",           key: "furnished" },
  { label: "Parking",             key: "parking" },
  { label: "Shared living room",  key: "living_room" },
  { label: "Garage",              key: "garage" },
  { label: "Washing machine",     key: "washing_machine" },
  { label: "Disabled access",     key: "disabled_access" },
  { label: "Garden/patio",        key: "garden" },
  { label: "Broadband / Wi-Fi",   key: "wifi" },
  { label: "Balcony/roof terrace",key: "balcony" },
  { label: "En-suite",            key: "ensuite" },
];

const durationOptions = ["No Minimum", "1 month", "2 months", "3 months", "6 months", "12 months"];
const stayOptions     = ["7 days a week", "5 days a week", "Weekends only", "Flexible"];
const ageOptions      = Array.from({ length: 83 }, (_, i) => i + 18);
const occupationOptions     = ["Not Disclosed", "student", "working", "self-employed", "retired"];
const smokeOptions          = ["no", "yes", "outside only"];
const petsOptions           = ["no", "yes"];
const orientationOptions    = ["Undisclosed", "Straight", "Gay", "Bisexual", "Other"];
const languageOptions       = ["English", "French", "Spanish", "German", "Hindi", "Other"];
const genderPrefOptions     = ["Female", "Male", "Any"];
const occupationPrefOptions = ["Don't Mind", "student", "professional", "working"];
const smokingPrefOptions    = ["Don't Mind", "No Smokers", "Smokers OK"];
const petsPrefOptions       = ["Don't Mind", "No Pets", "Pets OK"];
const orientationPrefOptions= ["Not Important", "Straight only", "Gay only"];
const roomSizeOptions       = ["single", "double", "ensuite", "studio"];
const countryOptions        = ["India", "UK", "USA", "Australia", "Canada", "Germany", "France"];
const nationalityOptions    = ["Indian", "British", "American", "Australian", "Canadian", "Irish", "Other"];

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
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span>
  </div>
);


const RoomWantedStep2 = ({ onBack, step1Data = {} }) => {
  const navigate = useNavigate();

  const [country,     setCountry]     = useState("India");
  const [pincode,     setPincode]     = useState("");
  const [roomSize,    setRoomSize]    = useState("single");
  const [budget,      setBudget]      = useState("");
  const [budgetType,  setBudgetType]  = useState("monthly");
  const [moveDay,     setMoveDay]     = useState("");
  const [moveMonth,   setMoveMonth]   = useState("");
  const [moveYear,    setMoveYear]    = useState("");
  const [periodFrom,  setPeriodFrom]  = useState("No Minimum");
  const [periodTo,    setPeriodTo]    = useState("No Maximum");
  const [stayDays,    setStayDays]    = useState("7 days a week");
  const [amenities,   setAmenities]   = useState({});   

  const [age,               setAge]               = useState("");
  const [occupation,        setOccupation]        = useState("Not Disclosed");
  const [smoke,             setSmoke]             = useState("no");
  const [pets,              setPets]              = useState("no");
  const [orientation,       setOrientation]       = useState("Undisclosed");
  const [orientationSearch, setOrientationSearch] = useState(true);
  const [language,          setLanguage]          = useState("English");
  const [nationality,       setNationality]       = useState("");
  const [interests,         setInterests]         = useState("");   // comma-separated
  const [firstName,         setFirstName]         = useState("");
  const [lastName,          setLastName]          = useState("");
  const [email,             setEmail]             = useState("");

  /* Preferred flatmate */
  const [prefGender,      setPrefGender]      = useState("Female");
  const [prefAgeFrom,     setPrefAgeFrom]     = useState("");
  const [prefAgeTo,       setPrefAgeTo]       = useState("");
  const [prefOccupation,  setPrefOccupation]  = useState("Don't Mind");
  const [prefSmoking,     setPrefSmoking]     = useState("Don't Mind");
  const [prefPets,        setPrefPets]        = useState("Don't Mind");
  const [prefOrientation, setPrefOrientation] = useState("Not Important");

  /* Ad details */
  const [adTitle,          setAdTitle]          = useState("");
  const [description,      setDescription]      = useState("");
  const [buddyDescription, setBuddyDescription] = useState("");
  const [telephone,        setTelephone]        = useState("");
  const [photos,           setPhotos]           = useState([]);

  /* UI state */
  const [loading,  setLoading]  = useState(false);
  const [apiError, setApiError] = useState("");
  const [success, setSuccess]   = useState(false);

  /* Helpers */
  const toggleAmenity = (key) =>
    setAmenities((prev) => ({ ...prev, [key]: !prev[key] }));

  const buildAvailableFrom = () => {
    if (!moveYear || !moveMonth || !moveDay) return "";
    const monthIndex = ["Jan","Feb","Mar","Apr","May","Jun",
                        "Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(moveMonth) + 1;
    return `${moveYear}-${String(monthIndex).padStart(2,"0")}-${String(moveDay).padStart(2,"0")}`;
  };

  /* ── Submit ── */
  const handleSubmit = async () => {
    setApiError("");

    // Basic required-field validation
    if (!pincode || !budget || !firstName || !lastName || !email || !telephone) {
      setApiError("Please fill in all required fields (pincode, budget, name, email, phone).");
      return;
    }

    const token = localStorage.getItem("token") || sessionStorage.getItem("token") || "";

    const fd = new FormData();

    // ── Step 1 data ──
    fd.append("searching_for", step1Data.searching_for || "single room");
    fd.append("gender",        step1Data.gender        || "male");
    fd.append("buddy_up",      step1Data.buddy_up      || "0");

    // ── Step 2 data ──
    fd.append("room_size",      roomSize);
    fd.append("country",        country);
    fd.append("pincode",        pincode);
    fd.append("budget",         budget);
    fd.append("budget_type",    budgetType);
    fd.append("available_from", buildAvailableFrom());

    // Amenities — bracket notation
    amenitiesList.forEach(({ key }) => {
      fd.append(`amenities[${key}]`, amenities[key] ? "1" : "0");
    });

    fd.append("age",         age);
    fd.append("occupation",  occupation === "Not Disclosed" ? "" : occupation);
    fd.append("smoking",     smoke);
    fd.append("pets",        pets);
    fd.append("nationality", nationality);

    // Interests — split by comma, send as interests[0], interests[1], ...
    const interestArr = interests.split(",").map((i) => i.trim()).filter(Boolean);
    interestArr.forEach((val, idx) => fd.append(`interests[${idx}]`, val));

    fd.append("first_name",         firstName);
    fd.append("last_name",          lastName);
    fd.append("title",              adTitle);
    fd.append("description",        description);
    fd.append("buddy_description",  buddyDescription);
    fd.append("phone",              telephone);

    // Photos — append each file
    photos.forEach((file) => fd.append("photos[]", file));

    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/Accommodation/RoomWanted/create`,
        {
          method: "POST",
          headers: {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            // Do NOT set Content-Type — browser sets it automatically with boundary for FormData
          },
          body: fd,
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        setApiError(data?.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      setApiError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const days   = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const years  = Array.from({ length: 10 }, (_, i) => String(new Date().getFullYear() + i));

  if (success) {
    return (
      <div className="bg-white w-full max-w-3xl px-5 sm:px-8 md:px-14 py-16 md:py-24 shadow-md flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ad Created!</h2>
          <p className="text-gray-600 mb-8">Your room wanted ad has been successfully published to our network.</p>
          <button
            onClick={() => navigate("/services/accommodation")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

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

      {/* Country */}
      <FormRow label="Country">
        <SelectField value={country} onChange={setCountry} options={countryOptions} className="w-48" />
      </FormRow>

      {/* Pincode */}
      <FormRow label="Pincode / Area code *">
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          placeholder="eg: 411001"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
        />
      </FormRow>

      {/* Room Size */}
      <FormRow label="Room size">
        <SelectField value={roomSize} onChange={setRoomSize} options={roomSizeOptions} className="w-48" />
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
          {[{ label: "per calendar month", value: "monthly" }, { label: "per week", value: "weekly" }].map((opt) => (
            <label key={opt.value} className="flex items-center gap-1.5 text-sm text-gray-700 cursor-pointer">
              <input type="radio" name="budgetType" value={opt.value} checked={budgetType === opt.value}
                onChange={() => setBudgetType(opt.value)} className="accent-blue-600 w-4 h-4" />
              {opt.label}
            </label>
          ))}
        </div>
      </FormRow>

      {/* Move in date → available_from */}
      <FormRow label="Available to move in from">
        <div className="flex gap-2 flex-wrap">
          {[
            { val: moveDay,   set: setMoveDay,   ph: "Day",   opts: days },
            { val: moveMonth, set: setMoveMonth, ph: "Month", opts: months },
            { val: moveYear,  set: setMoveYear,  ph: "Year",  opts: years },
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

      {/* Amenities → amenities[key] */}
      <FormRow label="We would prefer these amenities">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {amenitiesList.map(({ label, key }) => (
            <label key={key} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" checked={!!amenities[key]}
                onChange={() => toggleAmenity(key)} className="accent-blue-600 w-4 h-4 rounded" />
              {label}
            </label>
          ))}
        </div>
      </FormRow>

      {/* ── ABOUT YOURSELVES ── */}
      <SectionBar label="About yourselves" />

      {/* Age → age */}
      <FormRow label="Your age *">
        <SelectField value={age} onChange={setAge}
          options={ageOptions.map(String)} placeholder="Select age" className="w-28" />
      </FormRow>

      {/* Occupation → occupation */}
      <FormRow label="Occupation">
        <SelectField value={occupation} onChange={setOccupation} options={occupationOptions} className="w-48" />
      </FormRow>

      {/* Smoking → smoking */}
      <FormRow label="Do any of you smoke?">
        <SelectField value={smoke} onChange={setSmoke} options={smokeOptions} className="w-48" />
      </FormRow>

      {/* Pets → pets */}
      <FormRow label="Do you have any pets?">
        <SelectField value={pets} onChange={setPets} options={petsOptions} className="w-48" />
      </FormRow>

      {/* Orientation (display only, not in API spec) */}
      <FormRow label="Your sexual orientation">
        <SelectField value={orientation} onChange={setOrientation} options={orientationOptions} className="w-48" />
        <label className="flex items-start gap-2 mt-3 text-sm text-blue-600 cursor-pointer">
          <input type="checkbox" checked={orientationSearch} onChange={() => setOrientationSearch(!orientationSearch)}
            className="accent-blue-600 w-4 h-4 rounded mt-0.5 flex-shrink-0" />
          Yes, I would like my orientation to form part of my ad's search criteria.
        </label>
      </FormRow>

      {/* Language (display only) */}
      <FormRow label="Your preferred language">
        <SelectField value={language} onChange={setLanguage} options={languageOptions} className="w-48" />
      </FormRow>

      {/* Nationality → nationality */}
      <FormRow label="Your nationality">
        <SelectField value={nationality} onChange={setNationality}
          options={nationalityOptions} placeholder="Select nationality" className="w-48" />
      </FormRow>

      {/* Interests → interests[0], interests[1], ... */}
      <FormRow label="Your interests" hint="(comma-separated, e.g. reading, cooking)">
        <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)}
          placeholder="reading, cooking, hiking"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
      </FormRow>

      {/* Name → first_name, last_name */}
      <FormRow label="Your Name *">
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

      {/* Email (display — not in API spec but useful for UX) */}
      <FormRow label="Email address *">
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

      {/* ── AD DETAILS ── */}
      <SectionBar label="Ad details (optional)" />

      {/* Title → title */}
      <FormRow label="Ad title" hint="(Short description)">
        <input type="text" value={adTitle} onChange={(e) => setAdTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
      </FormRow>

      {/* Description → description */}
      <FormRow label="Description">
        <p className="text-xs text-gray-400 mb-1">(No contact details permitted within description)</p>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={5}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400 resize-none" />
        <p className="text-xs text-gray-400 mt-2 leading-relaxed">
          Include details about the accommodation you are looking for and what a potential flatmate should expect.
        </p>
      </FormRow>

      {/* Buddy description → buddy_description */}
      <FormRow label="Buddy description">
        <textarea value={buddyDescription} onChange={(e) => setBuddyDescription(e.target.value)} rows={3}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400 resize-none"
          placeholder="Tell others what you're looking for in a buddy..." />
      </FormRow>

      {/* Photos → photos[] */}
      <FormRow label="Upload photos">
        <label className="w-full border border-dashed border-gray-300 rounded-md h-24 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
          <input type="file" multiple accept="image/*" className="hidden"
            onChange={(e) => setPhotos(Array.from(e.target.files))} />
          <svg className="w-7 h-7 text-gray-400 mb-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          <p className="text-xs text-gray-400">
            {photos.length > 0 ? `${photos.length} file(s) selected` : "Click to upload — max 24mb per file"}
          </p>
        </label>
      </FormRow>

      {/* Telephone → phone */}
      <FormRow label="Telephone *">
        <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)}
          placeholder="eg: 9876543210"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
        <p className="text-xs text-gray-400 mt-2 leading-relaxed">
          We won't display your number publicly. It's used only to verify your account if needed.
        </p>
      </FormRow>

      {/* API Error */}
      {apiError && (
        <div className="mb-6 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-3">
          {apiError}
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <button
          onClick={onBack}
          disabled={loading}
          className="border border-gray-300 text-gray-700 w-full sm:w-auto px-10 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white w-full sm:w-auto px-10 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Posting...
            </>
          ) : (
            "Post Ad"
          )}
        </button>
      </div>
    </div>
  );
};

export default RoomWantedStep2;