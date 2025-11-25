import React from "react";

const ScholarshipsSection = ({
  title = "Scholarships",
  subtitle = "Scholarships",
  description,
}) => {
  const defaultDescription =
    "Selecting the right scholarship can be a daunting process. With countless options available, students often find themselves overwhelmed and confused. The decision can be especially stressful for those facing financial constraints or pursuing specific academic or career goals.";

  const defaultHelpText =
    "To help students navigate this challenging process, we recommend the following articles:";

  return (
    <div className="max-w-4xl mx-auto p-2 md:p-3">
      {title && (
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      )}

      {/* Subtitle Box */}
      {subtitle && (
        <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-2 md:p-3 mb-4">
          <h3 className="text-blue-600 font-semibold text-base">{subtitle}</h3>
        </div>
      )}

      {/* Description Text */}
      {(description || defaultDescription) && (
        <p className="text-sm text-gray-700 leading-relaxed text-justify mb-4">
          {description || defaultDescription}
        </p>
      )}
    </div>
  );
};

// Example usage component
const Scholarship = () => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-50 py-8">
      <ScholarshipsSection title="Scholarships" subtitle="Scholarships" />
    </div>
  );
};

export default Scholarship;
