import { useState } from "react";

const ProgrammeOverview = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 lg:p-8 bg-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
        Programme overview
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
          <h3 className="text-sm md:text-base text-gray-600 mb-2">
            Main Subject
          </h3>
          <p className="text-blue-500 font-medium text-base md:text-lg">
            Health/Healthcare
          </p>
        </div>

        <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
          <h3 className="text-sm md:text-base text-gray-600 mb-2">Degree</h3>
          <p className="text-blue-500 font-medium text-base md:text-lg">
            Other
          </p>
        </div>

        <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
          <h3 className="text-sm md:text-base text-gray-600 mb-2">
            Study Level
          </h3>
          <p className="text-blue-500 font-medium text-base md:text-lg">
            Masters
          </p>
        </div>

        <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
          <h3 className="text-sm md:text-base text-gray-600 mb-2">
            Study Mode
          </h3>
          <p className="text-blue-500 font-medium text-base md:text-lg">
            Blended
          </p>
        </div>
      </div>

      <div className=" pl-4 md:pl-6 mb-6">
        {isExpanded && (
          <>
            <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
              The PGCert in Clinical Education is a collaborative,
              multi-professional programme, designed for experienced Clinicians
              working in a wide range of healthcare settings. Whether you are a
              Doctor, Dentist, Nurse, Vet or Allied Health Professional, this
              programme provides an opportunity to develop your skills in
              teaching, supervision and assessment while deepening your
              understanding of how individuals learn in clinical environments.
            </p>

            <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
              A key feature of this programme is the strong emphasis on
              developing yourself as an educator, not just acquiring practical
              teaching tools but critically reflecting on your role in
              supporting the next generation of healthcare professionals. You
              will also become part of a vibrant interdisciplinary network of
              experienced clinicians and educators, fostering collaboration and
              shared learning across clinical boundaries. Through interactions
              with expert academics and experienced peers, you'll build lasting
              professional connections that support innovation and leadership in
              clinical education within your workplace and beyond.
            </p>

            <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
              This programme is delivered in a hybrid format, combining
              face-to-face activity with online delivery, designed to be
              practice-relevant and providing flexibility for those working
              professionally alongside their studies. Students completing this
              course will also be eligible to apply for Fellowship of the Higher
              Education Academy, and will receive guidance from us on making an
              application.
            </p>
          </>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:text-blue-700 text-sm md:text-base font-medium transition-colors"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  );
};

export default ProgrammeOverview;
