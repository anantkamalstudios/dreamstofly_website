import { createPortal } from "react-dom";
import { X } from "lucide-react";
import ServiceEnquiryForm from "../[slug]/ServiceEnquiryForm";

const modalRoot = typeof document !== "undefined" ? document.body : undefined;

const ServicePopupForm = ({ show, onClose, formConfig }) => {
  if (!show || !modalRoot) return null;

  const handleSuccess = (data) => {
    if (typeof onClose === "function") {
      onClose(data);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition z-10"
          aria-label="Close form"
        >
          <X className="w-6 h-6" />
        </button>
        <ServiceEnquiryForm
          formConfig={formConfig}
          onSuccess={handleSuccess}
          containerClassName="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 w-full max-w-lg mx-auto"
          onCancel={onClose}
          renderFooter={({ isSubmitting, buttonLabel }) => (
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-[#0d8aff] hover:bg-[#0073df] text-white rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : buttonLabel}
              </button>
            </div>
          )}
        />
      </div>
    </div>,
    modalRoot
  );
};
// not used anywhere
export default ServicePopupForm;
