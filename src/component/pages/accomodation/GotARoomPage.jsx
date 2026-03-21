// import { useState } from "react";
// import AccomodationAdvertiseRoomHeader from "./components/AccomodationAdvertiseRoomHeader";
// import AdvertiseStep1 from "./components/AdvertiseStep1";
// import AdvertiseStep2 from "./components/AdvertiseStep2";
// import AdvertiseStep3 from "./components/AdvertiseStep3";
// import AdvertiseStep4 from "./components/AdvertiseStep4";
// import AdvertiseStep5 from "./components/AdvertiseStep5";

// const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// const GotARoomPage = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleNext = (data) => {
//     setFormData((prev) => ({ ...prev, ...data }));
//     setStep((prev) => prev + 1);
//   };

//   const handleBack = () => setStep((prev) => prev - 1);

//   const handleSubmitFinal = async (step5Data) => {
//     setLoading(true);
//     setError("");

//     try {
//       const finalData = { ...formData, ...step5Data };
//       const fd = new FormData();

//       fd.append("listing_type", "rent");
//       fd.append("property_size", finalData.beds || "1");
//       fd.append("property_type", finalData.propertyType ? finalData.propertyType.toLowerCase() : "apartment");
//       fd.append("existing_occupants", parseInt(finalData.alreadyThere) || 0);
//       fd.append("country", finalData.country || "");
//       fd.append("pincode", finalData.postcode || "");
//       fd.append("advertiser_role", finalData.landlordType && finalData.landlordType.includes("Live in") ? "owner" : "tenant");
//       fd.append("area", finalData.area || "");
//       fd.append("nearest_station", `${finalData.transportFrom || ""} ${finalData.transportMode || ""}`.trim());
//       fd.append("living_room", finalData.livingRoom === "Yes, there is a shared living room" ? "yes" : "no");

//       const roomsArray = (finalData.rooms || []).map((room) => {
//         const mIndex = months.indexOf(finalData.availMonth) + 1;
//         const monthStr = mIndex.toString().padStart(2, "0");
//         const dayStr = (finalData.availDay || "01").padStart(2, "0");
//         const yearStr = finalData.availYear || new Date().getFullYear().toString();
//         return {
//           type: room.size ? room.size.toLowerCase() : "single",
//           rent: parseFloat(room.cost) || 0,
//           available_from: `${yearStr}-${monthStr}-${dayStr}`
//         };
//       });

//       roomsArray.forEach((room, index) => {
//         fd.append(`rooms[${index}][type]`, room.type);
//         fd.append(`rooms[${index}][rent]`, room.rent);
//         fd.append(`rooms[${index}][available_from]`, room.available_from);
//       });

//       const males = parseInt(finalData.maleCount) || 0;
//       const females = parseInt(finalData.femaleCount) || 0;
//       const others = parseInt(finalData.othersCount) || 0;
//       let roommateIndex = 0;

//       for (let i = 0; i < males; i++) {
//         fd.append(`roommates[${roommateIndex}][name]`, `Male Roommate ${i + 1}`);
//         fd.append(`roommates[${roommateIndex}][age]`, "0");
//         fd.append(`roommates[${roommateIndex}][gender]`, "male");
//         roommateIndex++;
//       }
//       for (let i = 0; i < females; i++) {
//         fd.append(`roommates[${roommateIndex}][name]`, `Female Roommate ${i + 1}`);
//         fd.append(`roommates[${roommateIndex}][age]`, "0");
//         fd.append(`roommates[${roommateIndex}][gender]`, "female");
//         roommateIndex++;
//       }
//       for (let i = 0; i < others; i++) {
//         fd.append(`roommates[${roommateIndex}][name]`, `Other Roommate ${i + 1}`);
//         fd.append(`roommates[${roommateIndex}][age]`, "0");
//         fd.append(`roommates[${roommateIndex}][gender]`, "other");
//         roommateIndex++;
//       }

//       fd.append("preferences[gender]", finalData.prefGender === "Male only" ? "male" : finalData.prefGender === "Female only" ? "female" : "any");
//       fd.append("preferences[smoking]", finalData.prefSmoking === "Smokers OK" ? "true" : "false");
//       fd.append("preferences[pets]", finalData.prefPets === "Yes" ? "true" : "false");

//       fd.append("title", finalData.adTitle || "");
//       fd.append("description", finalData.description || "");
//       fd.append("name", `${finalData.firstName || ""} ${finalData.lastName || ""}`.trim());
//       fd.append("telephone", finalData.telephone || "");
//       fd.append("email", finalData.email || "");

//       if (finalData.photos && Array.isArray(finalData.photos)) {
//         finalData.photos.forEach(file => {
//           if (file instanceof File) {
//              fd.append("photos[]", file);
//           }
//         });
//       }

//       const baseUrl = import.meta.env.VITE_BASE_URL || "https://api.dreamstofly.com";
//       const token = localStorage.getItem("token") || "";

//       const response = await fetch(`${baseUrl}/Accommodation/RoomAvailable/create`, {
//         method: "POST",
//         headers: {
//           ...(token ? { "Authorization": `Bearer ${token}` } : {})
//           // Browser auto-sets Content-Type: multipart/form-data bounding string
//         },
//         body: fd
//       });

//       const result = await response.json();
//       if (!response.ok) {
//         throw new Error(result.message || "Failed to create advert");
//       }

//       setSuccess(true);
//     } catch (err) {
//       console.error(err);
//       setError(err.message || "An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const steps = {
//     1: <AdvertiseStep1 onNext={handleNext} />,
//     2: <AdvertiseStep2 onNext={handleNext} onBack={handleBack} formData={formData} />,
//     3: <AdvertiseStep3 onNext={handleNext} onBack={handleBack} formData={formData} />,
//     4: <AdvertiseStep4 onNext={handleNext} onBack={handleBack} formData={formData} />,
//     5: <AdvertiseStep5 onSubmit={handleSubmitFinal} onBack={handleBack} formData={formData} loading={loading} />,
//   };

//   if (success) {
//     return (
//       <div className="bg-[#F3F3F3] min-h-screen flex flex-col">
//         <AccomodationAdvertiseRoomHeader />
//         <div className="flex-1 flex justify-center items-center px-6 py-12">
//           <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
//             <h2 className="text-3xl font-bold text-green-600 mb-4">Success!</h2>
//             <p className="text-gray-700">Your room has been advertised successfully.</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#F3F3F3] min-h-screen">
//       <AccomodationAdvertiseRoomHeader />
//       <div className="flex justify-center px-6 py-12">
//         <div className="w-full max-w-3xl flex flex-col gap-4">
//           {error && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//               {error}
//             </div>
//           )}
//           {steps[step]}
//         </div>
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

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const GotARoomPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmitFinal = async (step5Data) => {
    setLoading(true);
    setError("");

    try {
      const finalData = { ...formData, ...step5Data };

      // ── Build available_from date ──
      const mIndex = months.indexOf(finalData.availMonth) + 1;
      const monthStr = String(mIndex).padStart(2, "0");
      const dayStr = String(finalData.availDay || "1").padStart(2, "0");
      const yearStr = finalData.availYear || String(new Date().getFullYear());
      const availableFrom = `${yearStr}-${monthStr}-${dayStr}`;

      // ── rooms[] ──
      const rooms = (finalData.rooms || []).map((room) => ({
        type: room.size ? room.size.toLowerCase() : "single",
        rent: parseFloat(room.cost) || 0,
        available_from: availableFrom,
      }));

      // ── roommates[] ──
      const roommates = [];
      const males = parseInt(finalData.maleCount) || 0;
      const females = parseInt(finalData.femaleCount) || 0;
      const others = parseInt(finalData.othersCount) || 0;
      for (let i = 0; i < males; i++) roommates.push({ name: `Male Roommate ${i + 1}`, age: 0, gender: "male" });
      for (let i = 0; i < females; i++) roommates.push({ name: `Female Roommate ${i + 1}`, age: 0, gender: "female" });
      for (let i = 0; i < others; i++) roommates.push({ name: `Other Roommate ${i + 1}`, age: 0, gender: "other" });

      // ── preferences{} ──
      const preferences = {
        gender: finalData.prefGender === "Male only" ? "male"
          : finalData.prefGender === "Female only" ? "female"
            : "any",
        smoking: finalData.prefSmoking === "Smokers OK",
        pets: finalData.prefPets === "Yes" || finalData.prefPets === "Don't Mind",
      };

      // ── advertiser_role ──
      const advertiser_role =
        finalData.landlordType?.includes("Live in") ? "owner"
          : finalData.landlordType?.includes("Agent") ? "agent"
            : "tenant";

      // ── Build JSON payload ──
      const payload = {
        listing_type: "rent",
        property_size: finalData.beds || "",
        property_type: finalData.propertyType ? finalData.propertyType.toLowerCase() : "apartment",
        existing_occupants: parseInt(finalData.alreadyThere) || 0,
        country: finalData.country || "",
        pincode: finalData.postcode || "",
        advertiser_role,
        area: finalData.area || "",
        nearest_station: `${finalData.transportFrom || ""} ${finalData.transportMode || ""}`.trim(),
        living_room: finalData.livingRoom === "Yes, there is a shared living room" ? "yes" : "no",
        rooms,
        roommates,
        preferences,
        title: finalData.adTitle || "",
        description: finalData.description || "",
        name: `${finalData.firstName || ""} ${finalData.lastName || ""}`.trim(),
        telephone: finalData.telephone || "",
        email: finalData.email || "",
        photos: [],   // photo URLs — upload separately if needed
      };

      const baseUrl = import.meta.env.VITE_BASE_URL || "https://api.dreamstofly.com";
      const token = localStorage.getItem("token") || "";

      const response = await fetch(`${baseUrl}/Accommodation/RoomAvailable/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to create advert");
      }

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const steps = {
    1: <AdvertiseStep1 onNext={handleNext} />,
    2: <AdvertiseStep2 onNext={handleNext} onBack={handleBack} formData={formData} />,
    3: <AdvertiseStep3 onNext={handleNext} onBack={handleBack} formData={formData} />,
    4: <AdvertiseStep4 onNext={handleNext} onBack={handleBack} formData={formData} />,
    5: <AdvertiseStep5 onSubmit={handleSubmitFinal} onBack={handleBack} formData={formData} loading={loading} />,
  };

  if (success) {
    return (
      <div className="bg-[#F3F3F3] min-h-screen flex flex-col">
        <AccomodationAdvertiseRoomHeader />
        <div className="flex-1 flex justify-center items-center px-6 py-12">
          <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Success!</h2>
            <p className="text-gray-700">Your room has been advertised successfully.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <AccomodationAdvertiseRoomHeader />
      <div className="flex justify-center px-6 py-12">
        <div className="w-full max-w-3xl flex flex-col gap-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          {steps[step]}
        </div>
      </div>
    </div>
  );
};

export default GotARoomPage;