import { useState } from "react";

const RoomWantedStep1 = ({ onNext }) => {
  const [whoSearching, setWhoSearching] = useState("Just me");
  const [gender, setGender] = useState("2 males");
  const [buddyUp, setBuddyUp] = useState(true);

  const whoOptions = ["Just me", "Me and a partner", "Me and a friend"];
  const genderOptions = ["2 males", "2 females", "1 male 1 female", "Others"];

  return (
    <div className="bg-white w-full max-w-3xl px-5 sm:px-8 md:px-14 py-8 md:py-12 shadow-md">

      {/* Title */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 inline-block">
          Post a room wanted ad
        </h2>
        <div className="h-0.5 bg-blue-500 mt-2 mx-auto w-48 md:w-72" />
      </div>

      {/* Step indicator */}
      <p className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-5">
        Step 1 of 2
      </p>

      {/* Blue info bar */}
      <div className="bg-blue-50 border border-blue-300 px-4 md:px-5 py-3 md:py-4 text-blue-600 text-sm mb-8 md:mb-10">
        Get started with your room wanted ad
      </div>

      {/* Who's searching */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-6 md:mb-7">
        <label className="text-teal-700 font-semibold text-sm md:text-base sm:w-40 flex-shrink-0">
          Who's searching?
        </label>
        <div className="flex flex-wrap gap-3 md:gap-5">
          {whoOptions.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 cursor-pointer text-sm text-gray-700"
            >
              <input
                type="radio"
                name="whoSearching"
                value={opt}
                checked={whoSearching === opt}
                onChange={() => setWhoSearching(opt)}
                className="accent-blue-600 w-4 h-4"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      {/* Gender */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-6 md:mb-7">
        <label className="text-teal-700 font-semibold text-sm md:text-base sm:w-40 flex-shrink-0">
          Your gender(s)
        </label>
        <div className="flex flex-wrap gap-3 md:gap-5">
          {genderOptions.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 cursor-pointer text-sm text-gray-700"
            >
              <input
                type="radio"
                name="gender"
                value={opt}
                checked={gender === opt}
                onChange={() => setGender(opt)}
                className="accent-blue-600 w-4 h-4"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      {/* Buddy ups */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 mb-10 md:mb-12">
        <label className="text-teal-700 font-semibold text-sm md:text-base sm:w-40 flex-shrink-0 sm:pt-0.5">
          Buddy ups
        </label>
        <div>
          <label className="flex items-start gap-2 cursor-pointer text-sm text-gray-800 mb-2 md:mb-3">
            <input
              type="checkbox"
              checked={buddyUp}
              onChange={() => setBuddyUp(!buddyUp)}
              className="accent-blue-600 w-4 h-4 rounded mt-0.5 flex-shrink-0"
            />
            I/we are also interested in Buddying up
          </label>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
            Tick this if you might like to Buddy Up with other room seekers to
            find a whole flat or house together and start a brand new flat/house share.
          </p>
        </div>
      </div>

      {/* Next button */}
      <div className="flex justify-center">
        <button
          onClick={() => onNext({ whoSearching, gender, buddyUp })}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto sm:px-28 py-3 md:py-3.5 rounded-full text-base font-semibold transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RoomWantedStep1;