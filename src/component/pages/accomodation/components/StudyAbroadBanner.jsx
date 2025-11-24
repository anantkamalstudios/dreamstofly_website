// import React from "react";

// const StudyAbroadBanner = () => {
//   return (
//     <div className="bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl p-8 mx-0 md:mx-14   lg:mx-28 mt-8">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
//         <div className="max-w-4xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Study Abroad Starts Here - With Everything You Didn't Know You'd
//             Need
//           </h2>
//           <p className="text-white/90 mb-6">
//             From student visa, tuition guarantee, support & real-world resources
//             to land happily into foot!
//           </p>
//           <button className="bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 rounded-lg font-medium transition-colors">
//             Explore Services
//           </button>
//         </div>
//         <div className="">
//           <img
//             src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=300&fit=crop"
//             alt="Student celebrating"
//             className="rounded-2xl w-64 h-64 object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudyAbroadBanner;
import React from "react";

const StudyAbroadBanner = () => {
  return (
    <div className="overflow-hidden">
      <div
        className="rounded-2xl mx-0 md:mx-14 lg:mx-28 mt-8 overflow-hidden"
        style={{
          backgroundImage: "url('/images/accomodation/studyabroadbanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto gap-8 items-center rounded-2xl">
          <div className="max-w-5xl p-8 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Study Abroad Starts Here - With Everything You Didn't Know You'd
              Need
            </h2>
            <p className="text-white/90 mb-6">
              From student visa, tuition guarantee, support & real-world
              resources to land happily into foot!
            </p>
            <button className="bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadBanner;
