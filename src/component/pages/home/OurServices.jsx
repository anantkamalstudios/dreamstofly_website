// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// // import services from "../../data/home/Services";
// import { useState } from "react";
// import axios from "axios";

// export default function Services() {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(
//         "https://devlopment.dreamstofly.com/api/services/get_services_cards"
//       );
//       setServices(res?.data?.data);
//     };
//     fetchData();
//   }, []);

//   // Refs for each column
//   const colRefs = [useRef(null), useRef(null), useRef(null)];

//   useEffect(() => {
//     const speed = 0.5;

//     const animateCol = (colRef, direction = 1) => {
//       const col = colRef.current;
//       if (!col) return;
//       let scrollPos = direction === 1 ? 0 : col.scrollHeight;
//       const step = () => {
//         scrollPos += direction * speed;
//         if (direction === 1 && scrollPos >= col.scrollHeight / 2) scrollPos = 0;
//         if (direction === -1 && scrollPos <= 0)
//           scrollPos = col.scrollHeight / 2;
//         col.scrollTop = scrollPos;
//         requestAnimationFrame(step);
//       };
//       step();
//     };

//     animateCol(colRefs[0], 1); // col 1 scroll down
//     animateCol(colRefs[1], -1); // col 2 scroll up
//     animateCol(colRefs[2], 1); // col 3 scroll down
//   }, []);

//   // Split services into 3 columns
//   const col1 = services?.filter((_, i) => i % 3 === 0);
//   const col2 = services?.filter((_, i) => i % 3 === 1);
//   const col3 = services?.filter((_, i) => i % 3 === 2);

//   const renderColumn = (col, ref) => (
//     <div ref={ref} className="flex flex-col gap-6 overflow-hidden h-[600px]">
//       {[...col, ...col].map((service, idx) => (
//         <motion.div
//           key={idx}
//           className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 hover:shadow-2xl transition duration-300"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: (idx % col.length) * 0.05, duration: 0.5 }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <img
//             src={service.img}
//             alt={service.title}
//             className="w-20 h-20 flex-shrink-0 rounded-lg"
//           />
//           <div className="flex flex-col">
//             <h3 className="text-lg font-semibold text-gray-800">
//               {service.title}
//             </h3>
//             <p className="text-gray-600 text-sm mt-1">{service.desc}</p>
//             <span className="mt-2 text-indigo-600 text-sm font-medium cursor-pointer">
//               Learn More →
//             </span>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="py-12 px-6 md:px-16 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

//       {/* 3 Column Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {renderColumn(col1, colRefs[0])}
//         {renderColumn(col2, colRefs[1])}
//         {renderColumn(col3, colRefs[2])}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_HOME_SERVICES;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}`);
        console.log(res);

        setServices(res?.data?.data?.services_card);
      } catch (err) {
        console.error("Failed to fetch services:", err);
        setServices([]);
      }
    };
    fetchData();
  }, []);

  const handleClick = (slug) => {
    if (slug === "free-cources" || slug === "free-online-courses") {
      window.open("https://freecourse.dreamstofly.com/", "_blank");
    } else if (slug === "exam-prep" || slug === "test-preparation") {
      navigate(`/exam-prep`);
    } else {
      navigate(`/services/${slug}`);
    }
  };

  const distributeInColumns = (arr, numCols) => {
    const cols = Array.from({ length: numCols }, () => []);
    arr.forEach((item, i) => cols[i % numCols].push(item));
    return cols;
  };

  const [col1, col2, col3] = distributeInColumns(services, 3);

  const colRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (services.length < 12) return;

    const speed = 0.5;
    const rafIds = [];
    let running = true;

    const animateCol = (colRef, direction = 1) => {
      const col = colRef?.current;
      if (!col || !running) return;
      if (col.scrollHeight <= col.clientHeight) return;

      let scrollPos = direction === 1 ? 0 : col.scrollHeight / 2;

      const step = () => {
        if (!running) return;
        scrollPos += direction * speed;
        if (direction === 1 && scrollPos >= col.scrollHeight / 2) scrollPos = 0;
        if (direction === -1 && scrollPos <= 0)
          scrollPos = col.scrollHeight / 2;
        col.scrollTop = scrollPos;
        const id = requestAnimationFrame(step);
        rafIds.push(id);
      };
      step();
    };

    animateCol(colRefs[0], 1);
    animateCol(colRefs[1], -1);
    animateCol(colRefs[2], 1);

    return () => {
      running = false;
      rafIds.forEach(cancelAnimationFrame);
    };
  }, [services]);

  const renderColumn = (col = [], ref) => {
    const items = services.length >= 12 ? [...col, ...col] : col;

    if (items.length === 0)
      return (
        <div className="text-center text-gray-500 p-6">
          No services available
        </div>
      );

    return (
      <div ref={ref} className="flex flex-col gap-6 overflow-hidden h-[600px]">
        {items.map((svc, idx) => (
          <motion.div
            key={`${svc.id || svc._id || svc.title || "svc"}-${idx}`}
            className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleClick(svc.slug)}
          >
            <img
              src={`${import.meta.env.VITE_HOME_IMAGE_URL}${svc.image}`}
              alt={svc.title || "Service"}
              className="w-20 h-20 flex-shrink-0 rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800">
                {svc.title || "Untitled"}
              </h3>
              <p
                className="text-black text-sm mt-1"
                dangerouslySetInnerHTML={{ __html: svc.description || "" }}
              />
              <span className="mt-2 text-indigo-600 text-sm font-medium cursor-pointer">
                {svc.button_text || "Learn More"} →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="py-12 px-6 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderColumn(col1, colRefs[0])}
        {renderColumn(col2, colRefs[1])}
        {renderColumn(col3, colRefs[2])}
      </div>
    </div>
  );
}
