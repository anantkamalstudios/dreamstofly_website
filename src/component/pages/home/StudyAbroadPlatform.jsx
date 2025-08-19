// import React from "react";

// const StudyAbroadPlatform = () => {
//     const cards = [
//         {
//             id: 1,
//             title: "CONNECT WITH OUR AMBASSADORS",
//             desc: "Get to know the on-ground reality from the one's who are already living it out there. They shall solve each and every small doubt of yours helping you take an well informed decision , which you don’t regret later.",
//             btnText: "Connect",
//             img: "/images/ambassador.png", // replace with your img path
//         },
//         {
//             id: 2,
//             title: "TALK TO OUR EXPERT COUNCILLORS",
//             desc: "We are sure that you are well equipped with all the information in this digital world while all data is readily available online. But our expert councillor’s shall add a cherry on the top with their experience with applications and Visa processes thus helping you achieve your dream university easily.",
//             btnText: "Chat With us",
//             img: "/images/counsellor.png",
//         },
//         {
//             id: 3,
//             title: "GUARANTEED SCHOLARSHIPS",
//             desc: "We not only help you achieve university and government scholarships available but we also offer exclusive scholarships to all our students which shall add a cherry on the top and help you reduce your expenses towards your study abroad dream.",
//             btnText: "Scholarship",
//             img: "/images/scholarship.png",
//         },
//     ];

//     return (
//         <div className="bg-[#c7f1fb] py-12 px-4 md:px-12 lg:px-20">
//             {/* Heading */}
//             <div className="text-center max-w-2xl mx-auto mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//                     All In One Platform for all your Study Abroad Needs.
//                 </h2>
//                 <p className="mt-2 text-gray-700 font-medium">
//                     By the Students , For the Students !
//                 </p>
//             </div>

//             {/* Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//                 {cards.map((card) => (
//                     <div
//                         key={card.id}
//                         className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-6 gap-6 hover:shadow-lg transition"
//                     >
//                         {/* Image */}
//                         <img
//                             src={card.img}
//                             alt={card.title}
//                             className="w-40 h-40 object-contain"
//                         />

//                         {/* Text */}
//                         <div className="text-center md:text-left">
//                             <h3 className="text-lg font-semibold text-gray-800 mb-3">
//                                 {card.title}
//                             </h3>
//                             <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                                 {card.desc}
//                             </p>
//                             <button className="bg-[#00bcd4] hover:bg-[#0097a7] text-white px-5 py-2 rounded-lg font-medium transition">
//                                 {card.btnText}
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default StudyAbroadPlatform;
import React from "react";
import cards from "../../data/home/StudyAbroadPlatform";

const StudyAbroadPlatform = () => {

    return (
        <div className="bg-orange-100 py-16 px-4 md:px-10">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    All In One Platform for all your Study Abroad Needs.
                </h2>
                <p className="text-gray-700 mt-2 text-lg">
                    By the Students , For the Students !
                </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col items-center gap-16">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                            } items-center md:items-start gap-10 max-w-5xl`}
                    >
                        {/* Image */}
                        <img
                            src={card.img}
                            alt={card.title}
                            className="w-60 md:w-72"
                        />

                        {/* Text */}
                        <div className="max-w-lg text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-3 text-gray-900">
                                {card.title}
                            </h3>
                            <p className="text-gray-700 mb-5 leading-relaxed text-sm md:text-base">
                                {card.desc}
                            </p>
                            <button className="bg-[#ff7a00] hover:bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-Orange-100 transition">
                                {card.btnText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudyAbroadPlatform;

