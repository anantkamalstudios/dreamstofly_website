
// import React from "react";
// import cards from "../../data/home/WhyChooseUs";

// const WhyChooseUs = () => {

//     return (
//         <div className="bg-white py-12 px-4 md:px-8 lg:px-16">
//             {/* Heading Section */}
//             <div className="text-center max-w-3xl mx-auto mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//                     Give Your Wings a Smooth Flight <br />
//                     <span className="text-#08dceb-600">Dreams to Fly Way !</span>
//                 </h2>
//                 <p className="mt-4 text-gray-600">
//                     Post a job to tell us about your project. We'll quickly match you with
//                     the right freelancers.
//                 </p>
//             </div>

//             {/* Cards Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
//                 {cards.map((card) => (
//                     <div
//                         key={card.id}
//                         className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 hover:shadow-md transition"
//                     >
//                         <div className="flex items-start gap-4">
//                             {/* Image */}
//                             <img
//                                 src={card.img}
//                                 alt={card.title}
//                                 className="w-16 h-16 object-contain flex-shrink-0"
//                             />
//                             {/* Text */}
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                                     {card.title}
//                                 </h3>
//                                 <p className="text-gray-600 text-sm leading-relaxed">
//                                     {card.desc}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default WhyChooseUs;
// import React from "react";
// import { motion } from "framer-motion"; // npm install framer-motion
// import cards from "../../data/home/WhyChooseUs";

// const WhyChooseUs = () => {
//     return (
//         <div className="bg-white py-12 px-4 md:px-8 lg:px-16">
//             {/* Heading Section */}
//             <div className="text-center max-w-3xl mx-auto mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//                     Give Your Wings a Smooth Flight <br />
//                     <span className="text-[#0073df]">Dreams to Fly Way !</span>
//                 </h2>
//                 <p className="mt-4 text-gray-600">
//                     Post a job to tell us about your project. We'll quickly match you with
//                     the right freelancers.
//                 </p>
//             </div>

//             {/* Horizontal Cards with Animation */}
//             <div className="flex gap-6  py-4">
//                 {cards.map((card, index) => (
//                     <motion.div
//                         key={card.id}
//                         className="flex-shrink-0 w-80 bg-white border border-gray-200 shadow-sm rounded-xl p-6 hover:shadow-lg transition"
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.2, duration: 0.6 }}
//                     >
//                         <div className="flex items-start gap-4">
//                             {/* Image */}
//                             <img
//                                 src={card.img}
//                                 alt={card.title}
//                                 className="w-16 h-16 object-contain flex-shrink-0"
//                             />
//                             {/* Text */}
//                             <div>
//                                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                                     {card.title}
//                                 </h3>
//                                 <p className="text-gray-600 text-sm leading-relaxed">
//                                     {card.desc}
//                                 </p>
//                             </div>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default WhyChooseUs;
import React from "react";
import cards from "../../data/home/WhyChooseUs";

const WhyChooseUs = () => {
    return (
        <div className="bg-white py-12 px-4 md:px-8 lg:px-16">
            {/* Heading Section */}
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Give Your Wings a Smooth Flight <br />
                    <span className="text-[#0073df]">Dreams to Fly Way !</span>
                </h2>
                <p className="mt-4 text-gray-600">
                    Post a job to tell us about your project. We'll quickly match you with
                    the right freelancers.
                </p>
            </div>

            {/* Continuous Horizontal Scroller */}
            <div className="overflow-hidden relative">
                <div className="flex animate-scroll gap-6">
                    {/* Duplicate cards for infinite scroll */}
                    {[...cards, ...cards].map((card, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white border border-gray-200 shadow-sm rounded-xl p-6"
                        >
                            <div className="flex items-start gap-4">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-16 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tailwind custom animation */}
            <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-70%); }
                }
                .animate-scroll {
                    display: flex;
                    animation: scroll 40s linear infinite;
                }
                `}
            </style>
        </div>
    );
};

export default WhyChooseUs;
