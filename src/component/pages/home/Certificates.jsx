import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Certificates() {
  // const certificates = [
  //     { id: 1, img: nafsa, alt: "NAFSA" },
  //     { id: 2, img: IAF, alt: "IAF" },
  //     { id: 3, img: icef, alt: "ICEF" },
  //     { id: 4, img: iso, alt: "ISO" },
  // ];

  const [certificates, setCertificates] = useState([]);
  const BASE_URL = import.meta.env.VITE_HOME_CERTIFICATE;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(`${BASE_URL}`);
        setCertificates(res?.data?.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

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
                src={`${import.meta.env.VITE_HOME_IMAGE_URL}${cert.image}`}
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
