import { useState } from "react";
import { ChevronDown } from "lucide-react";

const MoneyTransferForm = ({ setShowModal }) => {
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
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
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
                  {recipientCurrency}
                </span>
                <span className="text-2xl">
                  {recipientCurrency === 'CAD' ? '🇨🇦' : '🇮🇳'}
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
                  {senderCurrency === 'INR' ? '🇮🇳' : '🇨🇦'}
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
  );
};

export default MoneyTransferForm;
