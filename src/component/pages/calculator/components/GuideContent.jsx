import React from "react";

const GuideContent = () => {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        How to Convert CGPA to GPA?
      </h1>

      <p className="text-gray-700 mb-4">
        To convert a 10 Point CGPA to a 4 Point GPA, divide your CGPA by 10 and
        multiply the result by 4.
      </p>

      <p className="text-gray-700 mb-6">
        This converts your CGPA scores (common in Indian universities) into a
        4-point GPA system widely used in American and European institutions.
      </p>

      <p className="text-gray-700 mb-6">Here’s a step-by-step explanation:</p>

      <div className="space-y-6">
        {/* Step 1 */}
        <div>
          <div className="flex items-start mb-3">
            <div className="w-5 h-5 bg-blue-600 rounded mr-3 mt-1 flex-shrink-0" />
            <h3 className="text-lg font-semibold text-gray-900">
              Step 1: Check your CGPA
            </h3>
          </div>

          <div className="ml-8">
            <p className="font-semibold text-gray-900 mb-2">
              Your CGPA is usually mentioned clearly on your marksheet or
              transcript.
            </p>

            <p className="text-gray-700 mb-3">
              If your university uses a percentage system, convert percentage to
              CGPA using:
            </p>

            <span className="font-mono bg-gray-100 px-2 py-1 rounded inline-block mb-3">
              CGPA = Percentage ÷ 9.5
            </span>

            <p className="ml-4 text-sm mb-2">Example: 76% ÷ 9.5 = 8.0 CGPA</p>

            <p className="text-gray-700">
              If your university uses a different CGPA scale (like 7 or 9),
              convert it to the 10-point scale:
            </p>

            <ul className="space-y-2 text-gray-700 mt-2 ml-4">
              <li>• For a 9-point scale → multiply by 1.1</li>
              <li>• For a 7-point scale → multiply by 1.43</li>
              <li className="text-sm">
                Example: 7.5 CGPA on a 9-point scale → 7.5 × 1.1 = 8.25
                (10-point scale)
              </li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div>
          <div className="flex items-start mb-3">
            <div className="w-5 h-5 bg-blue-600 rounded mr-3 mt-1 flex-shrink-0" />
            <h3 className="text-lg font-semibold text-gray-900">
              Step 2: Apply the formula
            </h3>
          </div>

          <div className="ml-8">
            <p className="text-gray-700 mb-3">The standard formula is:</p>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-mono text-lg font-semibold text-gray-900">
                GPA = (CGPA ÷ 10) × 4
              </p>
            </div>

            <p className="text-gray-700 mb-2">Example: CGPA = 8.2</p>

            <ul className="space-y-1 text-gray-700 ml-4">
              <li>• 8.2 ÷ 10 = 0.82</li>
              <li>• 0.82 × 4 = 3.28</li>
            </ul>

            <p className="text-gray-700 mt-3">
              So an Indian CGPA of 8.2 converts to a US GPA of 3.28.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideContent;
