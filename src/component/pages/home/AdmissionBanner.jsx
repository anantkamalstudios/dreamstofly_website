
// import React from "react";
// import college from "../../../assets/findcollege.png"

// export default function AdmissionBanner() {
//     return (
//         <>
//             <hr className="mb-8" />
//             <div className="mx-auto container flex flex-col mb-8 md:flex-row items-center justify-between bg-[#fdeedc] rounded-lg p-4 sm:p-6 w-full">
//                 {/* Text and Button Group - gap-4 on all screens */}
//                 <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
//                     <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3f5c8b] text-center sm:text-left">
//                         Know your chances of Admission
//                     </h2>
//                     <button className="bg-[#ff7a00] hover:bg-orange-600 text-white font-bold py-2 px-4 sm:px-6 rounded whitespace-nowrap w-full sm:w-auto text-sm sm:text-base">
//                         Start Now
//                     </button>
//                 </div>

//                 {/* Image - gap-8 equivalent spacing */}
//                 <div className="mt-4 sm:mt-0 sm:ml-8 flex justify-center w-full sm:w-auto">
//                     <img
//                         className="h-16 sm:h-20 w-30"
//                         src={college}
//                         alt="Student Illustration"
//                         style={{ background: 'transparent' }}
//                     />
//                 </div>
//             </div>
//         </>
//     );
// }
// import React from "react";


// export default function HaveQuestions() {
//     return (
//         <section
//             className="relative bg-orange-100  text-light py-10 px-6 flex items-center justify-center text-center"
//             style={{
//                 backgroundImage: "url('/images/world-map-pattern.png')", // replace with your uploaded background
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//             }}
//         >
//             <div className="max-w-2xl mx-auto">
//                 {/* Heading */}
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                     Have Questions ?
//                 </h2>

//                 {/* Subtext */}
//                 <p className="text-lg md:text-xl text-dark mb-6">
//                     We are available to answer all your questions! <br />
//                     Get on a Call with us today.
//                 </p>

//                 {/* Button */}

//                 <button className="bg-[#ff7a00] hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md  transition">
//                     Get on Call
//                 </button>


//             </div>
//         </section>
//     );
// }
import React, { useState } from "react";
import CallModal from "../../modal/CallModal";

export default function HaveQuestions() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <section
                className="relative bg-orange-100 py-10 px-6 flex items-center justify-center text-center"
                style={{
                    backgroundImage: "url('/images/world-map-pattern.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions ?</h2>
                    <p className="text-lg md:text-xl text-dark mb-6">
                        We are available to answer all your questions! <br />
                        Get on a Call with us today.
                    </p>
                    <button
                        onClick={() => setOpen(true)}
                        className="bg-[#ff7a00] hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
                    >
                        Get on Call
                    </button>
                </div>
            </section>

            {/* Modal Component */}
            <CallModal open={open} onClose={() => setOpen(false)} />
        </>
    );
}
