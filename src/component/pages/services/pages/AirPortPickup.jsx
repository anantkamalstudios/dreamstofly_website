// import React, { useState } from "react";
// import { useServiceData } from "../hooks/useServiceData";
// import ServiceHero from "../[slug]/ServiceHero";
// import PoweredBySection from "../components/PoweredBySection";
// import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
// import HowItWorks from "../components/HowItWorks";
// import Testimonials from "../Testimonials";
// import FAQAccordion from "../components/FAQAccordion";
// import ServicesPopUpForm from "../components/ServicesPopUpForm";

// const airportPickupForm = {
//   title: "Application Form",
//   icon: "/images/formicon/suit.png",
//   description: "",
//   buttonText: "Book Now",
//   fields: [
//     {
//       name: "country",
//       label: "Country",
//       type: "select",
//       options: ["USA", "UK"],
//       required: true,
//       colSpan: 2,
//     },
//     {
//       name: "provider",
//       label: "Select Provider",
//       type: "select",
//       options: ["Provider1", "Provider2"],
//       required: true,
//       colSpan: 2,
//     },
//   ],
// };

// const airportPickupPopupForm = {
//   title: "Get Airport Service",
//   icon: "/images/formicon/suit.png",
//   description:
//     "Leave us your contact details and one of our agents will get in touch with you soon.",
//   buttonText: "Submit",
//   fields: [
//     {
//       label: "First name",
//       type: "text",
//       name: "firstName",
//       required: true,
//       colSpan: 1,
//     },
//     {
//       label: "Last name",
//       type: "text",
//       name: "lastName",
//       required: true,
//       colSpan: 1,
//     },
//     {
//       label: "Email address",
//       type: "email",
//       name: "email",
//       required: true,
//       colSpan: 2,
//     },
//     {
//       label: "Phone",
//       type: "phone",
//       name: "phone",
//       required: true,
//       colSpan: 2,
//     },
//   ],
// };

// const AirPortPickup = () => {
//   const { service, serviceDetails, loading } = useServiceData();
//   const [showPopup, setShowPopup] = useState(false);
//   const [firstFormData, setFirstFormData] = useState(null);

//   const handleSubmit = (formData) => {
//     setFirstFormData(formData);
//     setShowPopup(true);
//   };

//   const handlePopupSubmit = (popupFormData) => {
//     // Combine both forms data
//     const combinedData = {
//       ...firstFormData,
//       ...popupFormData,
//     };
//     console.log("Airport pickup request submitted:", combinedData);
//     // Here you can send the data to your API
//     setShowPopup(false);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   const steps = [
//     {
//       icon: "/images/services/search.png",
//       title: "Compare prices",
//       desc: "Enter your pickup and destination locations and compare the prices offered by various transport companies.",
//     },
//     {
//       icon: "/images/services/select.png",
//       title: "Book ride",
//       desc: "Select the company and type of ride that you want. You will receive an instant confirmation.",
//     },
//     {
//       icon: "/images/services/book.png",
//       title: "Enjoy timely pickup",
//       desc: "You can communicate with your driver about any change in time and be sure that you will receive a timely pickup.",
//       extraClasses: "md:col-span-2 lg:col-span-1",
//     },
//   ];

//   const features = [
//     {
//       icon: "/images/services/airport1.png",
//       title: "3600+ transport companies",
//     },
//     {
//       icon: "/images/services/airport2.jpg",
//       title: "Available of 1600+ airports",
//     },
//     {
//       icon: "/images/services/airport3.jpg",
//       title: "Compare prices",
//     },
//     {
//       icon: "/images/services/airport4.jpg",
//       title: "Choice of ride",
//     },
//   ];

//   if (!service || !serviceDetails) return null;
//   return (
//     <div className="min-h-screen">
//       <ServiceHero
//         service={service}
//         details={serviceDetails}
//         formConfig={{
//           ...airportPickupForm,
//           onSubmit: handleSubmit,
//         }}
//       />
//       <PoweredBySection />
//       <TravelPartnersFeatures features={features} />
//       <HowItWorks steps={steps} />
//       <Testimonials />
//       <FAQAccordion />
//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//             <ServicesPopUpForm
//               onClose={() => setShowPopup(false)}
//               onSubmit={handlePopupSubmit}
//               initialData={firstFormData}
//               formConfig={airportPickupPopupForm}
//             />
//           </div>
//         </div>
//       )}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
//       )}
//     </div>
//   );
// };

// export default AirPortPickup;

import React, { useState } from "react";
import { useServiceData } from "../hooks/useServiceData";
import ServiceHero from "../[slug]/ServiceHero";
import PoweredBySection from "../components/PoweredBySection";
import TravelPartnersFeatures from "../components/TravelPartnersFeatures";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../Testimonials";
import FAQAccordion from "../components/FAQAccordion";
import ServicesPopUpForm from "../components/ServicesPopUpForm";
import axios from "axios";

const airportPickupForm = {
  title: "Application Form",
  icon: "/images/formicon/suit.png",
  description: "",
  buttonText: "Book Now",
  fields: [
    {
      name: "country",
      label: "Country",
      type: "select",
      options: ["USA", "UK"],
      required: true,
      colSpan: 2,
    },
    {
      name: "provider",
      label: "Select Provider",
      type: "select",
      options: ["Provider1", "Provider2"],
      required: true,
      colSpan: 2,
    },
  ],
};

const airportPickupPopupForm = {
  title: "Get Airport Service",
  icon: "/images/formicon/suit.png",
  description:
    "Leave us your contact details and one of our agents will get in touch with you soon.",
  buttonText: "Submit",
  fields: [
    {
      label: "First name",
      type: "text",
      name: "firstname",
      required: true,
      colSpan: 1,
    },
    {
      label: "Last name",
      type: "text",
      name: "lastname",
      required: true,
      colSpan: 1,
    },
    {
      label: "Email address",
      type: "email",
      name: "email",
      required: true,
      colSpan: 2,
    },
    {
      label: "Phone",
      type: "phone",
      name: "mobile",
      required: true,
      colSpan: 2,
    },
  ],
};

const AirPortPickup = () => {
  const { service, serviceDetails, loading } = useServiceData();
  const [showPopup, setShowPopup] = useState(false);
  const [firstFormData, setFirstFormData] = useState({});
  const [popupFormData, setPopupFormData] = useState({});

  const handleFirstFormSubmit = () => {
    console.log("first from data from airportPickup =>", firstFormData);
    setShowPopup(true);
  };

  const handlePopupSubmit = async () => {
    console.log("popup from data from airportPickup =>", popupFormData);
    const res = await axios.post(
      "https://devlopment.dreamstofly.com//ServiceLead/Leads_controller/airport_pickup_lead",
      popupFormData
    );
    console.log(res);
    alert("form submitted successfully! We'll get back to you soon.");
    setShowPopup(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const steps = [
    {
      icon: "/images/services/search.png",
      title: "Compare prices",
      desc: "Enter your pickup and destination locations and compare the prices offered by various transport companies.",
    },
    {
      icon: "/images/services/select.png",
      title: "Book ride",
      desc: "Select the company and type of ride that you want. You will receive an instant confirmation.",
    },
    {
      icon: "/images/services/book.png",
      title: "Enjoy timely pickup",
      desc: "You can communicate with your driver about any change in time and be sure that you will receive a timely pickup.",
      extraClasses: "md:col-span-2 lg:col-span-1",
    },
  ];

  const features = [
    {
      icon: "/images/services/airport1.png",
      title: "3600+ transport companies",
    },
    {
      icon: "/images/services/airport2.jpg",
      title: "Available of 1600+ airports",
    },
    {
      icon: "/images/services/airport3.jpg",
      title: "Compare prices",
    },
    {
      icon: "/images/services/airport4.jpg",
      title: "Choice of ride",
    },
  ];

  if (!service || !serviceDetails) return null;
  return (
    <div className="min-h-screen">
      <ServiceHero
        service={service}
        details={serviceDetails}
        formConfig={{
          formData: firstFormData,
          setFormData: setFirstFormData,
          onSubmit: handleFirstFormSubmit,
          ...airportPickupForm,
        }}
      />
      <PoweredBySection />
      <TravelPartnersFeatures features={features} />
      <HowItWorks steps={steps} />
      <Testimonials />
      <FAQAccordion />
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <ServicesPopUpForm
              onClose={() => setShowPopup(false)}
              onSubmit={handlePopupSubmit}
              formData={popupFormData}
              setFormData={setPopupFormData}
              formConfig={airportPickupPopupForm}
            />
          </div>
        </div>
      )}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      )}
    </div>
  );
};

export default AirPortPickup;
