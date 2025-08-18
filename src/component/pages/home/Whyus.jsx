
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import stats from "../../data/home/WhyUs";

export default function WhyUs() {

    const Counter = ({ target }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let start = 0;
            const end = parseInt(target);
            if (start === end) return;

            let duration = 2000;
            let incrementTime = Math.abs(Math.floor(duration / end));

            let timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }, [target]);

        return <span>{count}</span>;
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Why us?
                </h2>
                <p className="text-gray-500 mt-2 mb-10 text-sm md:text-base">
                    By the Students, For the Students!
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col items-center"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="w-16 h-16 mb-4"
                            />
                            <h3 className="text-xl font-bold text-gray-800">
                                <Counter target={item.number} />
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

