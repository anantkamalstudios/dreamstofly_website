import React from "react";

const CgpaToGpa = ({
  inputValue,
  setInputValue,
  inputError,
  resultValue,
  onConvertForward,
  content,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        {content.title}
      </h2>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-blue-600 mb-2">
          {content.label}
        </label>

        <input
          type="number"
          placeholder="Enter your CGPA"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          step="0.01"
          min="0"
          max="10"
        />

        {inputError && (
          <p className="text-red-500 text-sm mt-2">{inputError}</p>
        )}
      </div>

      <button
        onClick={onConvertForward}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
      >
        Convert
      </button>

      {resultValue && (
        <div className="mt-2 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Your GPA is:</p>
          <p className="text-2xl font-bold text-blue-600">{resultValue}</p>
        </div>
      )}
    </div>
  );
};

export default CgpaToGpa;
