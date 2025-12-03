// const SGAPAToCGPACalculator = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
//         10 Point CGPA to 4 Point GPA Converter Online
//       </h1>

//       <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 max-w-4xl mx-auto">
//         Use our CGPA to GPA calculator to convert your 10-point CGPA to a
//         4-point GPA accurately
//       </p>

//       <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
//           CGPA to GPA Converter
//         </h2>

//         <div className="mb-6">
//           <label className="block text-sm font-semibold text-blue-600 mb-2">
//             CGPA
//           </label>

//           <input
//             type="number"
//             placeholder="Enter your CGPA"
//             value={cgpaValue}
//             onChange={(e) => setCgpaValue(e.target.value)}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//             step="0.01"
//             min="0"
//             max="10"
//           />

//           {cgpaError && (
//             <p className="text-red-500 text-sm mt-2">{cgpaError}</p>
//           )}
//         </div>

//         <button
//           onClick={convertCgpaToGpa}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
//         >
//           Convert
//         </button>

//         {cgpaResult && (
//           <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
//             <p className="text-sm text-gray-600 mb-1">Your GPA is:</p>
//             <p className="text-2xl font-bold text-green-600">{cgpaResult}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SGAPAToCGPACalculator;

// import React, { useState } from "react";

// const SGPAToCGPACalculator = () => {
//   const [sgpas, setSgpas] = useState([""]);
//   const [cgpa, setCgpa] = useState(null);
//   const [error, setError] = useState("");

//   const handleSgpaChange = (index, value) => {
//     const updated = [...sgpas];
//     updated[index] = value;
//     setSgpas(updated);
//   };

//   const addSemester = () => {
//     setSgpas([...sgpas, ""]);
//   };

//   const convertToCGPA = () => {
//     setError("");
//     setCgpa(null);

//     // Check if all inputs are valid
//     for (let i = 0; i < sgpas.length; i++) {
//       const value = parseFloat(sgpas[i]);

//       if (sgpas[i] === "" || isNaN(value)) {
//         setError("Please enter valid SGPA values for all semesters.");
//         return;
//       }

//       if (value < 0 || value > 10) {
//         setError("Each SGPA must be between 0 and 10.");
//         return;
//       }
//     }

//     // Convert SGPA list to numbers
//     const numericValues = sgpas.map((v) => parseFloat(v));

//     // CGPA = average of SGPAs
//     const average = (
//       numericValues.reduce((acc, val) => acc + val, 0) / numericValues.length
//     ).toFixed(2);

//     setCgpa(average);
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold text-center mb-6">
//         SGPA to CGPA Calculator
//       </h1>

//       <p className="text-center text-gray-600 mb-8">
//         Enter SGPA for each semester to calculate your CGPA.
//       </p>

//       <div className="bg-white p-6 shadow-md rounded-lg">
//         {sgpas.map((value, index) => (
//           <div key={index} className="mb-4">
//             <label className="block text-sm font-semibold text-blue-600 mb-1">
//               SGPA (Semester {index + 1})
//             </label>
//             <input
//               type="number"
//               min="0"
//               max="10"
//               step="0.01"
//               value={value}
//               onChange={(e) => handleSgpaChange(index, e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>
//         ))}

//         <button
//           onClick={addSemester}
//           className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg transition mb-4"
//         >
//           + Add Semester
//         </button>

//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//         <button
//           onClick={convertToCGPA}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
//         >
//           Calculate CGPA
//         </button>

//         {cgpa && (
//           <div className="mt-5 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
//             <p className="text-sm text-gray-600">Your CGPA is:</p>
//             <p className="text-2xl font-bold text-green-600">{cgpa}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SGPAToCGPACalculator;

import React, { useState } from "react";

const SGPAtoCGPAForm = () => {
  const [totalSGPA, setTotalSGPA] = useState("");
  const [totalSemesters, setTotalSemesters] = useState("");
  const [cgpa, setCgpa] = useState(null);
  const [errors, setErrors] = useState({ sgpa: "", semesters: "" });

  const handleConvert = () => {
    let hasError = false;
    const newErrors = { sgpa: "", semesters: "" };

    const sgpaValue = parseFloat(totalSGPA);
    const semestersValue = parseInt(totalSemesters);

    // Validate total SGPA
    if (isNaN(sgpaValue) || sgpaValue <= 0 || sgpaValue > 100) {
      newErrors.sgpa = "Please enter a valid number between 0 - 100";
      hasError = true;
    }

    // Validate total semesters
    if (isNaN(semestersValue) || semestersValue <= 0 || semestersValue > 10) {
      newErrors.semesters = "Please enter a valid number between 0 - 10";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      const calculatedCGPA = (sgpaValue / semestersValue).toFixed(2);
      setCgpa(calculatedCGPA);
    } else {
      setCgpa(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
        SGPA to CGPA Conversion Calculator Online
      </h1>

      <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 max-w-4xl mx-auto">
        Instantly convert your SGPA to CGPA with this easy-to-use calculator
      </p>
      <div className="max-w-md mx-auto px-4 py-10 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">SGPA to CGPA</h1>
        <div className="mb-4">
          <label className="block text-blue-600 font-semibold mb-2">
            Total SGPA
          </label>
          <input
            type="number"
            placeholder="Sum of all SGPAs"
            value={totalSGPA}
            onChange={(e) => setTotalSGPA(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.sgpa && (
            <p className="text-red-500 text-sm mt-1">{errors.sgpa}</p>
          )}
        </div>

        {/* Total Semesters */}
        <div className="mb-6">
          <label className="block text-blue-600 font-semibold mb-2">
            Total Semesters
          </label>
          <input
            type="number"
            placeholder="Enter total number of semesters"
            value={totalSemesters}
            onChange={(e) => setTotalSemesters(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.semesters && (
            <p className="text-red-500 text-sm mt-1">{errors.semesters}</p>
          )}
        </div>

        <button
          onClick={handleConvert}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Convert
        </button>

        {cgpa && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
            <p className="text-sm text-gray-600">Your CGPA is:</p>
            <p className="text-2xl font-bold text-green-600">{cgpa}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SGPAtoCGPAForm;
