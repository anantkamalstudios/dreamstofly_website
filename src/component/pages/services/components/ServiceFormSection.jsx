import { useState, Suspense } from "react";
import ServiceEnquiryForm from "../[slug]/ServiceEnquiryForm";
import FlightBookingForm from "../[slug]/FlightBookingForm";
import InternationalMoneyTransferForm from "../[slug]/InternationalMoneyTransferForm";
import ModalOverlay from "./ModalOverlay";
import MoneyTransferForm from "./MoneyTransferForm";

const ServiceFormSection = ({ formConfig, slug }) => {
  const [showModal, setShowModal] = useState(false);

  if (!formConfig) return null;

  if (slug === "student-flight-ticket") {
    return (
      <>
        {showModal && <ModalOverlay onClose={() => setShowModal(false)} />}
        <div className="absolute left-1/2 top-3/4 xl:-bottom-[200px] transform -translate-x-1/2 -translate-y-1/2 z-20">
          <FlightBookingForm
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
      </>
    );
  }

  if (slug === "money-transfer") {
    return (
      <>
        <InternationalMoneyTransferForm
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <MoneyTransferForm setShowModal={setShowModal} />
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
