
import React from "react";
import college from "../../../assets/findcollege.png"

export default function AdmissionBanner() {
    return (
        <>
            <hr className="mb-8" />
            <div className="mx-auto container flex flex-col mb-8 md:flex-row items-center justify-between bg-[#fdeedc] rounded-lg p-4 sm:p-6 w-full">
                {/* Text and Button Group - gap-4 on all screens */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3f5c8b] text-center sm:text-left">
                        Know your chances of Admission
                    </h2>
                    <button className="bg-[#ff7a00] hover:bg-orange-600 text-white font-bold py-2 px-4 sm:px-6 rounded whitespace-nowrap w-full sm:w-auto text-sm sm:text-base">
                        Start Now
                    </button>
                </div>

                {/* Image - gap-8 equivalent spacing */}
                <div className="mt-4 sm:mt-0 sm:ml-8 flex justify-center w-full sm:w-auto">
                    <img
                        className="h-16 sm:h-20 w-30"
                        src={college}
                        alt="Student Illustration"
                        style={{ background: 'transparent' }}
                    />
                </div>
            </div>
        </>
    );
}