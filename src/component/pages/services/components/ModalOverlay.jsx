import { createPortal } from "react-dom";

const ModalOverlay = ({ children, onClose }) => {
  if (typeof window === "undefined") return null;
  
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-300"
        style={{ backdropFilter: "blur(2px)" }}
        onClick={onClose}
      ></div>
      
      {/* Modal content */}
      <div 
        className="relative z-10 w-full max-w-2xl"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalOverlay;
