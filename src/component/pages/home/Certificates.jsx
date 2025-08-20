// import React from "react";

// export default function Certificates() {
//     const certificates = [
//         {
//             id: 1,
//             img: "https://dreamstofly.com/img/nafsa.png",
//             alt: "NAFSA",
//         },
//         {
//             id: 2,
//             img: "https://dreamstofly.com/img/iaf.png",
//             alt: "IAF",
//         },
//         {
//             id: 3,
//             img: "https://dreamstofly.com/img/icef.jpg",
//             alt: "ICEF",
//         },
//         {
//             id: 4,
//             img: "https://dreamstofly.com/img/iso.jpg",
//             alt: "ISO",
//         },
//     ];

//     return (
//         <section className="bg-#08dceb-100 py-12">
//             <div className="max-w-6xl mx-auto px-4">
//                 {/* Title */}
//                 <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
//                     Certificates & Accreditation
//                 </h2>

//                 {/* Grid Layout */}
//                 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                     {certificates.map((cert) => (
//                         <div
//                             key={cert.id}
//                             className="bg-white rounded-xl shadow-md flex items-center justify-center p-6 hover:shadow-lg transition"
//                         >
//                             <img
//                                 src={cert.img}
//                                 alt={cert.alt}
//                                 className="max-h-20 object-contain"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
import React from "react";
import { motion } from "framer-motion";

export default function Certificates() {
    const certificates = [
        { id: 1, img: "https://dreamstofly.com/img/nafsa.png", alt: "NAFSA" },
        { id: 2, img: "https://dreamstofly.com/img/iaf.png", alt: "IAF" },
        { id: 3, img: "https://dreamstofly.com/img/icef.jpg", alt: "ICEF" },
        { id: 4, img: "https://dreamstofly.com/img/iso.jpg", alt: "ISO" },
    ];

    // Variants for animation
    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <section className="bg-#08dceb-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-semibold text-center mb-10"
                >
                    Certificates & Accreditation
                </motion.h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            className="bg-white rounded-xl shadow-md flex items-center justify-center p-6 hover:shadow-lg transition"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={cert.img}
                                alt={cert.alt}
                                className="max-h-20 object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
