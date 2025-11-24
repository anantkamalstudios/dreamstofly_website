import { Suspense, useState } from "react";
import { createPortal } from "react-dom";
import ServiceEnquiryForm from "../[slug]/ServiceEnquiryForm";
import FlightBookingForm from "../[slug]/FlightBookingForm";
import InternationalMoneyTransferForm from "../[slug]/InternationalMoneyTransferForm";
import { ChevronDown, Info } from "lucide-react";

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

  if (slug === "money-transfer") {
    const [recipientAmount, setRecipientAmount] = useState("500");
    const [senderAmount, setSenderAmount] = useState("32140.32");
    const [recipientCurrency, setRecipientCurrency] = useState("CAD");
    const [senderCurrency, setSenderCurrency] = useState("INR");

    const exchangeRate = 64.2806;

    const handleRecipientChange = (e) => {
      const value = e.target.value;
      setRecipientAmount(value);
      if (value) {
        setSenderAmount((parseFloat(value) * exchangeRate).toFixed(2));
      }
    };

    const handleSenderChange = (e) => {
      const value = e.target.value;
      setSenderAmount(value);
      if (value) {
        setRecipientAmount((parseFloat(value) / exchangeRate).toFixed(2));
      }
    };
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
        <div className="absolute right-10 top-40 z-20">
          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-xl shadow-lg w-full px-8 py-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                International Money transfer
              </h1>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recipient gets
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={recipientAmount}
                    onChange={handleRecipientChange}
                    className="w-full px-4 py-3 pr-32 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-white">
                    <span className="text-lg font-medium text-gray-700">
                      CAD
                    </span>
                    <span className="text-2xl">🇨🇦</span>
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  You send
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={senderAmount}
                    onChange={handleSenderChange}
                    className="w-full px-4 py-3 pr-32 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-white">
                    <span className="text-lg font-medium text-gray-700">
                      INR
                    </span>
                    <span className="text-2xl">🇮🇳</span>
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">
                  FX: 1 CAD = {exchangeRate} INR
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">Fee applied</span>
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center cursor-pointer">
                    <Info className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Get notified on FX rates
                </a>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-base"
              >
                Send Now
              </button>
            </div>
          </div>

          <InternationalMoneyTransferForm
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
