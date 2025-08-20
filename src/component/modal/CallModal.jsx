
import React from "react";

export default function CallModal({ open, onClose }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">

                {/* Left Section */}
                <div className="bg-gray-900 text-white p-6 md:w-1/3 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold flex items-center gap-2">
                        <span className="text-#08dceb-400">✈</span> Dreams to Fly
                    </h1>
                    <p className="mt-6 text-center text-gray-300 text-sm md:text-base">
                        Our advisors are waiting to answer all your questions!
                    </p>
                </div>

                {/* Right Section */}
                <div className="p-6 md:w-2/3">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Let’s get introduced before you join{" "}
                        <span className="text-#08dceb-500">Dreams to Fly!</span>
                    </h2>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="border p-3 rounded-lg focus:ring-2 focus:ring-#08dceb-500 outline-none" />
                        <input type="text" placeholder="Last Name" className="border p-3 rounded-lg focus:ring-2 focus:ring-#08dceb-500 outline-none" />
                        <input type="email" placeholder="ex. example@gmail.com" className="border p-3 rounded-lg col-span-1 md:col-span-2 focus:ring-2 focus:ring-#08dceb-500 outline-none" />
                        <input type="tel" placeholder="ex. 9898989898" className="border p-3 rounded-lg col-span-1 md:col-span-2 focus:ring-2 focus:ring-#08dceb-500 outline-none" />
                        <select className="border p-3 rounded-lg focus:ring-2 focus:ring-#08dceb-500 outline-none">
                            <option>Bachelors</option>
                            <option>Masters</option>
                            <option>PhD</option>
                        </select>
                        <input type="text" placeholder="Search Courses" className="border p-3 rounded-lg focus:ring-2 focus:ring-#08dceb-500 outline-none" />
                    </form>

                    <div className="mt-4 flex items-start gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="mt-1" />
                        <p className="text-gray-700">
                            I have read and agree to Dreams to Fly{" "}
                            <a href="#" className="text-gray-700 underline">privacy policy</a>
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex gap-4">
                        <button type="button" onClick={onClose} className="px-6 py-3 bg-[#0073df] hover:text-[#0073df]  text-white rounded-lg hover:bg-gray-300">
                            Cancel
                        </button>
                        <button type="submit" className="px-6 py-3 bg-[#0073df] text-white text-white font-semibold hover:bg-gray-300 hover:text-[#0073df] rounded-lg shadow-md">
                            Join the Call
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
// import React from "react";

// export default function CallModal({ open, onClose }) {
//     if (!open) return null;

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 px-4">
//             <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">

//                 {/* Left Section with Background Image */}
//                 <div
//                     className="relative text-white p-6 md:w-1/3 flex flex-col justify-center items-center bg-cover bg-center"
//                     style={{
//                         backgroundImage: "url('/images/study-abroad.jpg')", // <-- replace with your study abroad image
//                     }}
//                 >
//                     {/* Dark overlay for readability */}
//                     <div className="absolute inset-0 bg-black/60"></div>

//                     {/* Content on top of overlay */}
//                     <div className="relative z-10 text-center">
//                         <h1 className="text-3xl font-bold flex items-center gap-2 justify-center">
//                             <span className="text-#08dceb-400">✈</span> Dreams to Fly
//                         </h1>
//                         <p className="mt-6 text-gray-200 text-sm md:text-base">
//                             Our advisors are waiting to answer all your questions!
//                         </p>
//                     </div>
//                 </div>

//                 {/* Right Section (Form) */}
//                 <div className="p-6 md:w-2/3 w-full">
//                     <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
//                         Let’s get introduced before you join{" "}
//                         <span className="text-#08dceb-500">Dreams to Fly!</span>
//                     </h2>

//                     <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <input
//                             type="text"
//                             placeholder="First Name"
//                             className="border p-3 rounded-lg focus:ring-2 focus:ring-#08dceb-500 outline-none"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Last Name"
//                             className="border p-3 rounded-lg focus:ring-2 focus:ring-#08dceb-500 outline-none"
//                         />
//                         <input
//                             type="email"
//                             placeholder="ex. example@gmail.com"
//                             className="border p-3 rounded-lg col-span-1 md:col-span-2 focus:ring-2 focus:ring-#08dceb-500 outline-none"
//                         />
//                         <input
//                             type="tel"
//                             placeholder="ex. 9898989898"
//                             className="border p-3 rounded-lg col-span-1 md:col-span-2 focus:ring-2 focus:ring-#08dceb-500 outline-none"
//                         />
//                         <select className="border p-3 rounded-lg focus:ring-2 focus:ring-#08dceb-500 outline-none">
//                             <option>Bachelors</option>
//                             <option>Masters</option>
//                             <option>PhD</option>
//                         </select>
//                         <input
//                             type="text"
//                             placeholder="Search Courses"
//                             className="border p-3 rounded-lg focus:ring-2 focus:ring-#08dceb-500 outline-none"
//                         />
//                     </form>

//                     {/* Privacy Policy */}
//                     <div className="mt-4 flex items-start gap-2 text-sm text-gray-600">
//                         <input type="checkbox" className="mt-1" />
//                         <p>
//                             I have read and agree to Dreams to Fly{" "}
//                             <a href="#" className="text-#08dceb-500 underline">
//                                 privacy policy
//                             </a>
//                         </p>
//                     </div>

//                     {/* Buttons */}
//                     <div className="mt-6 flex flex-col sm:flex-row gap-3">
//                         <button
//                             type="button"
//                             onClick={onClose}
//                             className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 w-full sm:w-auto"
//                         >
//                             Cancel
//                         </button>
//                         <button
//                             type="submit"
//                             className="px-6 py-3 bg-#08dceb-500 hover:bg-#08dceb-600 text-white font-semibold rounded-lg shadow-md w-full sm:w-auto"
//                         >
//                             Join the Call
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
