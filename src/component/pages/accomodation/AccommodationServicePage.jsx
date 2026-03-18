// import { useState } from "react";
// import AccommodationServiceHeader from "./components/AccomodationServiceHeader";
// import RoomWantedStep1 from "./components/RoomWantedStep1";
// import RoomWantedStep2 from "./components/RoomWantedStep2";

// const AccommodationServicePage = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({});

//   const handleNext = (data) => {
//     setFormData((prev) => ({ ...prev, ...data }));
//     setStep(2);
//   };

//   const handleBack = () => setStep(1);

//   return (
//     <div className="bg-[#F3F3F3] min-h-screen">
//       <AccommodationServiceHeader />
//       <div className=" mx-auto px-4 py-10 flex justify-center">
//         {step === 1 ? (
//           <RoomWantedStep1 onNext={handleNext} />
//         ) : (
//           <RoomWantedStep2 onBack={handleBack} formData={formData} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default AccommodationServicePage;











import { useState } from "react";
import AccommodationServiceHeader from "./components/AccomodationServiceHeader";
import RoomWantedStep1 from "./components/RoomWantedStep1";
import RoomWantedStep2 from "./components/RoomWantedStep2";

const AccommodationServicePage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleBack = () => setStep(1);

  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <AccommodationServiceHeader />
      <div className="flex justify-center px-6 py-12">
        {step === 1 ? (
          <RoomWantedStep1 onNext={handleNext} />
        ) : (
          <RoomWantedStep2 onBack={handleBack} formData={formData} />
        )}
      </div>
    </div>
  );
};

export default AccommodationServicePage;