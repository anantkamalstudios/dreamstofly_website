// import React, { useState, useEffect } from "react";
// import {
//   MapPin, ChevronLeft, ChevronRight, X, ChevronDown,
//   Calendar, Home, Clock, Wifi, Shield,
//   ArrowLeft, Loader2, AlertCircle, Phone, Mail,
// } from "lucide-react";
// import { useParams, useNavigate } from "react-router-dom";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
// const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

// const PLACEHOLDER = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80";

// // ── Helpers ───────────────────────────────────────────────────────────────────

// const resolvePhoto = (p) => {
//   if (!p) return null;
//   if (typeof p === "string" && p.startsWith("data:")) return p;
//   if (typeof p === "string" && (p.startsWith("http://") || p.startsWith("https://"))) return p;
//   if (typeof p === "string") {
//     // ✅ IMAGE_BASE_URL used here — e.g. https://devlopment.dreamstofly.com/uploads/
//     const baseUrl = IMAGE_BASE_URL.endsWith("/") ? IMAGE_BASE_URL : `${IMAGE_BASE_URL}/`;
//     const photoPath = p.startsWith("/") ? p.slice(1) : p;
//     return `${baseUrl}${photoPath}`;
//   }
//   return null;
// };

// const formatDate = (dateStr) => {
//   if (!dateStr) return null;
//   try {
//     return new Date(dateStr).toLocaleDateString("en-IN", {
//       day: "numeric", month: "short", year: "numeric",
//     });
//   } catch {
//     return dateStr;
//   }
// };

// const capitalize = (str) =>
//   str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

// // ── Enquiry Dialog ────────────────────────────────────────────────────────────

// const EnquiryDialog = ({ onClose, accentColor = "blue" }) => {
//   const [phoneCode, setPhoneCode] = useState("+91");
//   const isBlue = accentColor === "blue";

//   const countryCodes = ["+91", "+971", "+44", "+1", "+61", "+49", "+33", "+81", "+86", "+7"];
//   const nationalities = [
//     "Select", "Indian", "British", "American", "Australian",
//     "Canadian", "German", "French", "Japanese", "Chinese", "Other",
//   ];

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden">
//         <div className="flex items-start justify-between px-8 pt-8 pb-2">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900">Enquiry Now</h2>
//             <p className="text-sm text-gray-400 mt-1">So our team can reach out to you on time</p>
//           </div>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition mt-1">
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         <div className="px-8 pt-5 pb-8 space-y-5">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//             <div>
//               <label className="block text-sm font-semibold text-gray-800 mb-1.5">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="eg: John Doe"
//                 className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-gray-800 mb-1.5">Nationality</label>
//               <div className="relative">
//                 <select className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition pr-10">
//                   {nationalities.map((n) => (
//                     <option key={n} value={n === "Select" ? "" : n}>{n}</option>
//                   ))}
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//             <div className="space-y-5">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-800 mb-1.5">Email</label>
//                 <input
//                   type="email"
//                   placeholder="eg: john@email.com"
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-gray-800 mb-1.5">Phone Number</label>
//                 <div className="flex gap-2">
//                   <div className="relative flex-shrink-0">
//                     <select
//                       value={phoneCode}
//                       onChange={(e) => setPhoneCode(e.target.value)}
//                       className="appearance-none pl-3 pr-7 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
//                     >
//                       {countryCodes.map((c) => <option key={c}>{c}</option>)}
//                     </select>
//                     <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
//                   </div>
//                   <input
//                     type="tel"
//                     placeholder="9876543210"
//                     className="flex-1 min-w-0 px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <label className="block text-sm font-semibold text-gray-800 mb-1.5">Share Your Message</label>
//               <textarea
//                 placeholder="Message"
//                 rows={5}
//                 className="flex-1 w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition resize-none"
//               />
//             </div>
//           </div>

//           <div className="flex justify-end pt-1">
//             <button
//               onClick={onClose}
//               className={`flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm ${
//                 isBlue ? "bg-blue-600 hover:bg-blue-700" : "bg-emerald-600 hover:bg-emerald-700"
//               }`}
//             >
//               Enquiry Now
//               <span className="bg-white bg-opacity-20 rounded-lg p-1 flex items-center justify-center">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ── Room Available Detail ─────────────────────────────────────────────────────

// const RoomAvailableDetail = ({ data }) => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [showEnquiry, setShowEnquiry] = useState(false);

//   const photos = (data.photos || []).map(resolvePhoto).filter(Boolean);
//   const images = photos.length > 0 ? photos : [PLACEHOLDER];

//   const nextImage = () => setCurrentImage((p) => (p + 1) % images.length);
//   const prevImage = () => setCurrentImage((p) => (p - 1 + images.length) % images.length);

//   return (
//     <div className="min-h-screen bg-white px-4 md:px-6 py-6 max-w-5xl mx-auto">
//       <h2 className="text-sm md:text-base font-semibold text-gray-800 mb-4">
//         {data.title || "Room Available"}
//       </h2>

//       <div className="flex flex-col md:flex-row gap-6 md:gap-8">

//         {/* ── Left: Images + Description ─────────── */}
//         <div className="flex-1 min-w-0">

//           {/* Main Image */}
//           <div className="relative rounded-xl overflow-hidden mb-3">
//             <img
//               src={images[currentImage]}
//               alt="Room"
//               onError={(e) => { e.target.src = PLACEHOLDER; }}
//               className="w-full h-56 sm:h-64 md:h-72 object-cover"
//             />
//             {images.length > 1 && (
//               <>
//                 <button
//                   onClick={prevImage}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow hover:shadow-md transition"
//                 >
//                   <ChevronLeft className="w-4 h-4 text-gray-700" />
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow hover:shadow-md transition"
//                 >
//                   <ChevronRight className="w-4 h-4 text-gray-700" />
//                 </button>
//                 <span className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white text-xs px-2 py-0.5 rounded-full">
//                   {currentImage + 1} / {images.length}
//                 </span>
//               </>
//             )}
//           </div>

//           {/* Thumbnails */}
//           {images.length > 1 && (
//             <div className="grid grid-cols-4 gap-2 mb-4">
//               {images.slice(0, 4).map((img, i) => (
//                 <div
//                   key={i}
//                   onClick={() => setCurrentImage(i)}
//                   className={`relative rounded-lg overflow-hidden cursor-pointer border-2 transition ${
//                     currentImage === i ? "border-blue-500" : "border-transparent"
//                   }`}
//                 >
//                   <img
//                     src={img}
//                     alt={`Room ${i + 1}`}
//                     onError={(e) => { e.target.src = PLACEHOLDER; }}
//                     className="w-full h-16 object-cover hover:opacity-80 transition"
//                   />
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Mobile Info Panel */}
//           <div className="block md:hidden mb-6">
//             <RoomAvailableInfoPanel data={data} onEnquire={() => setShowEnquiry(true)} />
//           </div>

//           {data.description && (
//             <div className="mt-4 md:mt-6">
//               <h3 className="text-base font-bold text-gray-900 mb-2">About this listing</h3>
//               <p className="text-sm text-gray-600 leading-relaxed">{data.description}</p>
//             </div>
//           )}

//           {/* Rooms Section */}
//           {Array.isArray(data.rooms) && data.rooms.length > 0 && (
//             <div className="mt-6">
//               <h3 className="text-base font-bold text-gray-900 mb-3">
//                 Available Rooms ({data.rooms.length})
//               </h3>
//               <div className="space-y-3">
//                 {data.rooms.map((room, i) => (
//                   <div key={i} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
//                     <div className="flex justify-between items-start mb-3">
//                       <div>
//                         <span className="text-sm font-semibold text-gray-800">
//                           Room {i + 1}{room.room_size ? ` — ${capitalize(room.room_size)}` : ""}
//                         </span>
//                         {room.furnishings && (
//                           <p className="text-xs text-gray-500 mt-0.5">{room.furnishings}</p>
//                         )}
//                       </div>
//                       {(room.room_cost || room.rent) && (
//                         <span className="text-sm font-bold text-blue-600">
//                           ₹{(room.room_cost || room.rent).toLocaleString()} / mo
//                         </span>
//                       )}
//                     </div>
//                     <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-gray-600">
//                       {room.available_from && (
//                         <div className="flex items-center gap-1">
//                           <Calendar className="w-3 h-3 text-gray-400" />
//                           Available: {formatDate(room.available_from)}
//                         </div>
//                       )}
//                       {room.min_stay && (
//                         <div className="flex items-center gap-1">
//                           <Clock className="w-3 h-3 text-gray-400" />
//                           Min stay: {room.min_stay}
//                         </div>
//                       )}
//                       {room.max_stay && (
//                         <div className="flex items-center gap-1">
//                           <Clock className="w-3 h-3 text-gray-400" />
//                           Max stay: {room.max_stay}
//                         </div>
//                       )}
//                       {room.security_deposit && (
//                         <div className="flex items-center gap-1">
//                           <Shield className="w-3 h-3 text-gray-400" />
//                           Deposit: ₹{room.security_deposit.toLocaleString()}
//                         </div>
//                       )}
//                       {room.utilities_included !== undefined && (
//                         <div className="flex items-center gap-1">
//                           <Home className="w-3 h-3 text-gray-400" />
//                           Bills: {room.utilities_included ? "Included" : "Not included"}
//                         </div>
//                       )}
//                       {room.broadband_included !== undefined && (
//                         <div className="flex items-center gap-1">
//                           <Wifi className="w-3 h-3 text-gray-400" />
//                           Broadband: {room.broadband_included ? "Included" : "Not included"}
//                         </div>
//                       )}
//                     </div>
//                     {Array.isArray(room.amenities) && room.amenities.length > 0 && (
//                       <div className="flex flex-wrap gap-1.5 mt-3">
//                         {room.amenities.map((a) => (
//                           <span key={a} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full capitalize">
//                             {a}
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Roommates Info */}
//           {Array.isArray(data.roommates) && data.roommates.length > 0 && (
//             <div className="mt-6">
//               <h3 className="text-base font-bold text-gray-900 mb-3">Current Housemates</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//                 {data.roommates.map((roommate, i) => {
//                   console.log('Roommate data:', roommate);
//                   return (
//                     <div key={i} className="border border-gray-200 rounded-xl p-3 bg-gray-50">
//                       <div className="flex items-center gap-2 mb-2">
//                         <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${
//                           roommate.gender === 'male' ? 'bg-blue-500' :
//                           roommate.gender === 'female' ? 'bg-pink-500' : 'bg-gray-500'
//                         }`}>
//                           {roommate.name ? roommate.name.charAt(0).toUpperCase() : '?'}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <p className="text-sm font-medium text-gray-900 truncate">{roommate.name || 'Unknown'}</p>
//                           <p className="text-xs text-gray-500 capitalize">{roommate.gender || 'Not specified'}</p>
//                         </div>
//                       </div>
//                       {roommate.age !== undefined && roommate.age !== null && (
//                         <p className="text-xs text-gray-600">Age: {roommate.age}</p>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}

//           {/* Preferences */}
//           {data.preferences && (
//             <div className="mt-6">
//               <h3 className="text-base font-bold text-gray-900 mb-3">New Housemate Preferences</h3>
//               <div className="grid grid-cols-2 gap-x-8 gap-y-2">
//                 {[
//                   { label: "Gender", value: data.preferences.gender },
//                   { label: "Smoking OK?", value: data.preferences.smoking !== undefined ? (data.preferences.smoking ? "Yes" : "No") : null },
//                   { label: "Pets OK?", value: data.preferences.pets !== undefined ? (data.preferences.pets ? "Yes" : "No") : null },
//                 ].filter((r) => r.value).map((row) => (
//                   <div key={row.label} className="flex justify-between text-sm border-b border-gray-100 pb-1.5">
//                     <span className="text-gray-500">{row.label}</span>
//                     <span className="text-gray-800 font-medium capitalize">{String(row.value)}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* ── Right: Desktop Info Panel ────────────── */}
//         <div className="hidden md:block w-64 flex-shrink-0">
//           <RoomAvailableInfoPanel data={data} onEnquire={() => setShowEnquiry(true)} />
//         </div>
//       </div>

//       {showEnquiry && (
//         <EnquiryDialog onClose={() => setShowEnquiry(false)} accentColor="blue" />
//       )}
//     </div>
//   );
// };

// const RoomAvailableInfoPanel = ({ data, onEnquire }) => {
//   const firstRoom = Array.isArray(data.rooms) && data.rooms.length > 0 ? data.rooms[0] : null;
//   const rent = firstRoom?.room_cost || firstRoom?.rent;
//   const location = [data.area, data.city, data.country].filter(Boolean).join(", ");

//   return (
//     <div>
//       <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
//         {data.title || "Room Available"}
//       </h2>

//       {location && (
//         <div className="flex items-center gap-1 mt-3 flex-wrap">
//           <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
//           <span className="text-xs text-gray-500">{location}</span>
//         </div>
//       )}

//       {data.nearest_station && (
//         <p className="text-xs text-gray-400 mt-1 ml-5">Nearest station: {data.nearest_station}</p>
//       )}

//       <div className="flex items-center justify-between mt-4 gap-2 flex-wrap">
//         {rent ? (
//           <span className="text-sm font-semibold text-gray-700">
//             From ₹{Number(rent).toLocaleString()}/mo
//           </span>
//         ) : (
//           <span className="text-sm text-gray-400">Price on request</span>
//         )}
//         <button
//           onClick={onEnquire}
//           className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-md transition font-medium"
//         >
//           Enquire Now
//         </button>
//       </div>

//       <hr className="my-4 border-gray-200" />

//       <div className="mb-4">
//         <h4 className="text-sm font-bold text-gray-900 mb-3">Property Details</h4>
//         <div className="space-y-2">
//           {[
//             { label: "Type", value: data.property_type },
//             { label: "Listing", value: data.listing_type },
//             { label: "Size", value: data.property_size },
//             { label: "Occupants", value: data.existing_occupants },
//             { label: "Living Room", value: data.living_room },
//             { label: "Advertiser", value: data.advertiser_role },
//           ].filter((r) => r.value).map((row) => (
//             <div key={row.label} className="flex justify-between text-sm">
//               <span className="text-gray-500">{row.label}</span>
//               <span className="text-gray-800 text-right font-medium">{String(row.value)}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {firstRoom && (
//         <>
//           <hr className="my-4 border-gray-200" />
//           <div className="mb-4">
//             <h4 className="text-sm font-bold text-gray-900 mb-3">Availability</h4>
//             <div className="space-y-2">
//               {[
//                 { label: "Available from", value: formatDate(firstRoom.available_from) },
//                 { label: "Minimum term", value: firstRoom.min_stay },
//                 { label: "Maximum term", value: firstRoom.max_stay },
//                 { label: "Short term", value: firstRoom.short_term ? "Yes" : "No" },
//               ].filter((r) => r.value).map((row) => (
//                 <div key={row.label} className="flex justify-between text-sm">
//                   <span className="text-gray-500">{row.label}</span>
//                   <span className="text-gray-800 font-medium">{row.value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <hr className="my-4 border-gray-200" />
//           <div className="mb-4">
//             <h4 className="text-sm font-bold text-gray-900 mb-3">Extra costs</h4>
//             <div className="space-y-2">
//               {[
//                 { label: "Deposit", value: firstRoom.security_deposit ? `₹${Number(firstRoom.security_deposit).toLocaleString()}` : null },
//                 { label: "Bills included?", value: firstRoom.utilities_included !== undefined ? (firstRoom.utilities_included ? "Yes" : "No") : null },
//                 { label: "Broadband included?", value: firstRoom.broadband_included !== undefined ? (firstRoom.broadband_included ? "Yes" : "No") : null },
//               ].filter((r) => r.value).map((row) => (
//                 <div key={row.label} className="flex justify-between text-sm">
//                   <span className="text-gray-500">{row.label}</span>
//                   <span className="text-gray-800 font-medium">{row.value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}

//       {(data.name || data.email || data.telephone) && (
//         <>
//           <hr className="my-4 border-gray-200" />
//           <div>
//             <h4 className="text-sm font-bold text-gray-900 mb-3">Contact</h4>
//             <div className="flex items-center gap-3 mb-2">
//               <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
//                 {(data.name || "?").charAt(0).toUpperCase()}
//               </div>
//               <div>
//                 {data.name && <p className="text-sm font-medium text-gray-900">{data.name}</p>}
//                 {data.advertiser_role && <p className="text-xs text-gray-500">{data.advertiser_role}</p>}
//               </div>
//             </div>
//             {data.email && (
//               <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-1">
//                 <Mail className="w-3 h-3" /> {data.email}
//               </p>
//             )}
//             {data.telephone && (
//               <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-1">
//                 <Phone className="w-3 h-3" /> {data.telephone}
//               </p>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// // ── Room Wanted Detail ────────────────────────────────────────────────────────

// const RoomWantedDetail = ({ data }) => {
//   const [showEnquiry, setShowEnquiry] = useState(false);
//   const photos = (data.photos || []).map(resolvePhoto).filter(Boolean);
//   const images = photos.length > 0 ? photos : [PLACEHOLDER];
//   const [currentImage, setCurrentImage] = useState(0);

//   const nextImage = () => setCurrentImage((p) => (p + 1) % images.length);
//   const prevImage = () => setCurrentImage((p) => (p - 1 + images.length) % images.length);

//   return (
//     <div className="min-h-screen bg-white px-4 md:px-6 py-6 max-w-5xl mx-auto">
//       <h2 className="text-sm md:text-base font-semibold text-gray-800 mb-4">
//         {data.title || "Room Available"}
//       </h2>

//       <div className="flex flex-col md:flex-row gap-6 md:gap-8">

//         {/* ── Left: Images + Description ──────────── */}
//         <div className="flex-1 min-w-0">

//           {/* Main Image Carousel */}
//           <div className="relative rounded-xl overflow-hidden mb-3">
//             <img
//               src={images[currentImage]}
//               alt="Room"
//               onError={(e) => { e.target.src = PLACEHOLDER; }}
//               className="w-full h-56 sm:h-64 md:h-72 object-cover"
//             />
//             {images.length > 1 && (
//               <>
//                 <button
//                   onClick={prevImage}
//                   className="absolute left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow hover:shadow-md transition"
//                 >
//                   <ChevronLeft className="w-4 h-4 text-gray-700" />
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow hover:shadow-md transition"
//                 >
//                   <ChevronRight className="w-4 h-4 text-gray-700" />
//                 </button>
//                 <span className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white text-xs px-2 py-0.5 rounded-full">
//                   {currentImage + 1} / {images.length}
//                 </span>
//               </>
//             )}
//             <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
//               Room Available
//             </span>
//           </div>

//           {/* Thumbnails */}
//           {images.length > 1 && (
//             <div className="grid grid-cols-4 gap-2 mb-4">
//               {images.slice(0, 4).map((img, i) => (
//                 <div
//                   key={i}
//                   onClick={() => setCurrentImage(i)}
//                   className={`relative rounded-lg overflow-hidden cursor-pointer border-2 transition ${
//                     currentImage === i ? "border-blue-500" : "border-transparent"
//                   }`}
//                 >
//                   <img
//                     src={img}
//                     alt={`Room ${i + 1}`}
//                     onError={(e) => { e.target.src = PLACEHOLDER; }}
//                     className="w-full h-16 object-cover hover:opacity-80 transition"
//                   />
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Mobile Info Panel */}
//           <div className="block md:hidden mb-6">
//             <RoomWantedInfoPanel data={data} onEnquire={() => setShowEnquiry(true)} />
//           </div>

//           {data.description && (
//             <div className="mt-2 md:mt-4">
//               <h3 className="text-base font-bold text-gray-900 mb-2">About this listing</h3>
//               <p className="text-sm text-gray-600 leading-relaxed">{data.description}</p>
//             </div>
//           )}

//           {/* Rooms Section */}
//           {Array.isArray(data.rooms) && data.rooms.length > 0 && (
//             <div className="mt-6">
//               <h3 className="text-base font-bold text-gray-900 mb-3">
//                 Available Rooms ({data.rooms.length})
//               </h3>
//               <div className="space-y-3">
//                 {data.rooms.map((room, i) => (
//                   <div key={i} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
//                     <div className="flex justify-between items-start mb-3">
//                       <div>
//                         <span className="text-sm font-semibold text-gray-800">
//                           Room {i + 1}{room.type ? ` — ${capitalize(room.type)}` : ""}
//                         </span>
//                       </div>
//                       {room.rent && (
//                         <span className="text-sm font-bold text-blue-600">
//                           ₹{room.rent.toLocaleString()} / mo
//                         </span>
//                       )}
//                     </div>
//                     <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-gray-600">
//                       {room.available_from && (
//                         <div className="flex items-center gap-1">
//                           <Calendar className="w-3 h-3 text-gray-400" />
//                           Available: {formatDate(room.available_from)}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Roommates Section */}
//           {Array.isArray(data.roommates) && data.roommates.length > 0 && (
//             <div className="mt-6">
//               <h3 className="text-base font-bold text-gray-900 mb-3">Current Housemates</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//                 {data.roommates.map((roommate, i) => {
//                   console.log('Roommate data:', roommate);
//                   return (
//                     <div key={i} className="border border-gray-200 rounded-xl p-3 bg-gray-50">
//                       <div className="flex items-center gap-2 mb-2">
//                         <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${
//                           roommate.gender === 'male' ? 'bg-blue-500' :
//                           roommate.gender === 'female' ? 'bg-pink-500' : 'bg-gray-500'
//                         }`}>
//                           {roommate.name ? roommate.name.charAt(0).toUpperCase() : '?'}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <p className="text-sm font-medium text-gray-900 truncate">{roommate.name || 'Unknown'}</p>
//                           <p className="text-xs text-gray-500 capitalize">{roommate.gender || 'Not specified'}</p>
//                         </div>
//                       </div>
//                       {roommate.age !== undefined && roommate.age !== null && (
//                         <p className="text-xs text-gray-600">Age: {roommate.age}</p>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}

//           {/* Preferences */}
//           {data.preferences && (
//             <div className="mt-6">
//               <h3 className="text-base font-bold text-gray-900 mb-3">New Housemate Preferences</h3>
//               <div className="grid grid-cols-2 gap-x-8 gap-y-2">
//                 {[
//                   { label: "Gender", value: data.preferences.gender },
//                   { label: "Smoking OK?", value: data.preferences.smoking !== undefined ? (data.preferences.smoking ? "Yes" : "No") : null },
//                   { label: "Pets OK?", value: data.preferences.pets !== undefined ? (data.preferences.pets ? "Yes" : "No") : null },
//                 ].filter((r) => r.value).map((row) => (
//                   <div key={row.label} className="flex justify-between text-sm border-b border-gray-100 pb-1.5">
//                     <span className="text-gray-500">{row.label}</span>
//                     <span className="text-gray-800 font-medium capitalize">{String(row.value)}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* ── Right: Desktop Info Panel ─────────── */}
//         <div className="hidden md:block w-64 flex-shrink-0">
//           <RoomWantedInfoPanel data={data} onEnquire={() => setShowEnquiry(true)} />
//         </div>
//       </div>

//       {showEnquiry && (
//         <EnquiryDialog onClose={() => setShowEnquiry(false)} accentColor="blue" />
//       )}
//     </div>
//   );
// };

// const RoomWantedInfoPanel = ({ data, onEnquire }) => {
//   const location = [data.area, data.city, data.pincode, data.country].filter(Boolean).join(", ");
//   const firstRoom = Array.isArray(data.rooms) && data.rooms.length > 0 ? data.rooms[0] : null;
//   const rent = firstRoom?.rent;

//   return (
//     <div>
//       <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
//         {data.title || "Room Available"}
//       </h2>

//       {location && (
//         <div className="flex items-center gap-1 mt-3 flex-wrap">
//           <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
//           <span className="text-xs text-gray-500">{location}</span>
//         </div>
//       )}

//       {data.nearest_station && (
//         <p className="text-xs text-gray-400 mt-1 ml-5">Nearest station: {data.nearest_station}</p>
//       )}

//       <div className="flex items-center justify-between mt-4 gap-2 flex-wrap">
//         {rent ? (
//           <span className="text-sm font-semibold text-gray-700">
//             From ₹{Number(rent).toLocaleString()}/mo
//           </span>
//         ) : (
//           <span className="text-sm text-gray-400">Price on request</span>
//         )}
//         <button
//           onClick={onEnquire}
//           className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-md transition font-medium"
//         >
//           Enquire Now
//         </button>
//       </div>

//       <hr className="my-4 border-gray-200" />

//       <div className="mb-4">
//         <h4 className="text-sm font-bold text-gray-900 mb-3">Property Details</h4>
//         <div className="space-y-2">
//           {[
//             { label: "Type", value: data.property_type },
//             { label: "Listing", value: data.listing_type },
//             { label: "Size", value: data.property_size },
//             { label: "Occupants", value: data.existing_occupants },
//             { label: "Living Room", value: data.living_room },
//             { label: "Advertiser", value: data.advertiser_role },
//           ].filter((r) => r.value).map((row) => (
//             <div key={row.label} className="flex justify-between text-sm">
//               <span className="text-gray-500">{row.label}</span>
//               <span className="text-gray-800 text-right font-medium">{String(row.value)}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {firstRoom && (
//         <>
//           <hr className="my-4 border-gray-200" />
//           <div className="mb-4">
//             <h4 className="text-sm font-bold text-gray-900 mb-3">Availability</h4>
//             <div className="space-y-2">
//               {[
//                 { label: "Available from", value: formatDate(firstRoom.available_from) },
//               ].filter((r) => r.value).map((row) => (
//                 <div key={row.label} className="flex justify-between text-sm">
//                   <span className="text-gray-500">{row.label}</span>
//                   <span className="text-gray-800 font-medium">{row.value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}

//       {(data.name || data.email || data.telephone) && (
//         <>
//           <hr className="my-4 border-gray-200" />
//           <div>
//             <h4 className="text-sm font-bold text-gray-900 mb-3">Contact</h4>
//             <div className="flex items-center gap-3 mb-2">
//               <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
//                 {(data.name || "?").charAt(0).toUpperCase()}
//               </div>
//               <div>
//                 {data.name && <p className="text-sm font-medium text-gray-900">{data.name}</p>}
//                 {data.advertiser_role && <p className="text-xs text-gray-500">{data.advertiser_role}</p>}
//               </div>
//             </div>
//             {data.email && (
//               <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-1">
//                 <Mail className="w-3 h-3" /> {data.email}
//               </p>
//             )}
//             {data.telephone && (
//               <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-1">
//                 <Phone className="w-3 h-3" /> {data.telephone}
//               </p>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };


// const RoomDetails = () => {
//   const { type, id } = useParams();
//   const navigate = useNavigate();

//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!type || !id) {
//       setError("Invalid URL parameters.");
//       setLoading(false);
//       return;
//     }

//     // ✅ BASE_URL (VITE_BASE_URL) used here — for API fetch only
//     const endpoint =
//       type === "available"
//         ? `${BASE_URL}/Accommodation/RoomAvailable/detail/${id}`
//         : `${BASE_URL}/Accommodation/RoomWanted/detail/${id}`;

//     const fetchDetail = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await fetch(endpoint);
//         if (!res.ok) throw new Error(`HTTP error ${res.status}`);
//         const json = await res.json();
//         if (!json.status || !json.data) throw new Error(json.message || "Failed to load listing.");
//         setData(json.data);
//         console.log(json.data);
//       } catch (err) {
//         console.error("Failed to fetch room detail:", err);
//         setError(err.message || "Failed to load listing. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDetail();
//   }, [type, id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="flex flex-col items-center gap-3 text-gray-400">
//           <Loader2 className="w-8 h-8 animate-spin" />
//           <p className="text-sm">Loading listing details…</p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !data) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center px-4">
//         <div className="flex flex-col items-center gap-4 text-center">
//           <AlertCircle className="w-10 h-10 text-red-400" />
//           <p className="text-gray-600">{error || "Listing not found."}</p>
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 text-blue-600 text-sm hover:underline"
//           >
//             <ArrowLeft className="w-4 h-4" /> Go back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="max-w-5xl mx-auto px-4 md:px-6 pt-4">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition mb-2"
//         >
//           <ArrowLeft className="w-4 h-4" />
//           Back to listings
//         </button>
//       </div>

//       {type === "available" ? (
//         <RoomAvailableDetail data={data} />
//       ) : (
//         <RoomWantedDetail data={data} />
//       )}
//     </div>
//   );
// };

// export default RoomDetails;


import React, { useState, useEffect } from "react";
import {
  MapPin, ChevronLeft, ChevronRight, X, ChevronDown,
  Calendar, Home, Clock, Wifi, Shield,
  ArrowLeft, Loader2, AlertCircle, Phone, Mail,
  Users,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

const PLACEHOLDER = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80";

// ── Helpers ───────────────────────────────────────────────────────────────────

const resolvePhoto = (p) => {
  if (!p) return null;
  if (typeof p === "string" && p.startsWith("data:")) return p;
  if (typeof p === "string" && (p.startsWith("http://") || p.startsWith("https://"))) return p;
  if (typeof p === "string") {
    const baseUrl = IMAGE_BASE_URL.endsWith("/") ? IMAGE_BASE_URL : `${IMAGE_BASE_URL}/`;
    const photoPath = p.startsWith("/") ? p.slice(1) : p;
    return `${baseUrl}${photoPath}`;
  }
  return null;
};

const formatDate = (dateStr) => {
  if (!dateStr) return null;
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric", month: "short", year: "numeric",
    });
  } catch {
    return dateStr;
  }
};

const capitalize = (str) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

// ── Enquiry Dialog ────────────────────────────────────────────────────────────

const EnquiryDialog = ({ onClose, accentColor = "blue" }) => {
  const [phoneCode, setPhoneCode] = useState("+91");
  const isBlue = accentColor === "blue";

  const countryCodes = ["+91", "+971", "+44", "+1", "+61", "+49", "+33", "+81", "+86", "+7"];
  const nationalities = [
    "Select", "Indian", "British", "American", "Australian",
    "Canadian", "German", "French", "Japanese", "Chinese", "Other",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden">
        <div className="flex items-start justify-between px-8 pt-8 pb-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Enquiry Now</h2>
            <p className="text-sm text-gray-400 mt-1">So our team can reach out to you on time</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition mt-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-8 pt-5 pb-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Full Name</label>
              <input
                type="text"
                placeholder="eg: John Doe"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Nationality</label>
              <div className="relative">
                <select className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition pr-10">
                  {nationalities.map((n) => (
                    <option key={n} value={n === "Select" ? "" : n}>{n}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="eg: john@email.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Phone Number</label>
                <div className="flex gap-2">
                  <div className="relative flex-shrink-0">
                    <select
                      value={phoneCode}
                      onChange={(e) => setPhoneCode(e.target.value)}
                      className="appearance-none pl-3 pr-7 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                    >
                      {countryCodes.map((c) => <option key={c}>{c}</option>)}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                  </div>
                  <input
                    type="tel"
                    placeholder="9876543210"
                    className="flex-1 min-w-0 px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Share Your Message</label>
              <textarea
                placeholder="Message"
                rows={5}
                className="flex-1 w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition resize-none"
              />
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <button
              onClick={onClose}
              className={`flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm ${
                isBlue ? "bg-blue-600 hover:bg-blue-700" : "bg-emerald-600 hover:bg-emerald-700"
              }`}
            >
              Enquiry Now
              <span className="bg-white bg-opacity-20 rounded-lg p-1 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Room Available Detail ─────────────────────────────────────────────────────

const RoomAvailableDetail = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showEnquiry, setShowEnquiry] = useState(false);

  const photos = (data.photos || []).map(resolvePhoto).filter(Boolean);
  const images = photos.length > 0 ? photos : [PLACEHOLDER];

  const nextImage = () => setCurrentImage((p) => (p + 1) % images.length);
  const prevImage = () => setCurrentImage((p) => (p - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-white px-4 md:px-6 py-6 max-w-5xl mx-auto">
      <h2 className="text-sm md:text-base font-semibold text-gray-800 mb-4">
        {data.title || "Room Available"}
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">

        {/* ── Left: Images + Description ─────────── */}
        <div className="flex-1 min-w-0">

          {/* Main Image */}
          <div className="relative rounded-xl overflow-hidden mb-3">
            <img
              src={images[currentImage]}
              alt="Room"
              onError={(e) => { e.target.src = PLACEHOLDER; }}
              className="w-full h-56 sm:h-64 md:h-72 object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow hover:shadow-md transition"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow hover:shadow-md transition"
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>
                <span className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white text-xs px-2 py-0.5 rounded-full">
                  {currentImage + 1} / {images.length}
                </span>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-2 mb-4">
              {images.slice(0, 4).map((img, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`relative rounded-lg overflow-hidden cursor-pointer border-2 transition ${
                    currentImage === i ? "border-blue-500" : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Room ${i + 1}`}
                    onError={(e) => { e.target.src = PLACEHOLDER; }}
                    className="w-full h-16 object-cover hover:opacity-80 transition"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Mobile Info Panel */}
          <div className="block md:hidden mb-6">
            <RoomAvailableInfoPanel data={data} onEnquire={() => setShowEnquiry(true)} />
          </div>

          {data.description && (
            <div className="mt-4 md:mt-6">
              <h3 className="text-base font-bold text-gray-900 mb-2">About this listing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{data.description}</p>
            </div>
          )}

          {/* Rooms Section */}
          {Array.isArray(data.rooms) && data.rooms.length > 0 && (
            <div className="mt-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Available Rooms ({data.rooms.length})
              </h3>
              <div className="space-y-3">
                {data.rooms.map((room, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-sm font-semibold text-gray-800">
                          Room {i + 1}{room.room_size ? ` — ${capitalize(room.room_size)}` : ""}
                        </span>
                        {room.furnishings && (
                          <p className="text-xs text-gray-500 mt-0.5">{room.furnishings}</p>
                        )}
                      </div>
                      {(room.room_cost || room.rent) && (
                        <span className="text-sm font-bold text-blue-600">
                          ₹{(room.room_cost || room.rent).toLocaleString()} / mo
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-gray-600">
                      {room.available_from && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          Available: {formatDate(room.available_from)}
                        </div>
                      )}
                      {room.min_stay && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          Min stay: {room.min_stay}
                        </div>
                      )}
                      {room.max_stay && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          Max stay: {room.max_stay}
                        </div>
                      )}
                      {room.security_deposit && (
                        <div className="flex items-center gap-1">
                          <Shield className="w-3 h-3 text-gray-400" />
                          Deposit: ₹{room.security_deposit.toLocaleString()}
                        </div>
                      )}
                      {room.utilities_included !== undefined && (
                        <div className="flex items-center gap-1">
                          <Home className="w-3 h-3 text-gray-400" />
                          Bills: {room.utilities_included ? "Included" : "Not included"}
                        </div>
                      )}
                      {room.broadband_included !== undefined && (
                        <div className="flex items-center gap-1">
                          <Wifi className="w-3 h-3 text-gray-400" />
                          Broadband: {room.broadband_included ? "Included" : "Not included"}
                        </div>
                      )}
                    </div>
                    {Array.isArray(room.amenities) && room.amenities.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {room.amenities.map((a) => (
                          <span key={a} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full capitalize">
                            {a}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Roommates Info */}
          {Array.isArray(data.roommates) && data.roommates.length > 0 && (
            <div className="mt-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">Current Housemates</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {data.roommates.map((roommate, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-3 bg-gray-50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${
                        roommate.gender === "male" ? "bg-blue-500" :
                        roommate.gender === "female" ? "bg-pink-500" : "bg-gray-500"
                      }`}>
                        {roommate.name ? roommate.name.charAt(0).toUpperCase() : "?"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{roommate.name || "Unknown"}</p>
                        <p className="text-xs text-gray-500 capitalize">{roommate.gender || "Not specified"}</p>
                      </div>
                    </div>
                    {roommate.age !== undefined && roommate.age !== null && (
                      <p className="text-xs text-gray-600">Age: {roommate.age}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preferences */}
          {data.preferences && (
            <div className="mt-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">New Housemate Preferences</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {[
                  { label: "Gender", value: data.preferences.gender },
                  { label: "Smoking OK?", value: data.preferences.smoking !== undefined ? (data.preferences.smoking ? "Yes" : "No") : null },
                  { label: "Pets OK?", value: data.preferences.pets !== undefined ? (data.preferences.pets ? "Yes" : "No") : null },
                ].filter((r) => r.value).map((row) => (
                  <div key={row.label} className="flex justify-between text-sm border-b border-gray-100 pb-1.5">
                    <span className="text-gray-500">{row.label}</span>
                    <span className="text-gray-800 font-medium capitalize">{String(row.value)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Right: Desktop Info Panel ────────────── */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <RoomAvailableInfoPanel data={data} onEnquire={() => setShowEnquiry(true)} />
        </div>
      </div>

      {showEnquiry && (
        <EnquiryDialog onClose={() => setShowEnquiry(false)} accentColor="blue" />
      )}
    </div>
  );
};

// ── FIXED: closing ); was missing in original ─────────────────────────────────
const RoomAvailableInfoPanel = ({ data, onEnquire }) => {
  const firstRoom = Array.isArray(data.rooms) && data.rooms.length > 0 ? data.rooms[0] : null;
  const rent = firstRoom?.room_cost || firstRoom?.rent;
  const location = [data.area, data.city, data.country].filter(Boolean).join(", ");

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
        {data.title || "Room Available"}
      </h2>

      {location && (
        <div className="flex items-center gap-1 mt-3 flex-wrap">
          <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
          <span className="text-xs text-gray-500">{location}</span>
        </div>
      )}

      {data.nearest_station && (
        <p className="text-xs text-gray-400 mt-1 ml-5">Nearest station: {data.nearest_station}</p>
      )}

      <div className="flex items-center justify-between mt-4 gap-2 flex-wrap">
        {rent ? (
          <span className="text-sm font-semibold text-gray-700">
            From ₹{Number(rent).toLocaleString()}/mo
          </span>
        ) : (
          <span className="text-sm text-gray-400">Price on request</span>
        )}
        <button
          onClick={onEnquire}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-md transition font-medium"
        >
          Enquire Now
        </button>
      </div>

      <hr className="my-4 border-gray-200" />

      <div className="mb-4">
        <h4 className="text-sm font-bold text-gray-900 mb-3">Property Details</h4>
        <div className="space-y-2">
          {[
            { label: "Type", value: data.property_type },
            { label: "Listing", value: data.listing_type },
            { label: "Size", value: data.property_size },
            { label: "Occupants", value: data.existing_occupants },
            { label: "Living Room", value: data.living_room },
            { label: "Advertiser", value: data.advertiser_role },
          ].filter((r) => r.value).map((row) => (
            <div key={row.label} className="flex justify-between text-sm">
              <span className="text-gray-500">{row.label}</span>
              <span className="text-gray-800 text-right font-medium">{String(row.value)}</span>
            </div>
          ))}
        </div>
      </div>

      {firstRoom && (
        <>
          <hr className="my-4 border-gray-200" />
          <div className="mb-4">
            <h4 className="text-sm font-bold text-gray-900 mb-3">Availability</h4>
            <div className="space-y-2">
              {[
                { label: "Available from", value: formatDate(firstRoom.available_from) },
                { label: "Minimum term", value: firstRoom.min_stay },
                { label: "Maximum term", value: firstRoom.max_stay },
                { label: "Short term", value: firstRoom.short_term ? "Yes" : "No" },
              ].filter((r) => r.value).map((row) => (
                <div key={row.label} className="flex justify-between text-sm">
                  <span className="text-gray-500">{row.label}</span>
                  <span className="text-gray-800 font-medium">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="my-4 border-gray-200" />
          <div className="mb-4">
            <h4 className="text-sm font-bold text-gray-900 mb-3">Extra costs</h4>
            <div className="space-y-2">
              {[
                { label: "Deposit", value: firstRoom.security_deposit ? `₹${Number(firstRoom.security_deposit).toLocaleString()}` : null },
                { label: "Bills included?", value: firstRoom.utilities_included !== undefined ? (firstRoom.utilities_included ? "Yes" : "No") : null },
                { label: "Broadband included?", value: firstRoom.broadband_included !== undefined ? (firstRoom.broadband_included ? "Yes" : "No") : null },
              ].filter((r) => r.value).map((row) => (
                <div key={row.label} className="flex justify-between text-sm">
                  <span className="text-gray-500">{row.label}</span>
                  <span className="text-gray-800 font-medium">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {(data.name || data.email || data.telephone) && (
        <>
          <hr className="my-4 border-gray-200" />
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3">Contact</h4>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
                {(data.name || "?").charAt(0).toUpperCase()}
              </div>
              <div>
                {data.name && <p className="text-sm font-medium text-gray-900">{data.name}</p>}
                {data.advertiser_role && <p className="text-xs text-gray-500">{data.advertiser_role}</p>}
              </div>
            </div>
            {data.email && (
              <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-1">
                <Mail className="w-3 h-3" /> {data.email}
              </p>
            )}
            {data.telephone && (
              <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-1">
                <Phone className="w-3 h-3" /> {data.telephone}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

// ── Room Wanted Detail ────────────────────────────────────────────────────────

const RoomWantedDetail = ({ data }) => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const photos = (data.photos || []).map(resolvePhoto).filter(Boolean);
  const images = photos.length > 0 ? photos : [PLACEHOLDER];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((p) => (p + 1) % images.length);
  const prevImage = () => setCurrentImage((p) => (p - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-white px-4 md:px-6 py-6 max-w-5xl mx-auto">
      <h2 className="text-sm md:text-base font-semibold text-gray-800 mb-4">
        {data.title || "Looking for a Room"}
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">

        {/* ── Left: Images + Description ──────────── */}
        <div className="flex-1 min-w-0">

          {/* Main Image */}
          <div className="relative rounded-xl overflow-hidden mb-3">
            <img
              src={images[currentImage]}
              alt="Room Wanted"
              onError={(e) => { e.target.src = PLACEHOLDER; }}
              className="w-full h-56 sm:h-64 md:h-72 object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow hover:shadow-md transition"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow hover:shadow-md transition"
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>
                <span className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white text-xs px-2 py-0.5 rounded-full">
                  {currentImage + 1} / {images.length}
                </span>
              </>
            )}
            <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Room Wanted
            </span>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-2 mb-4">
              {images.slice(0, 4).map((img, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`relative rounded-lg overflow-hidden cursor-pointer border-2 transition ${
                    currentImage === i ? "border-emerald-500" : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Room ${i + 1}`}
                    onError={(e) => { e.target.src = PLACEHOLDER; }}
                    className="w-full h-16 object-cover hover:opacity-80 transition"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Mobile Info Panel */}
          <div className="block md:hidden mb-6">
            <RoomWantedInfoPanel data={data} onEnquire={() => setShowEnquiry(true)} />
          </div>

          {/* About Me */}
          {data.description && (
            <div className="mt-2 md:mt-4">
              <h3 className="text-base font-bold text-gray-900 mb-2">About Me</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{data.description}</p>
            </div>
          )}

          {/* Buddy Up */}
          {data.buddy_description && (
            <div className="mt-4">
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Looking to Buddy Up
                {data.buddy_up === "1" && (
                  <span className="ml-2 text-xs font-medium bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full align-middle">
                    Open to buddy up
                  </span>
                )}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{data.buddy_description}</p>
            </div>
          )}

          {/* Show buddy up badge even without description */}
          {!data.buddy_description && data.buddy_up === "1" && (
            <div className="mt-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-600" />
              <span className="text-sm text-emerald-700 font-medium">Open to buddy up</span>
            </div>
          )}

          {/* About the Person */}
          <div className="mt-6">
            <h3 className="text-base font-bold text-gray-900 mb-3">About the Person</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {[
                { label: "Gender", value: data.gender },
                { label: "Age", value: data.age },
                { label: "Occupation", value: data.occupation || null },
                { label: "Nationality", value: data.nationality },
                { label: "Smoking", value: data.smoking },
                { label: "Pets", value: data.pets },
                { label: "Language", value: data.language },
                { label: "Orientation", value: data.orientation },
                { label: "Stay Frequency", value: data.stay_frequency },
              ].filter((r) => r.value && r.value !== "") .map((row) => (
                <div key={row.label} className="flex justify-between text-sm border-b border-gray-100 pb-1.5">
                  <span className="text-gray-500">{row.label}</span>
                  <span className="text-gray-800 font-medium capitalize">{String(row.value)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          {Array.isArray(data.interests) && data.interests.length > 0 && (
            <div className="mt-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {data.interests.map((interest) => (
                  <span key={interest} className="text-sm bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full capitalize">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Amenities Wanted */}
          {Array.isArray(data.amenities) && data.amenities.length > 0 && (
            <div className="mt-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">Amenities Wanted</h3>
              <div className="flex flex-wrap gap-2">
                {data.amenities.map((a) => (
                  <span key={a} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full capitalize">
                    {a.replace(/_/g, " ")}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Housemate Preferences */}
          {(data.pref_gender || data.pref_age_min || data.pref_occupation ||
            data.pref_smoking || data.pref_pets || data.pref_orientation) && (
            <div className="mt-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">Housemate Preferences</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {[
                  { label: "Gender", value: data.pref_gender },
                  {
                    label: "Age Range",
                    value: data.pref_age_min && data.pref_age_max
                      ? `${data.pref_age_min}–${data.pref_age_max}`
                      : null,
                  },
                  { label: "Occupation", value: data.pref_occupation },
                  { label: "Smoking OK?", value: data.pref_smoking },
                  { label: "Pets OK?", value: data.pref_pets },
                  { label: "Orientation", value: data.pref_orientation },
                ].filter((r) => r.value).map((row) => (
                  <div key={row.label} className="flex justify-between text-sm border-b border-gray-100 pb-1.5">
                    <span className="text-gray-500">{row.label}</span>
                    <span className="text-gray-800 font-medium capitalize">{String(row.value)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Right: Desktop Info Panel ─────────── */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <RoomWantedInfoPanel data={data} onEnquire={() => setShowEnquiry(true)} />
        </div>
      </div>

      {showEnquiry && (
        <EnquiryDialog onClose={() => setShowEnquiry(false)} accentColor="emerald" />
      )}
    </div>
  );
};

// ── Room Wanted Info Panel ────────────────────────────────────────────────────

const RoomWantedInfoPanel = ({ data, onEnquire }) => {
  // Build location from available fields — city may be null
  const location = [data.city, data.pincode, data.country].filter(Boolean).join(", ");
  const fullName = [data.first_name, data.last_name].filter(Boolean).join(" ");

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
        {data.title || "Looking for a Room"}
      </h2>

      {location && (
        <div className="flex items-center gap-1 mt-3 flex-wrap">
          <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span className="text-xs text-gray-500">{location}</span>
        </div>
      )}

      <div className="flex items-center justify-between mt-4 gap-2 flex-wrap">
        {data.budget ? (
          <span className="text-sm font-semibold text-gray-700">
            Budget: ₹{parseFloat(data.budget).toLocaleString()}
            {data.budget_type ? ` / ${data.budget_type}` : ""}
          </span>
        ) : (
          <span className="text-sm text-gray-400">Budget not specified</span>
        )}
        <button
          onClick={onEnquire}
          className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4 py-1.5 rounded-md transition font-medium"
        >
          Enquire Now
        </button>
      </div>

      <hr className="my-4 border-gray-200" />

      {/* Room Requirements */}
      <div className="mb-4">
        <h4 className="text-sm font-bold text-gray-900 mb-3">Room Requirements</h4>
        <div className="space-y-2">
          {[
            { label: "Searching for", value: data.searching_for },
            { label: "Room size", value: data.room_size },
            { label: "Available from", value: formatDate(data.available_from) },
            { label: "Min stay", value: data.min_stay },
            { label: "Max stay", value: data.max_stay },
            { label: "Stay frequency", value: data.stay_frequency },
          ].filter((r) => r.value).map((row) => (
            <div key={row.label} className="flex justify-between text-sm">
              <span className="text-gray-500">{row.label}</span>
              <span className="text-gray-800 font-medium capitalize">{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-4 border-gray-200" />

      {/* About the Person */}
      <div className="mb-4">
        <h4 className="text-sm font-bold text-gray-900 mb-3">About the Person</h4>
        <div className="space-y-2">
          {[
            { label: "Gender", value: data.gender },
            { label: "Age", value: data.age },
            { label: "Occupation", value: data.occupation || null },
            { label: "Nationality", value: data.nationality },
            { label: "Smoking", value: data.smoking },
            { label: "Pets", value: data.pets },
          ].filter((r) => r.value && r.value !== "").map((row) => (
            <div key={row.label} className="flex justify-between text-sm">
              <span className="text-gray-500">{row.label}</span>
              <span className="text-gray-800 font-medium capitalize">{String(row.value)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Buddy Up Badge */}
      {data.buddy_up === "1" && (
        <>
          <hr className="my-4 border-gray-200" />
          <div className="flex items-center gap-2 py-1">
            <Users className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="text-sm text-emerald-700 font-medium">Open to buddy up</span>
          </div>
        </>
      )}

      {/* Contact */}
      {(fullName || data.phone) && (
        <>
          <hr className="my-4 border-gray-200" />
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3">Contact</h4>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm flex-shrink-0">
                {(data.first_name || "?").charAt(0).toUpperCase()}
              </div>
              <div>
                {fullName && <p className="text-sm font-medium text-gray-900">{fullName}</p>}
                {data.nationality && <p className="text-xs text-gray-500">{data.nationality}</p>}
              </div>
            </div>
            {data.phone && (
              <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-1">
                <Phone className="w-3 h-3" /> {data.phone}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

// ── Root Component ────────────────────────────────────────────────────────────

const RoomDetails = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!type || !id) {
      setError("Invalid URL parameters.");
      setLoading(false);
      return;
    }

    const endpoint =
      type === "available"
        ? `${BASE_URL}/Accommodation/RoomAvailable/detail/${id}`
        : `${BASE_URL}/Accommodation/RoomWanted/detail/${id}`;

    const fetchDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const json = await res.json();
        if (!json.status || !json.data) throw new Error(json.message || "Failed to load listing.");
        setData(json.data);
      } catch (err) {
        console.error("Failed to fetch room detail:", err);
        setError(err.message || "Failed to load listing. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [type, id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-gray-400">
          <Loader2 className="w-8 h-8 animate-spin" />
          <p className="text-sm">Loading listing details…</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <AlertCircle className="w-10 h-10 text-red-400" />
          <p className="text-gray-600">{error || "Listing not found."}</p>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 text-sm hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 md:px-6 pt-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition mb-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to listings
        </button>
      </div>

      {type === "available" ? (
        <RoomAvailableDetail data={data} />
      ) : (
        <RoomWantedDetail data={data} />
      )}
    </div>
  );
};

export default RoomDetails;