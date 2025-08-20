
import React from "react";
import Subscribe from "../../../assets/subscribe.png"

export default function RegularAlerts() {
    return (
        <>
            <hr className="mb-8" />
            <div className="mx-auto container flex flex-col mb-8 md:flex-row items-center justify-between bg-gradient-to-r from-blue-900 to-blue-400 rounded-lg p-4 sm:p-6 w-full">
                {/* Text and Button Group - gap-4 on all screens */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center sm:text-left">
                        Subscribe For Regular Alerts
                    </h2>
                    <button className="text-[#0073df] bg-white hover:bg-#08dceb-600 text-white font-bold py-3 px-4 mx-5 sm:px-6 rounded whitespace-nowrap w-full sm:w-auto text-sm sm:text-base">
                        Subscribe Now
                    </button>
                </div>

                {/* Image - gap-8 equivalent spacing */}
                <div className=" sm:mt-0 sm:ml-8 flex justify-center w-full sm:w-auto">
                    <img
                        className="h-30 sm:h-20 w-30 mr-7"
                        src={Subscribe}
                        alt="Student Illustration"
                        style={{ background: 'transparent' }}
                    />
                </div>
            </div>
        </>
    );
}

