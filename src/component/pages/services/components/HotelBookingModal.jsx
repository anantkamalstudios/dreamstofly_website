// import React, { useState } from "react";
// import { X, User, Mail, Phone, ShieldCheck, Loader2, CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
// import { createHotelOrder } from "../../../../api/hotelApi";

// const CONVERSION_RATE = 108.6;

// const BOARD_LABELS = {
//     RO: "Room Only",
//     BB: "Bed & Breakfast",
//     HB: "Half Board",
//     FB: "Full Board",
//     AI: "All Inclusive",
// };

// const formatPrice = (price, currency = "INR") => {
//     if (price == null) return "—";
//     return new Intl.NumberFormat("en-IN", {
//         style: "currency",
//         currency,
//         maximumFractionDigits: 0,
//     }).format(price);
// };

// /**
//  * HotelBookingModal
//  *
//  * Props:
//  *  - isOpen      {boolean}   Whether the modal is visible
//  *  - onClose     {function}  Called when the user closes/cancels
//  *  - rate        {object}    The rate object from liveRooms (contains rateKey, net, boardCode, etc.)
//  *  - roomName    {string}    Display name of the selected room
//  *  - hotelName   {string}    Display name of the hotel
//  *  - checkIn     {string}    e.g. "2026-06-07"
//  *  - checkOut    {string}    e.g. "2026-06-09"
//  */
// const HotelBookingModal = ({
//     isOpen,
//     onClose,
//     rate,
//     roomName,
//     hotelName,
//     checkIn,
//     checkOut,
// }) => {
//     const [step, setStep] = useState("form"); // "form" | "submitting" | "success" | "error"
//     const [errorMsg, setErrorMsg] = useState("");
//     const [orderId, setOrderId] = useState(null);

//     const [form, setForm] = useState({
//         holderName: "",
//         holderSurname: "",
//         email: "",
//         phone: "",
//     });

//     const [touched, setTouched] = useState({});

//     const priceINR = rate ? Math.round(Number(rate.net) * CONVERSION_RATE) : 0;
//     const isNonRefundable = rate?.rateClass === "NRF";

//     const validate = () => {
//         const errors = {};
//         if (!form.holderName.trim()) errors.holderName = "First name is required";
//         if (!form.holderSurname.trim()) errors.holderSurname = "Last name is required";
//         if (!form.email.trim()) errors.email = "Email is required";
//         else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = "Enter a valid email";
//         if (!form.phone.trim()) errors.phone = "Phone number is required";
//         return errors;
//     };

//     const errors = validate();
//     const isValid = Object.keys(errors).length === 0;

//     const handleBlur = (field) => setTouched((t) => ({ ...t, [field]: true }));

//     const handleChange = (field, value) => {
//         setForm((f) => ({ ...f, [field]: value }));
//     };

//     const handleSubmit = async () => {
//         setTouched({ holderName: true, holderSurname: true, email: true, phone: true });
//         if (!isValid) return;

//         setStep("submitting");
//         setErrorMsg("");

//         try {
//             const payload = {
//                 rateKey: rate.rateKey,
//                 holderName: form.holderName,
//                 holderSurname: form.holderSurname,
//                 email: form.email,
//                 phone: form.phone,
//                 conversionRate: CONVERSION_RATE,
//             };

//             const res = await createHotelOrder(payload);

//             if (res?.orderId) {
//                 setOrderId(res.orderId);

//                 // If Razorpay key is present, open Razorpay
//                 if (res.keyId) {
//                     const options = {
//                         key: res.keyId,
//                         order_id: res.orderId,
//                         amount: res.amount,
//                         currency: res.currency || "INR",
//                         name: "Hotel Booking",
//                         description: `${hotelName} — ${checkIn} to ${checkOut}`,
//                         prefill: {
//                             name: `${form.holderName} ${form.holderSurname}`,
//                             email: form.email,
//                             contact: form.phone,
//                         },
//                         handler: () => {
//                             setStep("success");
//                         },
//                         modal: {
//                             ondismiss: () => {
//                                 // Payment dismissed — stay on success (order was created)
//                                 setStep("success");
//                             },
//                         },
//                     };
//                     const razorpay = new window.Razorpay(options);
//                     razorpay.open();
//                 } else {
//                     setStep("success");
//                 }
//             } else {
//                 throw new Error("No order ID returned from server.");
//             }
//         } catch (err) {
//             console.error(err);
//             setErrorMsg(err?.response?.data?.message || err?.message || "Booking failed. Please try again.");
//             setStep("error");
//         }
//     };

//     const handleClose = () => {
//         // Reset state when modal is closed
//         setStep("form");
//         setForm({ holderName: "", holderSurname: "", email: "", phone: "" });
//         setTouched({});
//         setErrorMsg("");
//         setOrderId(null);
//         onClose();
//     };

//     if (!isOpen || !rate) return null;

//     return (
//         <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm">
//             <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');
//         .booking-modal { font-family: 'DM Sans', sans-serif; }
//         .booking-modal-serif { font-family: 'DM Serif Display', serif; }

//         @keyframes slideUp {
//           from { transform: translateY(40px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes checkPop {
//           0%   { transform: scale(0) rotate(-15deg); opacity: 0; }
//           60%  { transform: scale(1.2) rotate(4deg); opacity: 1; }
//           100% { transform: scale(1) rotate(0deg); opacity: 1; }
//         }
//         .modal-card {
//           animation: slideUp 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//         }
//         .check-pop {
//           animation: checkPop 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
//           opacity: 0;
//         }
//         .input-field {
//           transition: border-color 0.2s, box-shadow 0.2s;
//         }
//         .input-field:focus {
//           border-color: #1a1a2e;
//           box-shadow: 0 0 0 3px rgba(26, 26, 46, 0.08);
//           outline: none;
//         }
//         .input-field.error {
//           border-color: #ef4444;
//         }
//         .input-field.error:focus {
//           box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
//         }
//         .book-btn {
//           position: relative;
//           overflow: hidden;
//           transition: transform 0.15s, box-shadow 0.15s;
//         }
//         .book-btn:not(:disabled):hover {
//           transform: translateY(-1px);
//           box-shadow: 0 8px 24px rgba(26, 26, 46, 0.25);
//         }
//         .book-btn:not(:disabled):active {
//           transform: translateY(0);
//         }
//         .book-btn::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%);
//           pointer-events: none;
//         }
//       `}</style>

//             <div className="booking-modal modal-card w-full sm:max-w-lg bg-white sm:rounded-3xl shadow-2xl overflow-hidden max-h-[96vh] flex flex-col rounded-t-3xl">

//                 {/* ── Header ── */}
//                 <div className="relative px-7 pt-7 pb-5 border-b border-neutral-100 shrink-0">
//                     <div className="flex items-start justify-between">
//                         <div>
//                             <p className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-1">
//                                 Booking Details
//                             </p>
//                             <h2 className="booking-modal-serif text-2xl text-neutral-900 leading-tight">
//                                 {roomName || "Selected Room"}
//                             </h2>
//                             <p className="text-sm text-neutral-500 mt-0.5 font-medium">
//                                 {hotelName}
//                             </p>
//                         </div>
//                         <button
//                             onClick={handleClose}
//                             className="p-2 hover:bg-neutral-100 rounded-full transition-colors shrink-0 ml-4"
//                         >
//                             <X className="w-5 h-5 text-neutral-500" strokeWidth={1.5} />
//                         </button>
//                     </div>

//                     {/* Stay summary strip */}
//                     <div className="flex gap-3 mt-4">
//                         <div className="flex-1 bg-neutral-50 rounded-xl px-4 py-2.5 border border-neutral-100">
//                             <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-0.5">Check-in</p>
//                             <p className="text-sm font-semibold text-neutral-800">{checkIn || "—"}</p>
//                         </div>
//                         <div className="flex-1 bg-neutral-50 rounded-xl px-4 py-2.5 border border-neutral-100">
//                             <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-0.5">Check-out</p>
//                             <p className="text-sm font-semibold text-neutral-800">{checkOut || "—"}</p>
//                         </div>
//                         <div className="flex-1 bg-neutral-50 rounded-xl px-4 py-2.5 border border-neutral-100">
//                             <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-0.5">Board</p>
//                             <p className="text-sm font-semibold text-neutral-800 truncate">
//                                 {BOARD_LABELS[rate.boardCode] || rate.boardName || "—"}
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ── Body ── */}
//                 <div className="overflow-y-auto flex-1">

//                     {/* FORM STEP */}
//                     {(step === "form" || step === "submitting") && (
//                         <div className="px-7 py-6 space-y-5">
//                             <p className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-400">
//                                 Guest Information
//                             </p>

//                             {/* First + Last name */}
//                             <div className="grid grid-cols-2 gap-3">
//                                 <div>
//                                     <label className="block text-xs font-semibold text-neutral-600 mb-1.5">
//                                         First Name <span className="text-red-500">*</span>
//                                     </label>
//                                     <div className="relative">
//                                         <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
//                                         <input
//                                             type="text"
//                                             value={form.holderName}
//                                             onChange={(e) => handleChange("holderName", e.target.value)}
//                                             onBlur={() => handleBlur("holderName")}
//                                             placeholder="John"
//                                             className={`input-field w-full pl-9 pr-3 py-3 border rounded-xl text-sm text-neutral-900 placeholder:text-neutral-300 bg-white ${touched.holderName && errors.holderName ? "error border-red-300" : "border-neutral-200"
//                                                 }`}
//                                         />
//                                     </div>
//                                     {touched.holderName && errors.holderName && (
//                                         <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.holderName}</p>
//                                     )}
//                                 </div>

//                                 <div>
//                                     <label className="block text-xs font-semibold text-neutral-600 mb-1.5">
//                                         Last Name <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         value={form.holderSurname}
//                                         onChange={(e) => handleChange("holderSurname", e.target.value)}
//                                         onBlur={() => handleBlur("holderSurname")}
//                                         placeholder="Doe"
//                                         className={`input-field w-full px-3 py-3 border rounded-xl text-sm text-neutral-900 placeholder:text-neutral-300 bg-white ${touched.holderSurname && errors.holderSurname ? "error border-red-300" : "border-neutral-200"
//                                             }`}
//                                     />
//                                     {touched.holderSurname && errors.holderSurname && (
//                                         <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.holderSurname}</p>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Email */}
//                             <div>
//                                 <label className="block text-xs font-semibold text-neutral-600 mb-1.5">
//                                     Email Address <span className="text-red-500">*</span>
//                                 </label>
//                                 <div className="relative">
//                                     <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
//                                     <input
//                                         type="email"
//                                         value={form.email}
//                                         onChange={(e) => handleChange("email", e.target.value)}
//                                         onBlur={() => handleBlur("email")}
//                                         placeholder="john@example.com"
//                                         className={`input-field w-full pl-9 pr-3 py-3 border rounded-xl text-sm text-neutral-900 placeholder:text-neutral-300 bg-white ${touched.email && errors.email ? "error border-red-300" : "border-neutral-200"
//                                             }`}
//                                     />
//                                 </div>
//                                 {touched.email && errors.email && (
//                                     <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.email}</p>
//                                 )}
//                             </div>

//                             {/* Phone */}
//                             <div>
//                                 <label className="block text-xs font-semibold text-neutral-600 mb-1.5">
//                                     Phone Number <span className="text-red-500">*</span>
//                                 </label>
//                                 <div className="relative">
//                                     <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
//                                     <input
//                                         type="tel"
//                                         value={form.phone}
//                                         onChange={(e) => handleChange("phone", e.target.value)}
//                                         onBlur={() => handleBlur("phone")}
//                                         placeholder="+91 9876543210"
//                                         className={`input-field w-full pl-9 pr-3 py-3 border rounded-xl text-sm text-neutral-900 placeholder:text-neutral-300 bg-white ${touched.phone && errors.phone ? "error border-red-300" : "border-neutral-200"
//                                             }`}
//                                     />
//                                 </div>
//                                 {touched.phone && errors.phone && (
//                                     <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.phone}</p>
//                                 )}
//                             </div>

//                             {/* Refund badge */}
//                             <div className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium ${isNonRefundable
//                                     ? "bg-red-50 text-red-700 border border-red-100"
//                                     : "bg-green-50 text-green-700 border border-green-100"
//                                 }`}>
//                                 <ShieldCheck className="w-4 h-4 shrink-0" />
//                                 {isNonRefundable
//                                     ? "Non-refundable — this booking cannot be cancelled"
//                                     : rate.cancellationPolicies?.[0]
//                                         ? `Free cancellation before ${new Date(rate.cancellationPolicies[0].from).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}`
//                                         : "Refundable booking"}
//                             </div>
//                         </div>
//                     )}

//                     {/* SUCCESS STEP */}
//                     {step === "success" && (
//                         <div className="px-7 py-10 flex flex-col items-center text-center">
//                             <div className="check-pop w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-5">
//                                 <CheckCircle2 className="w-10 h-10 text-green-500" strokeWidth={1.5} />
//                             </div>
//                             <h3 className="booking-modal-serif text-2xl text-neutral-900 mb-2">Booking Confirmed!</h3>
//                             <p className="text-neutral-500 text-sm mb-1">
//                                 A confirmation has been sent to <span className="font-semibold text-neutral-700">{form.email}</span>
//                             </p>
//                             {orderId && (
//                                 <p className="text-xs text-neutral-400 mt-2">
//                                     Order ID: <span className="font-mono font-semibold text-neutral-600">{orderId}</span>
//                                 </p>
//                             )}
//                             <button
//                                 onClick={handleClose}
//                                 className="mt-8 px-8 py-3 bg-neutral-900 text-white font-semibold rounded-xl text-sm hover:bg-neutral-800 transition-colors"
//                             >
//                                 Done
//                             </button>
//                         </div>
//                     )}

//                     {/* ERROR STEP */}
//                     {step === "error" && (
//                         <div className="px-7 py-10 flex flex-col items-center text-center">
//                             <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-5">
//                                 <AlertCircle className="w-10 h-10 text-red-400" strokeWidth={1.5} />
//                             </div>
//                             <h3 className="booking-modal-serif text-2xl text-neutral-900 mb-2">Booking Failed</h3>
//                             <p className="text-neutral-500 text-sm max-w-xs">{errorMsg}</p>
//                             <button
//                                 onClick={() => setStep("form")}
//                                 className="mt-8 px-8 py-3 bg-neutral-900 text-white font-semibold rounded-xl text-sm hover:bg-neutral-800 transition-colors"
//                             >
//                                 Try Again
//                             </button>
//                         </div>
//                     )}
//                 </div>

//                 {/* ── Footer / Price + CTA ── */}
//                 {(step === "form" || step === "submitting") && (
//                     <div className="px-7 py-5 border-t border-neutral-100 bg-neutral-50/50 shrink-0">
//                         <div className="flex items-center justify-between mb-4">
//                             <div>
//                                 <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-0.5">Total Amount</p>
//                                 <p className="text-2xl font-bold text-neutral-900 leading-none">
//                                     {formatPrice(priceINR)}
//                                 </p>
//                             </div>
//                             <div className="text-right text-xs text-neutral-400 font-medium">
//                                 Incl. all taxes
//                             </div>
//                         </div>

//                         <button
//                             onClick={handleSubmit}
//                             disabled={step === "submitting"}
//                             className="book-btn w-full py-4 bg-neutral-900 text-white font-bold text-sm rounded-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                         >
//                             {step === "submitting" ? (
//                                 <>
//                                     <Loader2 className="w-4 h-4 animate-spin" />
//                                     Processing…
//                                 </>
//                             ) : (
//                                 <>
//                                     Confirm & Pay {formatPrice(priceINR)}
//                                     <ChevronRight className="w-4 h-4" />
//                                 </>
//                             )}
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default HotelBookingModal;























import React, { useState } from "react";
import { X, User, Mail, Phone, ShieldCheck, Loader2, CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import { createHotelOrder } from "../../../../api/hotelApi";

const CONVERSION_RATE = 108.6;

const BOARD_LABELS = {
    RO: "Room Only",
    BB: "Bed & Breakfast",
    HB: "Half Board",
    FB: "Full Board",
    AI: "All Inclusive",
};

const formatPrice = (price, currency = "INR") => {
    if (price == null) return "—";
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(price);
};

/**
 * HotelBookingModal
 *
 * Props:
 *  - isOpen      {boolean}   Whether the modal is visible
 *  - onClose     {function}  Called when the user closes/cancels
 *  - rate        {object}    The rate object from liveRooms (contains rateKey, net, boardCode, etc.)
 *  - roomName    {string}    Display name of the selected room
 *  - hotelName   {string}    Display name of the hotel
 *  - checkIn     {string}    e.g. "2026-06-07"
 *  - checkOut    {string}    e.g. "2026-06-09"
 */
const HotelBookingModal = ({
    isOpen,
    onClose,
    rate,
    roomName,
    hotelName,
    checkIn,
    checkOut,
}) => {
    const [step, setStep] = useState("form"); // "form" | "submitting" | "success" | "error"
    const [errorMsg, setErrorMsg] = useState("");
    const [orderData, setOrderData] = useState(null);

    const [form, setForm] = useState({
        holderName: "",
        holderSurname: "",
        email: "",
        phone: "",
    });

    const [touched, setTouched] = useState({});

    const priceINR = rate ? Math.round(Number(rate.net) * CONVERSION_RATE) : 0;
    const isNonRefundable = rate?.rateClass === "NRF";

    const validate = () => {
        const errors = {};
        if (!form.holderName.trim()) errors.holderName = "First name is required";
        if (!form.holderSurname.trim()) errors.holderSurname = "Last name is required";
        if (!form.email.trim()) errors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = "Enter a valid email";
        if (!form.phone.trim()) errors.phone = "Phone number is required";
        return errors;
    };

    const errors = validate();
    const isValid = Object.keys(errors).length === 0;

    const handleBlur = (field) => setTouched((t) => ({ ...t, [field]: true }));

    const handleChange = (field, value) => {
        setForm((f) => ({ ...f, [field]: value }));
    };

    const handleSubmit = async () => {
        setTouched({ holderName: true, holderSurname: true, email: true, phone: true });
        if (!isValid) return;

        setStep("submitting");
        setErrorMsg("");

        try {
            const payload = {
                rateKey: rate.rateKey,
                holderName: form.holderName,
                holderSurname: form.holderSurname,
                email: form.email,
                phone: form.phone,
                conversionRate: CONVERSION_RATE,
            };

            const res = await createHotelOrder(payload);

            if (res?.orderId) {
                // Store the complete order response
                setOrderData({
                    orderId: res.orderId,
                    amount: res.amount,
                    amountINR: res.amountINR,
                    amountEUR: res.amountEUR,
                    exchangeRate: res.exchangeRate,
                    currency: res.currency,
                    hotelName: res.hotelName,
                    checkIn: res.checkIn,
                    checkOut: res.checkOut,
                    confirmedRateKey: res.confirmedRateKey,
                    keyId: res.keyId,
                });

                // If Razorpay key is present, open Razorpay
                if (res.keyId) {
                    const options = {
                        key: res.keyId,
                        order_id: res.orderId,
                        amount: res.amount,
                        currency: res.currency || "INR",
                        name: "Hotel Booking",
                        description: `${res.hotelName} — ${res.checkIn} to ${res.checkOut}`,
                        prefill: {
                            name: `${form.holderName} ${form.holderSurname}`,
                            email: form.email,
                            contact: form.phone,
                        },
                        handler: (response) => {
                            // Payment successful
                            setStep("success");
                        },
                        modal: {
                            ondismiss: () => {
                                // Payment dismissed - order was created but payment not completed
                                // Still show success as order is created
                                setStep("success");
                            },
                        },
                    };
                    const razorpay = new window.Razorpay(options);
                    razorpay.open();
                } else {
                    // No payment required, just show success
                    setStep("success");
                }
            } else {
                throw new Error("No order ID returned from server.");
            }
        } catch (err) {
            console.error(err);
            setErrorMsg(err?.response?.data?.message || err?.message || "Booking failed. Please try again.");
            setStep("error");
        }
    };

    const handleClose = () => {
        // Reset state when modal is closed
        setStep("form");
        setForm({ holderName: "", holderSurname: "", email: "", phone: "" });
        setTouched({});
        setErrorMsg("");
        setOrderData(null);
        onClose();
    };

    if (!isOpen || !rate) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm">
            <div className="w-full sm:max-w-lg bg-white sm:rounded-3xl shadow-2xl overflow-hidden max-h-[96vh] flex flex-col rounded-t-3xl">
                {/* ── Header ── */}
                <div className="relative px-7 pt-7 pb-5 border-b border-neutral-100 shrink-0">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 mb-1">
                                Booking Details
                            </p>
                            <h2 className="text-2xl text-neutral-900 leading-tight font-semibold">
                                {roomName || "Selected Room"}
                            </h2>
                            <p className="text-sm text-neutral-500 mt-0.5 font-medium">
                                {hotelName}
                            </p>
                        </div>
                        <button
                            onClick={handleClose}
                            className="p-2 hover:bg-neutral-100 rounded-full transition-colors shrink-0 ml-4"
                        >
                            <X className="w-5 h-5 text-neutral-500" strokeWidth={1.5} />
                        </button>
                    </div>

                    {/* Stay summary strip */}
                    <div className="flex gap-3 mt-4">
                        <div className="flex-1 bg-neutral-50 rounded-xl px-4 py-2.5 border border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-0.5">Check-in</p>
                            <p className="text-sm font-semibold text-neutral-800">{checkIn || "—"}</p>
                        </div>
                        <div className="flex-1 bg-neutral-50 rounded-xl px-4 py-2.5 border border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-0.5">Check-out</p>
                            <p className="text-sm font-semibold text-neutral-800">{checkOut || "—"}</p>
                        </div>
                        <div className="flex-1 bg-neutral-50 rounded-xl px-4 py-2.5 border border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-0.5">Board</p>
                            <p className="text-sm font-semibold text-neutral-800 truncate">
                                {BOARD_LABELS[rate.boardCode] || rate.boardName || "—"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── Body ── */}
                <div className="overflow-y-auto flex-1">
                    {/* FORM STEP */}
                    {(step === "form" || step === "submitting") && (
                        <div className="px-7 py-6 space-y-5">
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-400">
                                Guest Information
                            </p>

                            {/* First + Last name */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-semibold text-neutral-600 mb-1.5">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                        <input
                                            type="text"
                                            value={form.holderName}
                                            onChange={(e) => handleChange("holderName", e.target.value)}
                                            onBlur={() => handleBlur("holderName")}
                                            placeholder="John"
                                            className={`w-full pl-9 pr-3 py-3 border rounded-xl text-sm text-neutral-900 placeholder:text-neutral-300 bg-white transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                                touched.holderName && errors.holderName 
                                                    ? "border-red-300 focus:ring-red-200" 
                                                    : "border-neutral-200"
                                            }`}
                                        />
                                    </div>
                                    {touched.holderName && errors.holderName && (
                                        <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.holderName}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-neutral-600 mb-1.5">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={form.holderSurname}
                                        onChange={(e) => handleChange("holderSurname", e.target.value)}
                                        onBlur={() => handleBlur("holderSurname")}
                                        placeholder="Doe"
                                        className={`w-full px-3 py-3 border rounded-xl text-sm text-neutral-900 placeholder:text-neutral-300 bg-white transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                            touched.holderSurname && errors.holderSurname 
                                                ? "border-red-300 focus:ring-red-200" 
                                                : "border-neutral-200"
                                        }`}
                                    />
                                    {touched.holderSurname && errors.holderSurname && (
                                        <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.holderSurname}</p>
                                    )}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs font-semibold text-neutral-600 mb-1.5">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => handleChange("email", e.target.value)}
                                        onBlur={() => handleBlur("email")}
                                        placeholder="john@example.com"
                                        className={`w-full pl-9 pr-3 py-3 border rounded-xl text-sm text-neutral-900 placeholder:text-neutral-300 bg-white transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                            touched.email && errors.email 
                                                ? "border-red-300 focus:ring-red-200" 
                                                : "border-neutral-200"
                                        }`}
                                    />
                                </div>
                                {touched.email && errors.email && (
                                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.email}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-xs font-semibold text-neutral-600 mb-1.5">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                                    <input
                                        type="tel"
                                        value={form.phone}
                                        onChange={(e) => handleChange("phone", e.target.value)}
                                        onBlur={() => handleBlur("phone")}
                                        placeholder="+91 9876543210"
                                        className={`w-full pl-9 pr-3 py-3 border rounded-xl text-sm text-neutral-900 placeholder:text-neutral-300 bg-white transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                            touched.phone && errors.phone 
                                                ? "border-red-300 focus:ring-red-200" 
                                                : "border-neutral-200"
                                        }`}
                                    />
                                </div>
                                {touched.phone && errors.phone && (
                                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.phone}</p>
                                )}
                            </div>

                            {/* Refund badge */}
                            <div className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium ${
                                isNonRefundable
                                    ? "bg-red-50 text-red-700 border border-red-100"
                                    : "bg-green-50 text-green-700 border border-green-100"
                            }`}>
                                <ShieldCheck className="w-4 h-4 shrink-0" />
                                {isNonRefundable
                                    ? "Non-refundable — this booking cannot be cancelled"
                                    : rate.cancellationPolicies?.[0]
                                        ? `Free cancellation before ${new Date(rate.cancellationPolicies[0].from).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}`
                                        : "Refundable booking"}
                            </div>
                        </div>
                    )}

                    {/* SUCCESS STEP */}
                    {step === "success" && orderData && (
                        <div className="px-7 py-8 flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-5 animate-in fade-in zoom-in duration-300">
                                <CheckCircle2 className="w-10 h-10 text-green-500" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl text-neutral-900 mb-2 font-semibold">Booking Confirmed!</h3>
                            <p className="text-neutral-500 text-sm mb-1">
                                A confirmation has been sent to <span className="font-semibold text-neutral-700">{form.email}</span>
                            </p>
                            
                            {/* Order Details Card */}
                            <div className="mt-6 w-full bg-neutral-50 rounded-xl p-4 border border-neutral-200 text-left">
                                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">Booking Details</p>
                                
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">Order ID:</span>
                                        <span className="font-mono font-semibold text-neutral-800">{orderData.orderId}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">Hotel:</span>
                                        <span className="font-medium text-neutral-800">{orderData.hotelName}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">Dates:</span>
                                        <span className="font-medium text-neutral-800">{orderData.checkIn} → {orderData.checkOut}</span>
                                    </div>
                                    <div className="flex justify-between pt-2 border-t border-neutral-200">
                                        <span className="text-neutral-600 font-semibold">Total Amount:</span>
                                        <span className="text-lg font-bold text-neutral-900">
                                            {formatPrice(orderData.amountINR || orderData.amount, orderData.currency)}
                                        </span>
                                    </div>
                                    
                                    {/* Show exchange rate info if available */}
                                    {orderData.exchangeRate && orderData.amountEUR && (
                                        <div className="text-xs text-neutral-500 pt-1">
                                            ≈ €{Number(orderData.amountEUR).toFixed(2)} EUR at rate {orderData.exchangeRate.toFixed(2)} INR/EUR
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            <button
                                onClick={handleClose}
                                className="mt-6 px-8 py-3 bg-neutral-900 text-white font-semibold rounded-xl text-sm hover:bg-neutral-800 transition-colors"
                            >
                                Done
                            </button>
                        </div>
                    )}

                    {/* ERROR STEP */}
                    {step === "error" && (
                        <div className="px-7 py-10 flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-5">
                                <AlertCircle className="w-10 h-10 text-red-400" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl text-neutral-900 mb-2 font-semibold">Booking Failed</h3>
                            <p className="text-neutral-500 text-sm max-w-xs">{errorMsg}</p>
                            <button
                                onClick={() => setStep("form")}
                                className="mt-8 px-8 py-3 bg-neutral-900 text-white font-semibold rounded-xl text-sm hover:bg-neutral-800 transition-colors"
                            >
                                Try Again
                            </button>
                        </div>
                    )}
                </div>

                {/* ── Footer / Price + CTA ── */}
                {(step === "form" || step === "submitting") && (
                    <div className="px-7 py-5 border-t border-neutral-100 bg-neutral-50/50 shrink-0">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-0.5">Total Amount</p>
                                <p className="text-2xl font-bold text-neutral-900 leading-none">
                                    {formatPrice(priceINR)}
                                </p>
                            </div>
                            <div className="text-right text-xs text-neutral-400 font-medium">
                                Incl. all taxes
                            </div>
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={step === "submitting"}
                            className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm rounded-xl disabled:opacity-60 disabled:cursor-not-allowed transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            {step === "submitting" ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    Confirm & Pay {formatPrice(priceINR)}
                                    <ChevronRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HotelBookingModal;