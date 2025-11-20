// import React from "react";
// import { motion } from "framer-motion";

// const Header = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-900 to-blue-400 text-white flex flex-col sm:flex-row justify-center items-center">
//       <div className="max-w-6xl lg:ml-20 flex-1 px-4 sm:px-6 lg:px-8 py-4 flex flex-col justify-center items-center">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-3xl md:text-5xl font-bold mb-4 text-start"
//         >
//           Exam Preparation&apos;s
//         </motion.h1>
//         <p className="text-lg md:text-xl text-white">
//           Comprehensive test preparation for your study abroad journey
//         </p>
//       </div>
//       <div className="">
//         {/* Image */}
//         <img
//           src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=400&fit=crop&auto=format"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { motion } from "framer-motion";

const Header = ({ data }) => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-400 text-white">
      <div className="max-w-8xl mx-auto flex flex-col sm:flex-row items-center gap-6">
        <div className="flex flex-row items-center gap-6 basis-[70%] py-6 px-12">
          {/* LOGO */}
          {data.leftLogo && (
            <img
              src={data.leftLogo}
              alt="logo"
              className="w-24 h-20 object-cover flex-shrink-0"
            />
          )}

          {/* TEXT BLOCK */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-1xl md:text-3xl font-semibold mb-2"
            >
              {data.title}
            </motion.h1>

            {data.subtitle && (
              <p className="text-base md:text-lg text-white">{data.subtitle}</p>
            )}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        {data.rightImage && (
          <div className="flex-shrink-0 w-full sm:w-auto basis-[30%]">
            <img
              src={data.rightImage}
              alt="header visual"
              className="max-h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
