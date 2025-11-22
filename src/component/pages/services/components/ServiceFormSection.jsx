import { Suspense, useState } from "react";
import { createPortal } from "react-dom";
import ServiceEnquiryForm from "../[slug]/ServiceEnquiryForm";
import FlightBookingForm from "../[slug]/FlightBookingForm";

const ServiceFormSection = ({ formConfig, slug }) => {
  const [showModal, setShowModal] = useState(false);

  if (!formConfig) return null;

  if (slug === "student-flight-ticket") {
    return (
      <>
        {showModal &&
          typeof window !== "undefined" &&
          createPortal(
            <div
              className="fixed inset-0 bg-black bg-opacity-60 z-[9999] transition-opacity duration-300"
              onClick={() => setShowModal(false)}
              style={{ backdropFilter: "blur(2px)" }}
            ></div>,
            document.body
          )}
        <div className="absolute left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <FlightBookingForm
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
      </>
    );
  }

  return (
    <div className="absolute right-10 top-40 z-20">
      <div className="w-full max-w-md lg:max-w-lg">
        <Suspense
          fallback={
            <div className="bg-white rounded-2xl shadow-2xl p-8 animate-pulse">
              <div className="h-96 bg-gray-200 rounded"></div>
            </div>
          }
        >
          <ServiceEnquiryForm formConfig={formConfig} />
        </Suspense>
      </div>
    </div>
  );
};

export default ServiceFormSection;
