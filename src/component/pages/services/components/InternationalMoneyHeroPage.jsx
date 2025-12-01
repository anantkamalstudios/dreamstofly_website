import React, { useState } from "react";
import { Briefcase, ChevronDown, X } from "lucide-react";
import InternationalMoneyTransferForm from "../[slug]/InternationalMoneyTransferForm";

const InternationalMoneyHeroPage = ({ service = {}, details = {} }) => {
  const [recipientAmount, setRecipientAmount] = useState("500");
  const [senderAmount, setSenderAmount] = useState("32140.32");
  const [recipientCurrency, setRecipientCurrency] = useState("CAD");
  const [senderCurrency, setSenderCurrency] = useState("INR");
  const exchangeRate = 64.2806;
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [modalFormData, setModalFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    coverageType: "",
    existingConditions: "",
    additionalInfo: "",
  });

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "India",
    "UAE",
    "Singapore",
    "Other",
  ];

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
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: `url(${
            service.backgroundImage ||
            "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=800&fit=crop"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="container mx-auto px-6 md:px-14 py-8 lg:py-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Hero Content */}
            <div className="flex-1 space-y-6 lg:space-y-8 max-w-3xl font-bellefair">
              <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl">{details.title}</h1>

              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white">
                {details.subtitle}
              </p>
            </div>

            {/* Form Card */}
            <div className="w-full lg:w-auto lg:flex-shrink-0 ml-auto font-vollkorn">
              <div className="bg-white rounded-2xl shadow-2xl px-8 py-4 max-w-2xl">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-gray-600" />
                  </div>
                </div>

                {/* Form Title */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  International Money Transfer
                </h2>

                {/* Form */}
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
                        {recipientCurrency}
                      </span>
                      <span className="text-2xl">
                        {recipientCurrency === "CAD" ? "🇨🇦" : "🇮🇳"}
                      </span>
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
                        {senderCurrency}
                      </span>
                      <span className="text-2xl">
                        {senderCurrency === "INR" ? "🇮🇳" : "🇨🇦"}
                      </span>
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    1 CAD = {exchangeRate} INR (Including all fees)
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <InternationalMoneyTransferForm
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default InternationalMoneyHeroPage;
