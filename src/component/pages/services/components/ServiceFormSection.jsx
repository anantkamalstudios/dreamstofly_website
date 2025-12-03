import { useState, Suspense } from "react";
import ServiceEnquiryForm from "../[slug]/ServiceEnquiryForm";
import FlightBookingForm from "../[slug]/FlightBookingForm";
import ModalOverlay from "./ModalOverlay";
import MoneyTransferForm from "../components/MoneyTransferForm";
import InternationalMoneyTransferForm from "../[slug]/InternationalMoneyTransferForm";

const ServiceFormSection = ({ formConfig, slug }) => {
  if (!formConfig) return null;
  return (
    <div className="w-full lg:w-auto ml-auto">
      <Suspense
        fallback={
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-pulse">
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
        }
      >
        <ServiceEnquiryForm
          formConfig={{
            ...formConfig,
            onSubmit: formConfig.onSubmit,
          }}
        />
      </Suspense>
    </div>
  );
};

export default ServiceFormSection;
