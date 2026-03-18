// import { useState } from "react";
// import AccomodationAdvertiseRoomHeader from "./components/AccomodationAdvertiseRoomHeader";
// import AdvertiseRoomStep1 from "./components/AdvertiseRoomStep1";
// import AdvertiseRoomStep2 from "./components/AdvertiseRoomStep2";
// import AdvertiseRoomStep3 from "./components/AdvertiseRoomStep3";
// import AdvertiseRoomStep4 from "./components/AdvertiseRoomStep4";
// import AdvertiseRoomStep5 from "./components/AdvertiseRoomStep5";

// const GotARoomPage = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({});

//   const handleNext = (data) => {
//     setFormData((prev) => ({ ...prev, ...data }));
//     setStep(2);
//   };

//   const handleBack = () => setStep(1);

//   return (
//     <div className="bg-[#F3F3F3] min-h-screen">
//       <AccomodationAdvertiseRoomHeader />
//       <div className="flex justify-center px-6 py-12">
//         {step === 1 ? (
//             <AdvertiseRoomStep1 onNext={handleNext} />
//             ) : (   
//             <AdvertiseRoomStep2 onBack={handleBack} formData={formData} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default GotARoomPage;


import { useState } from "react";
import AccomodationAdvertiseRoomHeader from "./components/AccomodationAdvertiseRoomHeader";
import AdvertiseStep1 from "./components/AdvertiseStep1";
import AdvertiseStep2 from "./components/AdvertiseStep2";
import AdvertiseStep3 from "./components/AdvertiseStep3";
import AdvertiseStep4 from "./components/AdvertiseStep4";
import AdvertiseStep5 from "./components/AdvertiseStep5";

const GotARoomPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const steps = {
    1: <AdvertiseStep1 onNext={handleNext} />,
    2: <AdvertiseStep2 onNext={handleNext} onBack={handleBack} formData={formData} />,
    3: <AdvertiseStep3 onNext={handleNext} onBack={handleBack} formData={formData} />,
    4: <AdvertiseStep4 onNext={handleNext} onBack={handleBack} formData={formData} />,
    5: <AdvertiseStep5 onNext={handleNext} onBack={handleBack} formData={formData} />,
  };

  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <AccomodationAdvertiseRoomHeader />
      <div className="flex justify-center px-6 py-12">
        {steps[step]}
      </div>
    </div>
  );
};

export default GotARoomPage;