// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useSearchParams, useNavigate } from "react-router-dom";
// import {
//   Star, MapPin, Users, Phone, Mail, Globe, ArrowLeft,
//   Building2, X, ChevronLeft, ChevronRight, Image as ImageIcon,
//   Wifi, Coffee, Utensils, Car, Dumbbell, Waves, Tv, Wind,
//   BedDouble, BedSingle, ShowerHead, Bath, Thermometer, Shield,
//   DoorOpen, Maximize2, Layers, CheckCircle2, XCircle, Info,
//   ChevronDown, ChevronUp, Hash, Cigarette, Accessibility,
//   MonitorPlay, Phone as PhoneIcon, Fan, Lock
// } from "lucide-react";
// import {
//   getHotelDetail, getHotelImages, searchHotels
// } from "../../../../api/hotelApi";
// import HotelBookingModal from "../components/HotelBookingModal";

// const CONVERSION_RATE = 108.6;

// const IMAGE_BASE_URL = "https://photos.hotelbeds.com/giata/";

// const BOARD_LABELS = {
//   RO: "Room Only",
//   BB: "Bed & Breakfast",
//   DB: "Buffet Breakfast",
//   HB: "Half Board",
//   FB: "Full Board",
//   AI: "All Inclusive",
// };

// const BOARD_COLORS = {
//   RO: "bg-slate-100 text-slate-700",
//   BB: "bg-amber-50 text-amber-700",
//   DB: "bg-amber-50 text-amber-700",
//   HB: "bg-orange-50 text-orange-700",
//   FB: "bg-green-50 text-green-800",
//   AI: "bg-emerald-50 text-emerald-800",
// };

// const formatPrice = (price, currency = "INR") => {
//   if (price == null) return "—";
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency,
//     maximumFractionDigits: 0,
//   }).format(price);
// };

// const buildImageUrl = (path) => {
//   if (!path) return "";
//   if (path.startsWith("http")) return path;
//   return `${IMAGE_BASE_URL}${path}`;
// };

// const getStarCount = (categoryCode) => {
//   if (!categoryCode) return 0;
//   const match = categoryCode.match(/(\d)/);
//   return match ? Number(match[1]) : 0;
// };

// /* ── Facility icon mapper ── */
// const FACILITY_ICON_MAP = {
//   wifi: <Wifi className="w-4 h-4" />,
//   internet: <Wifi className="w-4 h-4" />,
//   restaurant: <Utensils className="w-4 h-4" />,
//   dining: <Utensils className="w-4 h-4" />,
//   parking: <Car className="w-4 h-4" />,
//   fitness: <Dumbbell className="w-4 h-4" />,
//   gym: <Dumbbell className="w-4 h-4" />,
//   pool: <Waves className="w-4 h-4" />,
//   swim: <Waves className="w-4 h-4" />,
//   tv: <Tv className="w-4 h-4" />,
//   television: <Tv className="w-4 h-4" />,
//   "air conditioning": <Wind className="w-4 h-4" />,
//   air: <Wind className="w-4 h-4" />,
//   coffee: <Coffee className="w-4 h-4" />,
//   bar: <Coffee className="w-4 h-4" />,
//   shower: <ShowerHead className="w-4 h-4" />,
//   bathtub: <Bath className="w-4 h-4" />,
//   bath: <Bath className="w-4 h-4" />,
//   hairdryer: <Wind className="w-4 h-4" />,
//   safe: <Lock className="w-4 h-4" />,
//   balcony: <DoorOpen className="w-4 h-4" />,
//   terrace: <DoorOpen className="w-4 h-4" />,
//   desk: <Layers className="w-4 h-4" />,
//   telephone: <PhoneIcon className="w-4 h-4" />,
//   fan: <Fan className="w-4 h-4" />,
//   smoking: <Cigarette className="w-4 h-4" />,
//   wheelchair: <Accessibility className="w-4 h-4" />,
// };

// const getFacilityIcon = (name = "") => {
//   const lower = name.toLowerCase();
//   for (const [key, icon] of Object.entries(FACILITY_ICON_MAP)) {
//     if (lower.includes(key)) return icon;
//   }
//   return <CheckCircle2 className="w-4 h-4" />;
// };

// /* ── Bed type icon ── */
// const getBedIcon = (desc = "") => {
//   const lower = desc.toLowerCase();
//   if (lower.includes("double") || lower.includes("queen") || lower.includes("king"))
//     return <BedDouble className="w-5 h-5 text-indigo-500" />;
//   return <BedSingle className="w-5 h-5 text-indigo-500" />;
// };

// /* ── Image type badge colors ── */
// const IMAGE_TYPE_COLORS = {
//   HAB: "bg-indigo-100 text-indigo-700",
//   COM: "bg-amber-100 text-amber-700",
//   PIS: "bg-cyan-100 text-cyan-700",
//   BAR: "bg-purple-100 text-purple-700",
//   RES: "bg-orange-100 text-orange-700",
//   EXT: "bg-green-100 text-green-700",
// };

// /* ════════════════════════════════════════════
//    Room Facility Pill
// ═══════════════════════════════════════════ */
// const FacilityPill = ({ fac }) => {
//   const name = fac.description?.content || fac.name || "";
//   const isNo = fac.indYesOrNo === false || fac.indLogic === false;
//   const isFee = fac.indFee === true;
//   const number = fac.number;

//   if (isNo) return null; // skip "not available" items

//   const label = number && number > 0
//     ? `${number} ${name}`
//     : name;

//   return (
//     <div className="flex items-center gap-2 py-1.5 px-3 bg-slate-50 border border-slate-100 rounded-lg text-xs text-slate-700 font-medium">
//       <span className="text-slate-400">{getFacilityIcon(name)}</span>
//       <span>{label}</span>
//       {isFee && <span className="text-amber-600 text-[10px] font-semibold">(Fee)</span>}
//     </div>
//   );
// };

// /* ════════════════════════════════════════════
//    Room Card (static room type info)
// ═══════════════════════════════════════════ */
// const RoomTypeCard = ({ room, roomImages }) => {
//   const [expanded, setExpanded] = useState(false);

//   const roomFacilities = (room.roomFacilities || []).filter(
//     (f) => f.indYesOrNo !== false && f.indLogic !== false
//   );
//   const bedConfig = room.roomStays?.find((s) => s.stayType === "BED");
//   const roomSizeFac = (room.roomFacilities || []).find((f) => f.facilityCode === 295);
//   const roomSize = roomSizeFac?.number;

//   const myImages = roomImages[room.roomCode] || [];

//   const [imgIdx, setImgIdx] = useState(0);

//   return (
//     <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
//       {/* Room Image Strip */}
//       {myImages.length > 0 ? (
//         <div className="relative h-48 overflow-hidden bg-slate-100">
//           <img
//             src={buildImageUrl(myImages[imgIdx]?.path)}
//             alt={room.description}
//             className="w-full h-full object-cover"
//             onError={(e) => { e.target.style.display = "none"; }}
//           />
//           {myImages.length > 1 && (
//             <>
//               <button
//                 onClick={() => setImgIdx((p) => (p === 0 ? myImages.length - 1 : p - 1))}
//                 className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors"
//               >
//                 <ChevronLeft className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={() => setImgIdx((p) => (p === myImages.length - 1 ? 0 : p + 1))}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors"
//               >
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//               <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
//                 {myImages.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setImgIdx(i)}
//                     className={`w-1.5 h-1.5 rounded-full transition-colors ${i === imgIdx ? "bg-white" : "bg-white/40"}`}
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//           {/* Image type badge */}
//           {myImages[imgIdx]?.type?.code && (
//             <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${IMAGE_TYPE_COLORS[myImages[imgIdx].type.code] || "bg-white/80 text-slate-700"}`}>
//               {myImages[imgIdx].type.description?.content || myImages[imgIdx].type.code}
//             </span>
//           )}
//         </div>
//       ) : (
//         <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
//           <ImageIcon className="w-8 h-8 text-slate-300" />
//         </div>
//       )}

//       <div className="p-4">
//         {/* Header */}
//         <div className="flex items-start justify-between gap-2 mb-3">
//           <div>
//             <h4 className="font-bold text-slate-900 text-sm leading-tight">{room.description}</h4>
//             <span className="text-[10px] text-slate-400 font-mono uppercase mt-0.5 block">{room.roomCode}</span>
//           </div>
//           {roomSize && (
//             <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold shrink-0">
//               <Maximize2 className="w-3 h-3" />
//               {roomSize} m²
//             </div>
//           )}
//         </div>

//         {/* Occupancy badges */}
//         <div className="flex flex-wrap gap-2 mb-3">
//           <span className="flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">
//             <Users className="w-3 h-3" />
//             Max {room.maxAdults} adults
//           </span>
//           {room.maxChildren > 0 && (
//             <span className="flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">
//               <Users className="w-3 h-3" />
//               {room.maxChildren} children
//             </span>
//           )}
//         </div>

//         {/* Bed config */}
//         {bedConfig?.roomStayFacilities?.map((bed, i) => (
//           <div key={i} className="flex items-center gap-2 mb-3 text-sm text-slate-700">
//             {getBedIcon(bed.description?.content || "")}
//             <span className="font-medium text-slate-800">
//               {bed.number}× {bed.description?.content}
//             </span>
//           </div>
//         ))}

//         {/* Top facilities (always visible) */}
//         {roomFacilities.length > 0 && (
//           <div className="flex flex-wrap gap-1.5 mt-2">
//             {roomFacilities.slice(0, expanded ? roomFacilities.length : 4).map((fac, i) => (
//               <FacilityPill key={i} fac={fac} />
//             ))}
//           </div>
//         )}

//         {roomFacilities.length > 4 && (
//           <button
//             onClick={() => setExpanded((p) => !p)}
//             className="mt-2 text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
//           >
//             {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
//             {expanded ? "Show less" : `+${roomFacilities.length - 4} more amenities`}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// /* ════════════════════════════════════════════
//    Rate Row (live rate)
// ═══════════════════════════════════════════ */
// const RateRow = ({ rate, roomName, onBook }) => {
//   const isNonRefundable = rate.rateClass === "NRF";
//   const priceINR = Math.round(Number(rate.net) * CONVERSION_RATE);
//   const boardLabel = BOARD_LABELS[rate.boardCode] || rate.boardName || rate.boardCode;
//   const boardColor = BOARD_COLORS[rate.boardCode] || "bg-slate-100 text-slate-700";

//   return (
//     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-b border-slate-50 last:border-0 last:pb-0">
//       <div className="flex-1 space-y-2">
//         <div className="flex items-center gap-2 flex-wrap">
//           <span className={`px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase rounded-lg ${boardColor}`}>
//             {boardLabel}
//           </span>
//           <span
//             className={`px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase rounded-lg ${
//               isNonRefundable ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-700"
//             }`}
//           >
//             {isNonRefundable ? "Non-refundable" : "Free cancellation"}
//           </span>
//         </div>

//         {!isNonRefundable && rate.cancellationPolicies?.[0] && (
//           <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
//             <CheckCircle2 className="w-3.5 h-3.5" />
//             Cancel free before{" "}
//             {new Date(rate.cancellationPolicies[0].from).toLocaleDateString("en-IN", {
//               day: "numeric", month: "short",
//             })}
//           </p>
//         )}
//         {isNonRefundable && (
//           <p className="text-xs text-red-500 font-medium flex items-center gap-1">
//             <XCircle className="w-3.5 h-3.5" />
//             Non-refundable at any time
//           </p>
//         )}
//         {rate.taxes?.taxes?.length > 0 && (
//           <p className="text-xs text-slate-400 flex items-center gap-1">
//             <Info className="w-3 h-3" />
//             +{rate.taxes.taxes.map((t) => `${t.amount} ${t.currency} ${t.subType || "tax"}`).join(", ")} at hotel
//           </p>
//         )}
//       </div>

//       <div className="flex sm:flex-col items-center sm:items-end gap-3 justify-between sm:justify-start">
//         <div className="text-right">
//           <p className="text-xl font-black text-slate-900 tracking-tight leading-none">
//             {formatPrice(priceINR)}
//           </p>
//           <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mt-0.5">
//             Total · INR
//           </p>
//         </div>
//         <button
//           onClick={() => onBook(rate, roomName)}
//           className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow-md"
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// /* ════════════════════════════════════════════
//    Live Room Card (with rates)
// ═══════════════════════════════════════════ */
// const LiveRoomCard = ({ room, onBook, roomImages, staticRooms }) => {
//   const [ratesExpanded, setRatesExpanded] = useState(true);
//   const rates = room.rates || [];

//   // Try to match with static room data for extra info
//   const staticRoom = staticRooms.find(
//     (sr) => sr.roomCode === room.code || sr.description?.toLowerCase() === room.name?.toLowerCase()
//   );

//   const myImages = roomImages[room.code] || [];
//   const [imgIdx, setImgIdx] = useState(0);

//   const roomSize = staticRoom?.roomFacilities?.find((f) => f.facilityCode === 295)?.number;
//   const bedConfig = staticRoom?.roomStays?.find((s) => s.stayType === "BED");
//   const keyFacilities = (staticRoom?.roomFacilities || [])
//     .filter((f) => f.indYesOrNo !== false && f.indLogic !== false)
//     .slice(0, 6);

//   return (
//     <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
//       {/* Room image strip */}
//       {myImages.length > 0 ? (
//         <div className="relative h-52 overflow-hidden bg-slate-100">
//           <img
//             src={buildImageUrl(myImages[imgIdx]?.path)}
//             alt={room.name}
//             className="w-full h-full object-cover"
//             onError={(e) => { e.target.parentNode.style.display = "none"; }}
//           />
//           {myImages.length > 1 && (
//             <>
//               <button
//                 onClick={() => setImgIdx((p) => (p === 0 ? myImages.length - 1 : p - 1))}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full hover:bg-black/60"
//               >
//                 <ChevronLeft className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={() => setImgIdx((p) => (p === myImages.length - 1 ? 0 : p + 1))}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full hover:bg-black/60"
//               >
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//               <span className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full font-medium">
//                 {imgIdx + 1}/{myImages.length}
//               </span>
//             </>
//           )}
//         </div>
//       ) : (
//         <div className="h-36 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
//           <BedDouble className="w-10 h-10 text-indigo-200" />
//         </div>
//       )}

//       {/* Room header */}
//       <div className="px-5 pt-4 pb-3 border-b border-slate-50">
//         <div className="flex items-start justify-between gap-3 mb-2">
//           <div>
//             <h3 className="font-bold text-slate-900 text-base leading-tight">{room.name}</h3>
//             <span className="text-[10px] text-slate-400 font-mono">{room.code}</span>
//           </div>
//           <div className="flex items-center gap-2 shrink-0">
//             {roomSize && (
//               <span className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold">
//                 <Maximize2 className="w-3 h-3" />
//                 {roomSize}m²
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Quick info row */}
//         <div className="flex flex-wrap items-center gap-3">
//           {bedConfig?.roomStayFacilities?.map((bed, i) => (
//             <div key={i} className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
//               {getBedIcon(bed.description?.content || "")}
//               {bed.number}× {bed.description?.content}
//             </div>
//           ))}
//           {staticRoom && (
//             <span className="flex items-center gap-1 text-xs text-slate-500">
//               <Users className="w-3.5 h-3.5" />
//               Up to {staticRoom.maxAdults} adults
//               {staticRoom.maxChildren > 0 ? `, ${staticRoom.maxChildren} children` : ""}
//             </span>
//           )}
//         </div>

//         {/* Key amenities strip */}
//         {keyFacilities.length > 0 && (
//           <div className="flex flex-wrap gap-1.5 mt-3">
//             {keyFacilities.map((fac, i) => {
//               const name = fac.description?.content || "";
//               return (
//                 <span key={i} className="flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
//                   <span className="text-slate-400">{getFacilityIcon(name)}</span>
//                   {name}
//                 </span>
//               );
//             })}
//           </div>
//         )}
//       </div>

//       {/* Rates */}
//       <div className="px-5 pb-4">
//         <button
//           onClick={() => setRatesExpanded((p) => !p)}
//           className="flex items-center justify-between w-full py-3 text-sm font-bold text-slate-700 hover:text-slate-900"
//         >
//           <span>{rates.length} Rate{rates.length !== 1 ? "s" : ""} Available</span>
//           {ratesExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//         </button>

//         {ratesExpanded && rates.map((rate, rIdx) => (
//           <RateRow
//             key={rate.rateKey || rIdx}
//             rate={rate}
//             roomName={room.name}
//             onBook={onBook}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// /* ════════════════════════════════════════════
//    Hotel Boards Section
// ═══════════════════════════════════════════ */
// const BoardsSection = ({ boards }) => {
//   if (!boards?.length) return null;
//   return (
//     <div className="flex flex-wrap gap-2 mb-6">
//       <span className="text-xs font-bold text-slate-500 uppercase tracking-widest self-center mr-1">Board Plans:</span>
//       {boards.map((b, i) => (
//         <span
//           key={i}
//           className={`px-3 py-1.5 text-xs font-bold rounded-xl border ${BOARD_COLORS[b.code] || "bg-slate-50 text-slate-700"} border-current/10`}
//         >
//           {b.description?.content || b.code}
//         </span>
//       ))}
//     </div>
//   );
// };

// /* ════════════════════════════════════════════
//    MAIN COMPONENT
// ═══════════════════════════════════════════ */
// const HotelDetailPage = () => {
//   const { hotelCode } = useParams();
//   const [searchParams] = useSearchParams();

//   const checkIn  = searchParams.get("checkIn")   || "";
//   const checkOut = searchParams.get("checkOut")  || "";
//   const adults   = Number(searchParams.get("adults")   || "2");
//   const children = Number(searchParams.get("children") || "0");
//   const rooms    = Number(searchParams.get("rooms")    || "1");

//   const [hotel, setHotel]                 = useState(null);
//   const [images, setImages]               = useState([]);
//   const [liveHotelData, setLiveHotelData] = useState(null);
//   const [loading, setLoading]             = useState(true);
//   const [error, setError]                 = useState(null);

//   const [activeTab, setActiveTab] = useState("overview");

//   // Lightbox
//   const [showLightbox, setShowLightbox]   = useState(false);
//   const [lightboxIndex, setLightboxIndex] = useState(0);

//   // Booking modal
//   const [bookingRate, setBookingRate] = useState(null);
//   const [bookingRoom, setBookingRoom] = useState("");

//   // Section refs
//   const overviewRef   = useRef(null);
//   const roomsRef      = useRef(null);
//   const facilitiesRef = useRef(null);
//   const roomTypesRef  = useRef(null);
//   const sectionRefs   = {
//     overview: overviewRef,
//     rooms: roomsRef,
//     "room-types": roomTypesRef,
//     facilities: facilitiesRef,
//   };

//   useEffect(() => {
//     if (!hotelCode) return;
//     let cancelled = false;
//     setLoading(true);

//     const fetchData = async () => {
//       try {
//         const detailRes = await getHotelDetail(hotelCode);
//         if (cancelled) return;
//         const hData = detailRes?.hotel;
//         setHotel(hData);

//         // Hotel images
//         try {
//           const imagesRes = await getHotelImages(hotelCode);
//           if (!cancelled && imagesRes?.images?.length > 0) {
//             const sorted = [...imagesRes.images].sort(
//               (a, b) => (a.visualOrder ?? a.order ?? 0) - (b.visualOrder ?? b.order ?? 0)
//             );
//             setImages(sorted.map((img) => ({
//               url: img.url || buildImageUrl(img.path),
//               path: img.path,
//               description: img.description || img.type?.description?.content || "Hotel Image",
//               type: img.type,
//               roomCode: img.roomCode,
//               characteristicCode: img.characteristicCode,
//             })));
//           }
//         } catch (imgErr) {
//           // If image API fails, use images embedded in hotel detail
//           if (hData?.images?.length > 0) {
//             const sorted = [...hData.images].sort(
//               (a, b) => (a.visualOrder ?? a.order ?? 0) - (b.visualOrder ?? b.order ?? 0)
//             );
//             setImages(sorted.map((img) => ({
//               url: buildImageUrl(img.path),
//               path: img.path,
//               description: img.type?.description?.content || "Hotel Image",
//               type: img.type,
//               roomCode: img.roomCode,
//               characteristicCode: img.characteristicCode,
//             })));
//           }
//         }

//         // Live room rates
//         if (hData && checkIn && checkOut) {
//           const destCode = hData.destination?.code || hData.destinationCode;
//           if (destCode) {
//             try {
//               const liveSearch = await searchHotels({
//                 destinationCode: destCode,
//                 checkIn,
//                 checkOut,
//                 roomCount: rooms,
//                 adults,
//                 children,
//                 maxHotels: 50,
//               });
//               if (!cancelled && liveSearch?.hotels?.hotels) {
//                 const liveHotel = liveSearch.hotels.hotels.find(
//                   (h) => String(h.code) === String(hotelCode)
//                 );
//                 setLiveHotelData(liveHotel || null);
//               }
//             } catch (liveErr) {
//               console.warn("Live rates fetch failed", liveErr);
//             }
//           }
//         }
//       } catch (err) {
//         if (!cancelled) setError("Failed to load hotel details.");
//       } finally {
//         if (!cancelled) setLoading(false);
//       }
//     };

//     fetchData();
//     return () => { cancelled = true; };
//   }, [hotelCode, checkIn, checkOut, adults, children, rooms]);

//   // Build a map: roomCode → images[]
//   const roomImageMap = React.useMemo(() => {
//     const map = {};
//     images.forEach((img) => {
//       if (img.roomCode) {
//         if (!map[img.roomCode]) map[img.roomCode] = [];
//         map[img.roomCode].push(img);
//       }
//     });
//     return map;
//   }, [images]);

//   // General images (no roomCode)
//   const generalImages = images.filter((img) => !img.roomCode);

//   const scrollToSection = (tabName) => {
//     setActiveTab(tabName);
//     const ref = sectionRefs[tabName];
//     if (!ref?.current) return;
//     const y = ref.current.getBoundingClientRect().top + window.pageYOffset - 100;
//     window.scrollTo({ top: y, behavior: "smooth" });
//   };

//   const handleBook = (rate, roomName) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       localStorage.setItem("intendedDestination", window.location.pathname + window.location.search);
//       window.location.href = "/login";
//       return;
//     }
//     setBookingRate(rate);
//     setBookingRoom(roomName);
//   };

//   /* ── Loading skeleton ── */
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-slate-50 animate-pulse">
//         <div className="h-16 bg-white border-b border-slate-200" />
//         <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
//           <div className="h-[400px] bg-slate-200 rounded-2xl" />
//           <div className="flex gap-8">
//             <div className="w-2/3 space-y-4">
//               <div className="h-10 w-1/2 bg-slate-200 rounded-xl" />
//               <div className="h-4 w-1/4 bg-slate-200 rounded" />
//               <div className="h-32 bg-slate-200 rounded-2xl mt-6" />
//             </div>
//             <div className="w-1/3">
//               <div className="h-64 bg-slate-200 rounded-2xl" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error || !hotel) {
//     return (
//       <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
//         <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg w-full">
//           <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-6" />
//           <h2 className="text-xl font-semibold text-slate-800 mb-3">{error || "Hotel not found"}</h2>
//           <button
//             onClick={() => window.close()}
//             className="mt-6 px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full"
//           >
//             Close Tab
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const hName     = hotel.name?.content || hotel.name;
//   const hStars    = getStarCount(hotel.category?.code || hotel.categoryCode);
//   const hDesc     = hotel.description?.content || hotel.description;
//   const hAddr     = hotel.address?.content || hotel.address;
//   const hCity     = hotel.city?.content || hotel.city;
//   const liveRooms = liveHotelData?.rooms || [];
//   const facilities = hotel.facilities || [];
//   const allRooms   = hotel.rooms || [];
//   const boards     = hotel.boards || [];

//   const phoneNumber =
//     hotel.phones?.find((p) => p.phoneType === "PHONEHOTEL")?.phoneNumber ||
//     hotel.phones?.[0]?.phoneNumber;
//   const email   = hotel.email;
//   const website = hotel.web;

//   // Gallery images for lightbox (general + all)
//   const galleryImages = generalImages.length > 0 ? generalImages : images;

//   const TABS = [
//     { key: "overview",    label: "Overview" },
//     { key: "rooms",       label: `Rooms${liveRooms.length > 0 ? ` (${liveRooms.length})` : ""}` },
//     { key: "room-types",  label: "Room Types" },
//     { key: "facilities",  label: "Facilities" },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 pb-20">

//       {/* ── Top Bar ── */}
//       <div className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
//           <button
//             onClick={() => window.close()}
//             className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold text-sm transition-colors shrink-0"
//           >
//             <ArrowLeft className="w-4 h-4" /> Back
//           </button>
//           <div className="hidden md:block text-slate-900 font-bold truncate max-w-md text-center text-sm">
//             {hName}
//           </div>
//           <div className="text-xs text-slate-500 font-medium text-right shrink-0 leading-relaxed">
//             {checkIn && checkOut ? `${checkIn} — ${checkOut}` : "Dates not selected"}<br />
//             {adults} Adult{adults > 1 ? "s" : ""} · {children} Child{children !== 1 ? "ren" : ""} · {rooms} Room{rooms > 1 ? "s" : ""}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-6">

//         {/* ── Image Gallery ── */}
//         {galleryImages.length > 0 && (
//           <div className="flex flex-col md:flex-row gap-2 h-[300px] md:h-[440px] rounded-2xl overflow-hidden mb-6 relative">
//             {/* Hero */}
//             <div
//               className="md:w-3/5 h-full relative cursor-pointer group overflow-hidden"
//               onClick={() => { setLightboxIndex(0); setShowLightbox(true); }}
//             >
//               <img
//                 src={galleryImages[0]?.url || buildImageUrl(galleryImages[0]?.path)}
//                 alt={galleryImages[0]?.description || "Hotel"}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//               />
//               {/* Type label */}
//               {galleryImages[0]?.type?.code && (
//                 <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm ${IMAGE_TYPE_COLORS[galleryImages[0].type.code] || "bg-white/80 text-slate-700"}`}>
//                   {galleryImages[0].type.description?.content || galleryImages[0].type.code}
//                 </span>
//               )}
//             </div>

//             {/* Thumbnail grid */}
//             {galleryImages.length > 1 && (
//               <div className="hidden md:grid w-2/5 grid-cols-2 grid-rows-2 gap-2 h-full relative">
//                 {galleryImages.slice(1, 5).map((img, i) => (
//                   <div
//                     key={i}
//                     className="w-full h-full relative cursor-pointer overflow-hidden group"
//                     onClick={() => { setLightboxIndex(i + 1); setShowLightbox(true); }}
//                   >
//                     <img
//                       src={img.url || buildImageUrl(img.path)}
//                       alt={img.description || "Hotel"}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     {img.type?.code && (
//                       <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${IMAGE_TYPE_COLORS[img.type.code] || "bg-white/80 text-slate-700"}`}>
//                         {img.type.description?.content || img.type.code}
//                       </span>
//                     )}
//                   </div>
//                 ))}
//                 {galleryImages.length > 5 && (
//                   <button
//                     onClick={() => { setLightboxIndex(0); setShowLightbox(true); }}
//                     className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-slate-900 px-4 py-2 font-bold text-sm rounded-xl shadow-lg hover:bg-white flex items-center gap-2"
//                   >
//                     <ImageIcon className="w-4 h-4" /> All {galleryImages.length} photos
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>
//         )}

//         {/* ── Sticky Tabs ── */}
//         <div className="bg-slate-50 sticky top-16 z-30 pt-3 pb-0">
//           <div className="flex gap-6 border-b border-slate-200 px-1 overflow-x-auto">
//             {TABS.map((tab) => (
//               <button
//                 key={tab.key}
//                 onClick={() => scrollToSection(tab.key)}
//                 className={`pb-3 text-sm font-semibold whitespace-nowrap transition-colors relative ${
//                   activeTab === tab.key ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
//                 }`}
//               >
//                 {tab.label}
//                 {activeTab === tab.key && (
//                   <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-t-full" />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* ── Two Column Layout ── */}
//         <div className="flex flex-col lg:flex-row gap-8 mt-8">

//           {/* ── LEFT COLUMN ── */}
//           <div className="lg:w-2/3 space-y-14">

//             {/* OVERVIEW */}
//             <div ref={overviewRef} className="scroll-mt-32">
//               {/* Stars + badges */}
//               <div className="flex items-center gap-2 flex-wrap mb-3">
//                 {hStars > 0 && (
//                   <div className="flex items-center gap-0.5">
//                     {[...Array(hStars)].map((_, i) => (
//                       <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
//                     ))}
//                   </div>
//                 )}
//                 {hotel.category?.description?.content && (
//                   <span className="text-xs font-bold text-slate-600 bg-slate-200/70 px-2.5 py-1 rounded-lg">
//                     {hotel.category.description.content}
//                   </span>
//                 )}
//                 {hotel.ranking > 0 && (
//                   <span className="text-xs font-bold text-white bg-blue-600 px-2.5 py-1 rounded-lg shadow-sm">
//                     Rank #{hotel.ranking}
//                   </span>
//                 )}
//                 {hotel.zone?.description?.content && (
//                   <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-lg">
//                     {hotel.zone.description.content}
//                   </span>
//                 )}
//               </div>

//               <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
//                 {hName}
//               </h1>

//               <p className="flex items-start gap-2 text-slate-600 mb-4 text-sm">
//                 <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
//                 <span>
//                   {hAddr}
//                   {hotel.postalCode ? ` ${hotel.postalCode}` : ""}
//                   {hCity ? `, ${hCity}` : ""}
//                   {hotel.state?.name ? `, ${hotel.state.name}` : ""}
//                   {hotel.country?.description?.content ? `, ${hotel.country.description.content}` : ""}
//                 </span>
//               </p>

//               {/* Segment tags */}
//               {hotel.segments?.length > 0 && (
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {hotel.segments.map((seg, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full border border-indigo-100"
//                     >
//                       {seg.description?.content || "Hotel"}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Board plans */}
//               <BoardsSection boards={boards} />

//               {/* Description */}
//               <div className="text-slate-700 leading-relaxed text-sm bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mb-6">
//                 <p>{hDesc}</p>
//               </div>

//               {/* Contact */}
//               {(phoneNumber || email || website) && (
//                 <div className="flex flex-wrap gap-4 p-4 bg-white border border-slate-100 rounded-2xl mb-6">
//                   {phoneNumber && (
//                     <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 text-sm text-slate-700 hover:text-blue-600 font-medium transition-colors">
//                       <Phone className="w-4 h-4 text-blue-500" /> {phoneNumber}
//                     </a>
//                   )}
//                   {email && (
//                     <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm text-slate-700 hover:text-blue-600 font-medium transition-colors">
//                       <Mail className="w-4 h-4 text-blue-500" /> {email}
//                     </a>
//                   )}
//                   {website && (
//                     <a
//                       href={website.startsWith("http") ? website : `https://${website}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-2 text-sm text-slate-700 hover:text-blue-600 font-medium transition-colors"
//                     >
//                       <Globe className="w-4 h-4 text-blue-500" /> Website
//                     </a>
//                   )}
//                   {hotel.license && (
//                     <span className="flex items-center gap-2 text-sm text-slate-500">
//                       <Hash className="w-4 h-4" /> License: {hotel.license}
//                     </span>
//                   )}
//                 </div>
//               )}

//               {/* Nearby Attractions */}
//               {hotel.interestPoints?.length > 0 && (
//                 <div>
//                   <h3 className="text-lg font-bold text-slate-900 mb-4">Nearby Attractions</h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     {hotel.interestPoints.map((poi, idx) => {
//                       const distKm = poi.distance > 1000
//                         ? `${(poi.distance / 1000).toFixed(1)} km`
//                         : `${poi.distance} m`;
//                       return (
//                         <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
//                           <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
//                           <div>
//                             <p className="font-semibold text-slate-900 text-sm">{poi.poiName}</p>
//                             <p className="text-xs text-slate-500 mt-0.5">{distKm} away</p>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* LIVE ROOMS */}
//             <div ref={roomsRef} className="scroll-mt-32">
//               <div className="flex items-baseline gap-3 mb-6">
//                 <h2 className="text-2xl font-black text-slate-900 tracking-tight">Available Rooms</h2>
//                 {liveRooms.length > 0 && (
//                   <span className="text-sm font-semibold text-slate-500">{liveRooms.length} room type{liveRooms.length !== 1 ? "s" : ""} found</span>
//                 )}
//               </div>

//               {!checkIn || !checkOut ? (
//                 <div className="bg-blue-50 border border-blue-100 p-8 rounded-2xl text-center">
//                   <p className="text-blue-800 font-semibold">Enter travel dates to see live availability and prices.</p>
//                 </div>
//               ) : liveRooms.length > 0 ? (
//                 <div className="space-y-6">
//                   {liveRooms.map((room, idx) => (
//                     <LiveRoomCard
//                       key={idx}
//                       room={room}
//                       onBook={handleBook}
//                       roomImages={roomImageMap}
//                       staticRooms={allRooms}
//                     />
//                   ))}
//                 </div>
//               ) : (
//                 <div className="bg-slate-100 border border-slate-200 p-8 rounded-2xl text-center">
//                   <p className="text-slate-500 font-semibold">No rooms available for the selected dates.</p>
//                 </div>
//               )}
//             </div>

//             {/* ROOM TYPES (static catalog) */}
//             <div ref={roomTypesRef} className="scroll-mt-32">
//               <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Room Types</h2>
//               <p className="text-sm text-slate-500 mb-6">All room categories available at this property</p>

//               {allRooms.length > 0 ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   {allRooms.map((room, idx) => (
//                     <RoomTypeCard
//                       key={idx}
//                       room={room}
//                       roomImages={roomImageMap}
//                     />
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-sm text-slate-500">No room type information available.</p>
//               )}
//             </div>

//             {/* FACILITIES */}
//             <div ref={facilitiesRef} className="scroll-mt-32">
//               <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-6">Facilities & Amenities</h2>

//               {facilities.length > 0 ? (
//                 <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {facilities.map((fac, idx) => {
//                       const facName = fac.description?.content || fac.name || "";
//                       const number = fac.number;
//                       const label = number && number > 0 ? `${number} ${facName}` : facName;
//                       const icon = getFacilityIcon(facName);
//                       return (
//                         <div key={idx} className="flex items-center gap-3 py-2">
//                           <span className="text-blue-500 shrink-0">{icon}</span>
//                           <span className="text-sm font-medium text-slate-700">{label}</span>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               ) : (
//                 <p className="text-sm text-slate-500">No facilities data available.</p>
//               )}
//             </div>

//           </div>

//           {/* ── RIGHT COLUMN — Sticky Sidebar ── */}
//           <div className="lg:w-1/3">
//             <div className="sticky top-32 bg-white rounded-2xl border border-slate-200 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
//               <h3 className="text-base font-black text-slate-900 mb-5">Your Stay</h3>

//               {/* Dates */}
//               <div className="flex border border-slate-200 rounded-xl overflow-hidden mb-3">
//                 <div className="flex-1 p-3 bg-slate-50/50 border-r border-slate-200">
//                   <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Check-In</p>
//                   <p className="font-bold text-slate-900 text-sm">{checkIn || "Select date"}</p>
//                 </div>
//                 <div className="flex-1 p-3 bg-slate-50/50">
//                   <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Check-Out</p>
//                   <p className="font-bold text-slate-900 text-sm">{checkOut || "Select date"}</p>
//                 </div>
//               </div>

//               <div className="p-3 bg-slate-50/50 border border-slate-200 rounded-xl mb-5">
//                 <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Guests</p>
//                 <p className="font-bold text-slate-900 text-sm flex items-center gap-2">
//                   <Users className="w-4 h-4 text-blue-600" />
//                   {adults} Adult{adults > 1 ? "s" : ""} · {children} Child{children > 0 ? "ren" : ""} · {rooms} Room{rooms > 1 ? "s" : ""}
//                 </p>
//               </div>

//               {/* Min rate */}
//               {liveHotelData?.minRate && (
//                 <div className="py-4 mb-5 border-t border-slate-100">
//                   <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Starting from</p>
//                   <p className="text-3xl font-black text-slate-900 leading-none tracking-tight">
//                     {formatPrice(Math.round(Number(liveHotelData.minRate) * CONVERSION_RATE))}
//                   </p>
//                   <p className="text-xs text-slate-400 mt-1">Total price · incl. taxes</p>
//                 </div>
//               )}

//               <button
//                 onClick={() => scrollToSection("rooms")}
//                 className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-black rounded-xl shadow-md shadow-blue-600/20 transition-all hover:shadow-lg text-sm"
//               >
//                 Select a Room ↓
//               </button>

//               {/* Board plans mini */}
//               {boards.length > 0 && (
//                 <div className="mt-5 pt-4 border-t border-slate-100">
//                   <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Board Plans Offered</p>
//                   <div className="space-y-1.5">
//                     {boards.map((b, i) => (
//                       <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
//                         <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
//                         {b.description?.content || b.code}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Accommodation type */}
//               {hotel.accommodationType?.typeDescription && (
//                 <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
//                   <Building2 className="w-4 h-4 text-slate-400" />
//                   <span className="text-xs font-semibold text-slate-500">{hotel.accommodationType.typeDescription}</span>
//                 </div>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* ── Lightbox ── */}
//       {showLightbox && galleryImages.length > 0 && (
//         <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 lg:p-8 backdrop-blur-xl">
//           <button
//             onClick={() => setShowLightbox(false)}
//             className="absolute top-6 right-6 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
//           >
//             <X className="w-6 h-6" />
//           </button>

//           <div className="relative w-full max-w-6xl h-full max-h-[82vh] flex items-center justify-center">
//             <img
//               src={galleryImages[lightboxIndex]?.url || buildImageUrl(galleryImages[lightboxIndex]?.path)}
//               alt={galleryImages[lightboxIndex]?.description || "Gallery"}
//               className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
//             />
//             <button
//               onClick={() => setLightboxIndex((p) => (p === 0 ? galleryImages.length - 1 : p - 1))}
//               className="absolute left-0 md:-left-14 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
//             >
//               <ChevronLeft className="w-8 h-8" />
//             </button>
//             <button
//               onClick={() => setLightboxIndex((p) => (p === galleryImages.length - 1 ? 0 : p + 1))}
//               className="absolute right-0 md:-right-14 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
//             >
//               <ChevronRight className="w-8 h-8" />
//             </button>
//           </div>

//           {/* Image metadata */}
//           <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-3 items-center">
//             {galleryImages[lightboxIndex]?.type?.code && (
//               <span className={`text-xs font-bold px-3 py-1 rounded-full ${IMAGE_TYPE_COLORS[galleryImages[lightboxIndex].type.code] || "bg-white/20 text-white"}`}>
//                 {galleryImages[lightboxIndex].type.description?.content || galleryImages[lightboxIndex].type.code}
//               </span>
//             )}
//             {galleryImages[lightboxIndex]?.description && (
//               <span className="text-white/60 text-sm font-medium">
//                 {galleryImages[lightboxIndex].description}
//               </span>
//             )}
//           </div>

//           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 font-bold tracking-widest rounded-full backdrop-blur text-sm border border-white/10">
//             {lightboxIndex + 1} / {galleryImages.length}
//           </div>
//         </div>
//       )}

//       {/* ── Booking Modal ── */}
//       <HotelBookingModal
//         isOpen={!!bookingRate}
//         onClose={() => { setBookingRate(null); setBookingRoom(""); }}
//         rate={bookingRate}
//         roomName={bookingRoom}
//         hotelName={hName}
//         checkIn={checkIn}
//         checkOut={checkOut}
//       />

//     </div>
//   );
// };

// export default HotelDetailPage;



















import React, { useState, useEffect, useRef } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import {
  Star, MapPin, Users, Phone, Mail, Globe, ArrowLeft,
  Building2, X, ChevronLeft, ChevronRight, Image as ImageIcon,
  Wifi, Coffee, Utensils, Car, Dumbbell, Waves, Tv, Wind,
  BedDouble, BedSingle, ShowerHead, Bath, Thermometer, Shield,
  DoorOpen, Maximize2, Layers, CheckCircle2, XCircle, Info,
  ChevronDown, ChevronUp, Hash, Cigarette, Accessibility,
  MonitorPlay, Phone as PhoneIcon, Fan, Lock
} from "lucide-react";
import {
  getHotelDetail, getHotelImages, searchHotels
} from "../../../../api/hotelApi";
import HotelBookingModal from "../components/HotelBookingModal";

const CONVERSION_RATE = 108.6;

const IMAGE_BASE_URL = "https://photos.hotelbeds.com/giata/";

const BOARD_LABELS = {
  RO: "Room Only",
  BB: "Bed & Breakfast",
  DB: "Buffet Breakfast",
  HB: "Half Board",
  FB: "Full Board",
  AI: "All Inclusive",
};

const BOARD_COLORS = {
  RO: "bg-slate-100 text-slate-700",
  BB: "bg-amber-50 text-amber-700",
  DB: "bg-amber-50 text-amber-700",
  HB: "bg-orange-50 text-orange-700",
  FB: "bg-green-50 text-green-800",
  AI: "bg-emerald-50 text-emerald-800",
};

const formatPrice = (price, currency = "INR") => {
  if (price == null) return "—";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
};

const buildImageUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  // Remove any leading slashes to avoid double slashes
  const cleanPath = path.replace(/^\/+/, '');
  return `${IMAGE_BASE_URL}${cleanPath}`;
};

const getStarCount = (categoryCode) => {
  if (!categoryCode) return 0;
  const match = categoryCode.match(/(\d)/);
  return match ? Number(match[1]) : 0;
};

/* ── Facility icon mapper ── */
const FACILITY_ICON_MAP = {
  wifi: <Wifi className="w-4 h-4" />,
  internet: <Wifi className="w-4 h-4" />,
  restaurant: <Utensils className="w-4 h-4" />,
  dining: <Utensils className="w-4 h-4" />,
  parking: <Car className="w-4 h-4" />,
  fitness: <Dumbbell className="w-4 h-4" />,
  gym: <Dumbbell className="w-4 h-4" />,
  pool: <Waves className="w-4 h-4" />,
  swim: <Waves className="w-4 h-4" />,
  tv: <Tv className="w-4 h-4" />,
  television: <Tv className="w-4 h-4" />,
  "air conditioning": <Wind className="w-4 h-4" />,
  air: <Wind className="w-4 h-4" />,
  coffee: <Coffee className="w-4 h-4" />,
  bar: <Coffee className="w-4 h-4" />,
  shower: <ShowerHead className="w-4 h-4" />,
  bathtub: <Bath className="w-4 h-4" />,
  bath: <Bath className="w-4 h-4" />,
  hairdryer: <Wind className="w-4 h-4" />,
  safe: <Lock className="w-4 h-4" />,
  balcony: <DoorOpen className="w-4 h-4" />,
  terrace: <DoorOpen className="w-4 h-4" />,
  desk: <Layers className="w-4 h-4" />,
  telephone: <PhoneIcon className="w-4 h-4" />,
  fan: <Fan className="w-4 h-4" />,
  smoking: <Cigarette className="w-4 h-4" />,
  wheelchair: <Accessibility className="w-4 h-4" />,
};

const getFacilityIcon = (name = "") => {
  const lower = name.toLowerCase();
  for (const [key, icon] of Object.entries(FACILITY_ICON_MAP)) {
    if (lower.includes(key)) return icon;
  }
  return <CheckCircle2 className="w-4 h-4" />;
};

/* ── Bed type icon ── */
const getBedIcon = (desc = "") => {
  const lower = desc.toLowerCase();
  if (lower.includes("double") || lower.includes("queen") || lower.includes("king"))
    return <BedDouble className="w-5 h-5 text-indigo-500" />;
  return <BedSingle className="w-5 h-5 text-indigo-500" />;
};

/* ── Image type badge colors ── */
const IMAGE_TYPE_COLORS = {
  HAB: "bg-indigo-100 text-indigo-700",
  COM: "bg-amber-100 text-amber-700",
  PIS: "bg-cyan-100 text-cyan-700",
  BAR: "bg-purple-100 text-purple-700",
  RES: "bg-orange-100 text-orange-700",
  EXT: "bg-green-100 text-green-700",
};

/* ════════════════════════════════════════════
   Room Facility Pill
═══════════════════════════════════════════ */
const FacilityPill = ({ fac }) => {
  const name = fac.description?.content || fac.name || "";
  const isNo = fac.indYesOrNo === false || fac.indLogic === false;
  const isFee = fac.indFee === true;
  const number = fac.number;

  if (isNo) return null;

  const label = number && number > 0
    ? `${number} ${name}`
    : name;

  return (
    <div className="flex items-center gap-2 py-1.5 px-3 bg-slate-50 border border-slate-100 rounded-lg text-xs text-slate-700 font-medium">
      <span className="text-slate-400">{getFacilityIcon(name)}</span>
      <span>{label}</span>
      {isFee && <span className="text-amber-600 text-[10px] font-semibold">(Fee)</span>}
    </div>
  );
};

/* ════════════════════════════════════════════
   Room Card (static room type info)
═══════════════════════════════════════════ */
const RoomTypeCard = ({ room, roomImages }) => {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const roomFacilities = (room.roomFacilities || []).filter(
    (f) => f.indYesOrNo !== false && f.indLogic !== false
  );
  const bedConfig = room.roomStays?.find((s) => s.stayType === "BED");
  const roomSizeFac = (room.roomFacilities || []).find((f) => f.facilityCode === 295);
  const roomSize = roomSizeFac?.number;

  const myImages = roomImages[room.roomCode] || [];
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
      {/* Room Image Strip */}
      {myImages.length > 0 && !imgError ? (
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <img
            src={buildImageUrl(myImages[imgIdx]?.path)}
            alt={room.description}
            className="w-full h-full object-cover"
            onError={(e) => { 
              console.error(`Failed to load image: ${buildImageUrl(myImages[imgIdx]?.path)}`);
              if (imgIdx < myImages.length - 1) {
                setImgIdx(imgIdx + 1);
              } else {
                setImgError(true);
              }
            }}
            onLoad={() => console.log(`Image loaded: ${buildImageUrl(myImages[imgIdx]?.path)}`)}
          />
          {myImages.length > 1 && (
            <>
              <button
                onClick={() => setImgIdx((p) => (p === 0 ? myImages.length - 1 : p - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setImgIdx((p) => (p === myImages.length - 1 ? 0 : p + 1))}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {myImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === imgIdx ? "bg-white" : "bg-white/40"}`}
                  />
                ))}
              </div>
            </>
          )}
          {/* Image type badge */}
          {myImages[imgIdx]?.type?.code && (
            <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${IMAGE_TYPE_COLORS[myImages[imgIdx].type.code] || "bg-white/80 text-slate-700"}`}>
              {myImages[imgIdx].type.description?.content || myImages[imgIdx].type.code}
            </span>
          )}
        </div>
      ) : (
        <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
          <BedDouble className="w-8 h-8 text-slate-300" />
        </div>
      )}

      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <h4 className="font-bold text-slate-900 text-sm leading-tight">{room.description}</h4>
            <span className="text-[10px] text-slate-400 font-mono uppercase mt-0.5 block">{room.roomCode}</span>
          </div>
          {roomSize && (
            <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold shrink-0">
              <Maximize2 className="w-3 h-3" />
              {roomSize} m²
            </div>
          )}
        </div>

        {/* Occupancy badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">
            <Users className="w-3 h-3" />
            Max {room.maxAdults} adults
          </span>
          {room.maxChildren > 0 && (
            <span className="flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">
              <Users className="w-3 h-3" />
              {room.maxChildren} children
            </span>
          )}
        </div>

        {/* Bed config */}
        {bedConfig?.roomStayFacilities?.map((bed, i) => (
          <div key={i} className="flex items-center gap-2 mb-3 text-sm text-slate-700">
            {getBedIcon(bed.description?.content || "")}
            <span className="font-medium text-slate-800">
              {bed.number}× {bed.description?.content}
            </span>
          </div>
        ))}

        {/* Top facilities (always visible) */}
        {roomFacilities.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {roomFacilities.slice(0, expanded ? roomFacilities.length : 4).map((fac, i) => (
              <FacilityPill key={i} fac={fac} />
            ))}
          </div>
        )}

        {roomFacilities.length > 4 && (
          <button
            onClick={() => setExpanded((p) => !p)}
            className="mt-2 text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            {expanded ? "Show less" : `+${roomFacilities.length - 4} more amenities`}
          </button>
        )}
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════
   Rate Row (live rate)
═══════════════════════════════════════════ */
const RateRow = ({ rate, roomName, onBook }) => {
  const isNonRefundable = rate.rateClass === "NRF";
  const priceINR = Math.round(Number(rate.net) * CONVERSION_RATE);
  const boardLabel = BOARD_LABELS[rate.boardCode] || rate.boardName || rate.boardCode;
  const boardColor = BOARD_COLORS[rate.boardCode] || "bg-slate-100 text-slate-700";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-b border-slate-50 last:border-0 last:pb-0">
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase rounded-lg ${boardColor}`}>
            {boardLabel}
          </span>
          <span
            className={`px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase rounded-lg ${
              isNonRefundable ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-700"
            }`}
          >
            {isNonRefundable ? "Non-refundable" : "Free cancellation"}
          </span>
        </div>

        {!isNonRefundable && rate.cancellationPolicies?.[0] && (
          <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Cancel free before{" "}
            {new Date(rate.cancellationPolicies[0].from).toLocaleDateString("en-IN", {
              day: "numeric", month: "short",
            })}
          </p>
        )}
        {isNonRefundable && (
          <p className="text-xs text-red-500 font-medium flex items-center gap-1">
            <XCircle className="w-3.5 h-3.5" />
            Non-refundable at any time
          </p>
        )}
        {rate.taxes?.taxes?.length > 0 && (
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <Info className="w-3 h-3" />
            +{rate.taxes.taxes.map((t) => `${t.amount} ${t.currency} ${t.subType || "tax"}`).join(", ")} at hotel
          </p>
        )}
      </div>

      <div className="flex sm:flex-col items-center sm:items-end gap-3 justify-between sm:justify-start">
        <div className="text-right">
          <p className="text-xl font-black text-slate-900 tracking-tight leading-none">
            {formatPrice(priceINR)}
          </p>
          <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mt-0.5">
            Total · INR
          </p>
        </div>
        <button
          onClick={() => onBook(rate, roomName)}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow-md"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════
   Live Room Card (with rates)
═══════════════════════════════════════════ */
/* ════════════════════════════════════════════
   Live Room Card (with rates) - FIXED VERSION
═══════════════════════════════════════════ */
const LiveRoomCard = ({ room, onBook, roomImages, staticRooms }) => {
  const [ratesExpanded, setRatesExpanded] = useState(true);
  const [imgError, setImgError] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  
  const rates = room.rates || [];

  // Try to match with static room data for extra info
  const staticRoom = staticRooms.find(
    (sr) => sr.roomCode === room.code || 
            sr.description?.toLowerCase() === room.name?.toLowerCase() ||
            sr.roomCode === room.roomCode
  );

  // CRITICAL FIX: Try multiple possible keys to find images
  let myImages = [];
  
  // Try by room.code (from live API)
  if (room.code && roomImages[room.code]) {
    myImages = roomImages[room.code];
  }
  // Try by room.roomCode (alternative field)
  else if (room.roomCode && roomImages[room.roomCode]) {
    myImages = roomImages[room.roomCode];
  }
  // Try by static room's roomCode
  else if (staticRoom?.roomCode && roomImages[staticRoom.roomCode]) {
    myImages = roomImages[staticRoom.roomCode];
  }
  // Try to find by matching any key that contains the room code pattern
  else if (room.code) {
    const matchingKey = Object.keys(roomImages).find(key => 
      key.includes(room.code) || room.code.includes(key)
    );
    if (matchingKey) {
      myImages = roomImages[matchingKey];
    }
  }
  
  // Log for debugging
  console.log(`LiveRoomCard for ${room.name} (code: ${room.code}):`, {
    roomCode: room.code,
    staticRoomCode: staticRoom?.roomCode,
    imagesFound: myImages.length,
    availableKeys: Object.keys(roomImages)
  });

  const finalImages = myImages;

  const roomSize = staticRoom?.roomFacilities?.find((f) => f.facilityCode === 295)?.number;
  const bedConfig = staticRoom?.roomStays?.find((s) => s.stayType === "BED");
  const keyFacilities = (staticRoom?.roomFacilities || [])
    .filter((f) => f.indYesOrNo !== false && f.indLogic !== false)
    .slice(0, 6);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
      {/* Room image strip - FIXED with better error handling */}
      {finalImages.length > 0 && !imgError ? (
        <div className="relative h-52 overflow-hidden bg-slate-100">
          <img
            src={buildImageUrl(finalImages[imgIdx]?.path || finalImages[imgIdx]?.url)}
            alt={room.name}
            className="w-full h-full object-cover"
            onError={(e) => { 
              console.error(`Failed to load room image: ${buildImageUrl(finalImages[imgIdx]?.path)}`);
              if (imgIdx < finalImages.length - 1) {
                setImgIdx(imgIdx + 1);
              } else {
                setImgError(true);
              }
            }}
            onLoad={() => console.log(`Room image loaded successfully: ${buildImageUrl(finalImages[imgIdx]?.path)}`)}
          />
          {finalImages.length > 1 && (
            <>
              <button
                onClick={() => setImgIdx((p) => (p === 0 ? finalImages.length - 1 : p - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full hover:bg-black/60"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setImgIdx((p) => (p === finalImages.length - 1 ? 0 : p + 1))}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full hover:bg-black/60"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full font-medium">
                {imgIdx + 1}/{finalImages.length}
              </span>
            </>
          )}
          {finalImages[imgIdx]?.type?.code && (
            <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-full ${IMAGE_TYPE_COLORS[finalImages[imgIdx].type.code] || "bg-white/80 text-slate-700"}`}>
              {finalImages[imgIdx].type.description?.content || finalImages[imgIdx].type.code}
            </span>
          )}
        </div>
      ) : (
        <div className="h-36 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
          <BedDouble className="w-10 h-10 text-indigo-200" />
        </div>
      )}

      {/* Rest of the component remains the same */}
      <div className="px-5 pt-4 pb-3 border-b border-slate-50">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="font-bold text-slate-900 text-base leading-tight">{room.name}</h3>
            <span className="text-[10px] text-slate-400 font-mono">{room.code}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {roomSize && (
              <span className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold">
                <Maximize2 className="w-3 h-3" />
                {roomSize}m²
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {bedConfig?.roomStayFacilities?.map((bed, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
              {getBedIcon(bed.description?.content || "")}
              {bed.number}× {bed.description?.content}
            </div>
          ))}
          {staticRoom && (
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Users className="w-3.5 h-3.5" />
              Up to {staticRoom.maxAdults} adults
              {staticRoom.maxChildren > 0 ? `, ${staticRoom.maxChildren} children` : ""}
            </span>
          )}
        </div>

        {keyFacilities.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {keyFacilities.map((fac, i) => {
              const name = fac.description?.content || "";
              return (
                <span key={i} className="flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
                  <span className="text-slate-400">{getFacilityIcon(name)}</span>
                  {name}
                </span>
              );
            })}
          </div>
        )}
      </div>

      <div className="px-5 pb-4">
        <button
          onClick={() => setRatesExpanded((p) => !p)}
          className="flex items-center justify-between w-full py-3 text-sm font-bold text-slate-700 hover:text-slate-900"
        >
          <span>{rates.length} Rate{rates.length !== 1 ? "s" : ""} Available</span>
          {ratesExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {ratesExpanded && rates.map((rate, rIdx) => (
          <RateRow
            key={rate.rateKey || rIdx}
            rate={rate}
            roomName={room.name}
            onBook={onBook}
          />
        ))}
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════
   Hotel Boards Section
═══════════════════════════════════════════ */
const BoardsSection = ({ boards }) => {
  if (!boards?.length) return null;
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest self-center mr-1">Board Plans:</span>
      {boards.map((b, i) => (
        <span
          key={i}
          className={`px-3 py-1.5 text-xs font-bold rounded-xl border ${BOARD_COLORS[b.code] || "bg-slate-50 text-slate-700"} border-current/10`}
        >
          {b.description?.content || b.code}
        </span>
      ))}
    </div>
  );
};

/* ════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
const HotelDetailPage = () => {
  const { hotelCode } = useParams();
  const [searchParams] = useSearchParams();

  const checkIn  = searchParams.get("checkIn")   || "";
  const checkOut = searchParams.get("checkOut")  || "";
  const adults   = Number(searchParams.get("adults")   || "2");
  const children = Number(searchParams.get("children") || "0");
  const rooms    = Number(searchParams.get("rooms")    || "1");

  const [hotel, setHotel]                 = useState(null);
  const [images, setImages]               = useState([]);
  const [liveHotelData, setLiveHotelData] = useState(null);
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState(null);

  const [activeTab, setActiveTab] = useState("overview");

  // Lightbox
  const [showLightbox, setShowLightbox]   = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Booking modal
  const [bookingRate, setBookingRate] = useState(null);
  const [bookingRoom, setBookingRoom] = useState("");

  // Section refs
  const overviewRef   = useRef(null);
  const roomsRef      = useRef(null);
  const facilitiesRef = useRef(null);
  const roomTypesRef  = useRef(null);
  const sectionRefs   = {
    overview: overviewRef,
    rooms: roomsRef,
    "room-types": roomTypesRef,
    facilities: facilitiesRef,
  };

  useEffect(() => {
  if (!hotelCode) return;
  let cancelled = false;
  setLoading(true);

  const fetchData = async () => {
    try {
      console.log("Fetching hotel details for code:", hotelCode);
      const detailRes = await getHotelDetail(hotelCode);
      if (cancelled) return;
      const hData = detailRes?.hotel;
      console.log("Hotel data received:", hData?.name?.content);
      setHotel(hData);

      // CRITICAL FIX: Process images from hotel detail response FIRST
      let processedImages = [];
      
      if (hData?.images && hData.images.length > 0) {
        console.log(`Found ${hData.images.length} images in hotel detail`);
        processedImages = hData.images.map((img) => ({
          url: buildImageUrl(img.path),
          path: img.path,
          description: img.type?.description?.content || "Hotel Image",
          type: img.type,
          roomCode: img.roomCode,
          characteristicCode: img.characteristicCode,
          order: img.order,
          visualOrder: img.visualOrder
        }));
        console.log("Processed images from hotel detail:", processedImages.map(i => ({ 
          roomCode: i.roomCode, 
          path: i.path 
        })));
      }

      // Try to fetch additional images from images API (but don't let it overwrite)
      try {
        console.log("Fetching additional images for hotel:", hotelCode);
        const imagesRes = await getHotelImages(hotelCode);
        if (!cancelled && imagesRes?.images?.length > 0) {
          console.log(`Received ${imagesRes.images.length} images from images API`);
          const additionalImages = imagesRes.images.map((img) => ({
            url: img.url || buildImageUrl(img.path),
            path: img.path,
            description: img.description || img.type?.description?.content || "Hotel Image",
            type: img.type,
            roomCode: img.roomCode,
            characteristicCode: img.characteristicCode,
            order: img.order,
            visualOrder: img.visualOrder
          }));
          
          // Merge images, avoiding duplicates
          const allImages = [...processedImages, ...additionalImages];
          const uniqueImages = Array.from(
            new Map(allImages.map(img => [img.path, img])).values()
          );
          processedImages = uniqueImages;
          console.log(`Merged to ${processedImages.length} unique images`);
        }
      } catch (imgErr) {
        console.error("Error fetching additional images:", imgErr);
      }

      // Sort images
      const sorted = [...processedImages].sort(
        (a, b) => (a.visualOrder ?? a.order ?? 0) - (b.visualOrder ?? b.order ?? 0)
      );
      
      console.log("Final processed images:", sorted.map(i => ({ 
        roomCode: i.roomCode, 
        path: i.path,
        hasPath: !!i.path 
      })));
      
      setImages(sorted);

      // Live room rates
      if (hData && checkIn && checkOut) {
        const destCode = hData.destination?.code || hData.destinationCode;
        if (destCode) {
          try {
            console.log("Fetching live rates for destination:", destCode);
            const liveSearch = await searchHotels({
              destinationCode: destCode,
              checkIn,
              checkOut,
              roomCount: rooms,
              adults,
              children,
              maxHotels: 50,
            });
            if (!cancelled && liveSearch?.hotels?.hotels) {
              const liveHotel = liveSearch.hotels.hotels.find(
                (h) => String(h.code) === String(hotelCode)
              );
              setLiveHotelData(liveHotel || null);
              console.log("Live hotel data:", liveHotel ? "Found" : "Not found");
            }
          } catch (liveErr) {
            console.warn("Live rates fetch failed", liveErr);
          }
        }
      }
    } catch (err) {
      console.error("Error fetching hotel details:", err);
      if (!cancelled) setError("Failed to load hotel details.");
    } finally {
      if (!cancelled) setLoading(false);
    }
  };

  fetchData();
  return () => { cancelled = true; };
}, [hotelCode, checkIn, checkOut, adults, children, rooms]);

  // Build a map: roomCode → images[]
 // In the main component, after roomImageMap is created
const roomImageMap = React.useMemo(() => {
  const map = {};
  console.log("Building room image map from", images.length, "images");
  images.forEach((img) => {
    if (img.roomCode) {
      if (!map[img.roomCode]) map[img.roomCode] = [];
      map[img.roomCode].push(img);
      console.log(`Added image to room ${img.roomCode}, total: ${map[img.roomCode].length}`);
    }
  });
  console.log("Room image map keys:", Object.keys(map));
  console.log("Full room image map:", map);
  return map;
}, [images]);

  // General images (no roomCode)
  const generalImages = images.filter((img) => !img.roomCode);

  const scrollToSection = (tabName) => {
    setActiveTab(tabName);
    const ref = sectionRefs[tabName];
    if (!ref?.current) return;
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleBook = (rate, roomName) => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.setItem("intendedDestination", window.location.pathname + window.location.search);
      window.location.href = "/login";
      return;
    }
    setBookingRate(rate);
    setBookingRoom(roomName);
  };

  /* ── Loading skeleton ── */
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 animate-pulse">
        <div className="h-16 bg-white border-b border-slate-200" />
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
          <div className="h-[400px] bg-slate-200 rounded-2xl" />
          <div className="flex gap-8">
            <div className="w-2/3 space-y-4">
              <div className="h-10 w-1/2 bg-slate-200 rounded-xl" />
              <div className="h-4 w-1/4 bg-slate-200 rounded" />
              <div className="h-32 bg-slate-200 rounded-2xl mt-6" />
            </div>
            <div className="w-1/3">
              <div className="h-64 bg-slate-200 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !hotel) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg w-full">
          <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-6" />
          <h2 className="text-xl font-semibold text-slate-800 mb-3">{error || "Hotel not found"}</h2>
          <button
            onClick={() => window.close()}
            className="mt-6 px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full"
          >
            Close Tab
          </button>
        </div>
      </div>
    );
  }

  const hName     = hotel.name?.content || hotel.name;
  const hStars    = getStarCount(hotel.category?.code || hotel.categoryCode);
  const hDesc     = hotel.description?.content || hotel.description;
  const hAddr     = hotel.address?.content || hotel.address;
  const hCity     = hotel.city?.content || hotel.city;
  const liveRooms = liveHotelData?.rooms || [];
  const facilities = hotel.facilities || [];
  const allRooms   = hotel.rooms || [];
  const boards     = hotel.boards || [];

  const phoneNumber =
    hotel.phones?.find((p) => p.phoneType === "PHONEHOTEL")?.phoneNumber ||
    hotel.phones?.[0]?.phoneNumber;
  const email   = hotel.email;
  const website = hotel.web;

  // Gallery images for lightbox (general + all)
  const galleryImages = generalImages.length > 0 ? generalImages : images;

  const TABS = [
    { key: "overview",    label: "Overview" },
    { key: "rooms",       label: `Rooms${liveRooms.length > 0 ? ` (${liveRooms.length})` : ""}` },
    { key: "room-types",  label: "Room Types" },
    { key: "facilities",  label: "Facilities" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">

      {/* ── Top Bar ── */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
          <button
            onClick={() => window.close()}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold text-sm transition-colors shrink-0"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="hidden md:block text-slate-900 font-bold truncate max-w-md text-center text-sm">
            {hName}
          </div>
          <div className="text-xs text-slate-500 font-medium text-right shrink-0 leading-relaxed">
            {checkIn && checkOut ? `${checkIn} — ${checkOut}` : "Dates not selected"}<br />
            {adults} Adult{adults > 1 ? "s" : ""} · {children} Child{children !== 1 ? "ren" : ""} · {rooms} Room{rooms > 1 ? "s" : ""}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-6">

        {/* ── Image Gallery ── */}
        {galleryImages.length > 0 && (
          <div className="flex flex-col md:flex-row gap-2 h-[300px] md:h-[440px] rounded-2xl overflow-hidden mb-6 relative">
            {/* Hero */}
            <div
              className="md:w-3/5 h-full relative cursor-pointer group overflow-hidden"
              onClick={() => { setLightboxIndex(0); setShowLightbox(true); }}
            >
              <img
                src={galleryImages[0]?.url || buildImageUrl(galleryImages[0]?.path)}
                alt={galleryImages[0]?.description || "Hotel"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => console.error("Hero image failed to load:", galleryImages[0]?.path)}
              />
              {/* Type label */}
              {galleryImages[0]?.type?.code && (
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm ${IMAGE_TYPE_COLORS[galleryImages[0].type.code] || "bg-white/80 text-slate-700"}`}>
                  {galleryImages[0].type.description?.content || galleryImages[0].type.code}
                </span>
              )}
            </div>

            {/* Thumbnail grid */}
            {galleryImages.length > 1 && (
              <div className="hidden md:grid w-2/5 grid-cols-2 grid-rows-2 gap-2 h-full relative">
                {galleryImages.slice(1, 5).map((img, i) => (
                  <div
                    key={i}
                    className="w-full h-full relative cursor-pointer overflow-hidden group"
                    onClick={() => { setLightboxIndex(i + 1); setShowLightbox(true); }}
                  >
                    <img
                      src={img.url || buildImageUrl(img.path)}
                      alt={img.description || "Hotel"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => console.error("Thumbnail image failed to load:", img.path)}
                    />
                    {img.type?.code && (
                      <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${IMAGE_TYPE_COLORS[img.type.code] || "bg-white/80 text-slate-700"}`}>
                        {img.type.description?.content || img.type.code}
                      </span>
                    )}
                  </div>
                ))}
                {galleryImages.length > 5 && (
                  <button
                    onClick={() => { setLightboxIndex(0); setShowLightbox(true); }}
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-slate-900 px-4 py-2 font-bold text-sm rounded-xl shadow-lg hover:bg-white flex items-center gap-2"
                  >
                    <ImageIcon className="w-4 h-4" /> All {galleryImages.length} photos
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* ── Sticky Tabs ── */}
        <div className="bg-slate-50 sticky top-16 z-30 pt-3 pb-0">
          <div className="flex gap-6 border-b border-slate-200 px-1 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => scrollToSection(tab.key)}
                className={`pb-3 text-sm font-semibold whitespace-nowrap transition-colors relative ${
                  activeTab === tab.key ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Two Column Layout ── */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:w-2/3 space-y-14">

            {/* OVERVIEW */}
            <div ref={overviewRef} className="scroll-mt-32">
              {/* Stars + badges */}
              <div className="flex items-center gap-2 flex-wrap mb-3">
                {hStars > 0 && (
                  <div className="flex items-center gap-0.5">
                    {[...Array(hStars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                )}
                {hotel.category?.description?.content && (
                  <span className="text-xs font-bold text-slate-600 bg-slate-200/70 px-2.5 py-1 rounded-lg">
                    {hotel.category.description.content}
                  </span>
                )}
                {hotel.ranking > 0 && (
                  <span className="text-xs font-bold text-white bg-blue-600 px-2.5 py-1 rounded-lg shadow-sm">
                    Rank #{hotel.ranking}
                  </span>
                )}
                {hotel.zone?.description?.content && (
                  <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-lg">
                    {hotel.zone.description.content}
                  </span>
                )}
              </div>

              <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
                {hName}
              </h1>

              <p className="flex items-start gap-2 text-slate-600 mb-4 text-sm">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  {hAddr}
                  {hotel.postalCode ? ` ${hotel.postalCode}` : ""}
                  {hCity ? `, ${hCity}` : ""}
                  {hotel.state?.name ? `, ${hotel.state.name}` : ""}
                  {hotel.country?.description?.content ? `, ${hotel.country.description.content}` : ""}
                </span>
              </p>

              {/* Segment tags */}
              {hotel.segments?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {hotel.segments.map((seg, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full border border-indigo-100"
                    >
                      {seg.description?.content || "Hotel"}
                    </span>
                  ))}
                </div>
              )}

              {/* Board plans */}
              <BoardsSection boards={boards} />

              {/* Description */}
              <div className="text-slate-700 leading-relaxed text-sm bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mb-6">
                <p>{hDesc}</p>
              </div>

              {/* Contact */}
              {(phoneNumber || email || website) && (
                <div className="flex flex-wrap gap-4 p-4 bg-white border border-slate-100 rounded-2xl mb-6">
                  {phoneNumber && (
                    <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 text-sm text-slate-700 hover:text-blue-600 font-medium transition-colors">
                      <Phone className="w-4 h-4 text-blue-500" /> {phoneNumber}
                    </a>
                  )}
                  {email && (
                    <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm text-slate-700 hover:text-blue-600 font-medium transition-colors">
                      <Mail className="w-4 h-4 text-blue-500" /> {email}
                    </a>
                  )}
                  {website && (
                    <a
                      href={website.startsWith("http") ? website : `https://${website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      <Globe className="w-4 h-4 text-blue-500" /> Website
                    </a>
                  )}
                  {hotel.license && (
                    <span className="flex items-center gap-2 text-sm text-slate-500">
                      <Hash className="w-4 h-4" /> License: {hotel.license}
                    </span>
                  )}
                </div>
              )}

              {/* Nearby Attractions */}
              {hotel.interestPoints?.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Nearby Attractions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {hotel.interestPoints.map((poi, idx) => {
                      const distKm = poi.distance > 1000
                        ? `${(poi.distance / 1000).toFixed(1)} km`
                        : `${poi.distance} m`;
                      return (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                          <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900 text-sm">{poi.poiName}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{distKm} away</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* LIVE ROOMS */}
            <div ref={roomsRef} className="scroll-mt-32">
              <div className="flex items-baseline gap-3 mb-6">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Available Rooms</h2>
                {liveRooms.length > 0 && (
                  <span className="text-sm font-semibold text-slate-500">{liveRooms.length} room type{liveRooms.length !== 1 ? "s" : ""} found</span>
                )}
              </div>

              {!checkIn || !checkOut ? (
                <div className="bg-blue-50 border border-blue-100 p-8 rounded-2xl text-center">
                  <p className="text-blue-800 font-semibold">Enter travel dates to see live availability and prices.</p>
                </div>
              ) : liveRooms.length > 0 ? (
                <div className="space-y-6">
                  {liveRooms.map((room, idx) => (
                    <LiveRoomCard
                      key={idx}
                      room={room}
                      onBook={handleBook}
                      roomImages={roomImageMap}
                      staticRooms={allRooms}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-slate-100 border border-slate-200 p-8 rounded-2xl text-center">
                  <p className="text-slate-500 font-semibold">No rooms available for the selected dates.</p>
                </div>
              )}
            </div>

            {/* ROOM TYPES (static catalog) */}
            <div ref={roomTypesRef} className="scroll-mt-32">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Room Types</h2>
              <p className="text-sm text-slate-500 mb-6">All room categories available at this property</p>

              {allRooms.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {allRooms.map((room, idx) => (
                    <RoomTypeCard
                      key={idx}
                      room={room}
                      roomImages={roomImageMap}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-500">No room type information available.</p>
              )}
            </div>

            {/* FACILITIES */}
            <div ref={facilitiesRef} className="scroll-mt-32">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-6">Facilities & Amenities</h2>

              {facilities.length > 0 ? (
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {facilities.map((fac, idx) => {
                      const facName = fac.description?.content || fac.name || "";
                      const number = fac.number;
                      const label = number && number > 0 ? `${number} ${facName}` : facName;
                      const icon = getFacilityIcon(facName);
                      return (
                        <div key={idx} className="flex items-center gap-3 py-2">
                          <span className="text-blue-500 shrink-0">{icon}</span>
                          <span className="text-sm font-medium text-slate-700">{label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-slate-500">No facilities data available.</p>
              )}
            </div>

          </div>

          {/* ── RIGHT COLUMN — Sticky Sidebar ── */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 bg-white rounded-2xl border border-slate-200 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <h3 className="text-base font-black text-slate-900 mb-5">Your Stay</h3>

              {/* Dates */}
              <div className="flex border border-slate-200 rounded-xl overflow-hidden mb-3">
                <div className="flex-1 p-3 bg-slate-50/50 border-r border-slate-200">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Check-In</p>
                  <p className="font-bold text-slate-900 text-sm">{checkIn || "Select date"}</p>
                </div>
                <div className="flex-1 p-3 bg-slate-50/50">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Check-Out</p>
                  <p className="font-bold text-slate-900 text-sm">{checkOut || "Select date"}</p>
                </div>
              </div>

              <div className="p-3 bg-slate-50/50 border border-slate-200 rounded-xl mb-5">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Guests</p>
                <p className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  {adults} Adult{adults > 1 ? "s" : ""} · {children} Child{children > 0 ? "ren" : ""} · {rooms} Room{rooms > 1 ? "s" : ""}
                </p>
              </div>

              {/* Min rate */}
              {liveHotelData?.minRate && (
                <div className="py-4 mb-5 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Starting from</p>
                  <p className="text-3xl font-black text-slate-900 leading-none tracking-tight">
                    {formatPrice(Math.round(Number(liveHotelData.minRate) * CONVERSION_RATE))}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Total price · incl. taxes</p>
                </div>
              )}

              <button
                onClick={() => scrollToSection("rooms")}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-black rounded-xl shadow-md shadow-blue-600/20 transition-all hover:shadow-lg text-sm"
              >
                Select a Room ↓
              </button>

              {/* Board plans mini */}
              {boards.length > 0 && (
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Board Plans Offered</p>
                  <div className="space-y-1.5">
                    {boards.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        {b.description?.content || b.code}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Accommodation type */}
              {hotel.accommodationType?.typeDescription && (
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-semibold text-slate-500">{hotel.accommodationType.typeDescription}</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* ── Lightbox ── */}
      {showLightbox && galleryImages.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 lg:p-8 backdrop-blur-xl">
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-6 right-6 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-6xl h-full max-h-[82vh] flex items-center justify-center">
            <img
              src={galleryImages[lightboxIndex]?.url || buildImageUrl(galleryImages[lightboxIndex]?.path)}
              alt={galleryImages[lightboxIndex]?.description || "Gallery"}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onError={(e) => console.error("Lightbox image failed to load:", galleryImages[lightboxIndex]?.path)}
            />
            <button
              onClick={() => setLightboxIndex((p) => (p === 0 ? galleryImages.length - 1 : p - 1))}
              className="absolute left-0 md:-left-14 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={() => setLightboxIndex((p) => (p === galleryImages.length - 1 ? 0 : p + 1))}
              className="absolute right-0 md:-right-14 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Image metadata */}
          <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-3 items-center">
            {galleryImages[lightboxIndex]?.type?.code && (
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${IMAGE_TYPE_COLORS[galleryImages[lightboxIndex].type.code] || "bg-white/20 text-white"}`}>
                {galleryImages[lightboxIndex].type.description?.content || galleryImages[lightboxIndex].type.code}
              </span>
            )}
            {galleryImages[lightboxIndex]?.description && (
              <span className="text-white/60 text-sm font-medium">
                {galleryImages[lightboxIndex].description}
              </span>
            )}
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 font-bold tracking-widest rounded-full backdrop-blur text-sm border border-white/10">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* ── Booking Modal ── */}
      <HotelBookingModal
        isOpen={!!bookingRate}
        onClose={() => { setBookingRate(null); setBookingRoom(""); }}
        rate={bookingRate}
        roomName={bookingRoom}
        hotelName={hName}
        checkIn={checkIn}
        checkOut={checkOut}
      />

    </div>
  );
};

export default HotelDetailPage;