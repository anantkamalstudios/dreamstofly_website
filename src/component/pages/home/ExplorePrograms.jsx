
import React from "react";
import ranking from "../../../assets/ranking.jpg"
import college from "../../../assets/college.png"
import { cards, programs } from "../../data/home/programs";


export default function ExplorePrograms() {


    return (
        <>
            <hr className="mb-8" />
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Title */}
                <h2 className="text-4xl font-bold mb-4">Explore Programs</h2>

                {/* Program Slider */}
                <div className="flex overflow-x-auto space-x-3 mb-6 scrollbar-hide">
                    {programs.map((prog, idx) => (
                        <button
                            key={idx}
                            className="whitespace-nowrap border rounded-full px-4 py-1 text-sm bg-white shadow hover:bg-gray-100"
                        >
                            {prog}
                        </button>
                    ))}
                </div>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="border rounded-lg shadow-sm p-2 flex flex-col justify-between hover:shadow-md bg-white"
                        >
                            {/* Header */}
                            <div>
                                <div className="flex items-center justify-between mb-2 bg-[#F5FAFF]" >
                                    <h3 className="font-semibold text-2xl">{card.title}</h3>
                                    <div className=" ">
                                        <img src={card.img} alt={card.title} className="w-20 h-20 rounded-full" />
                                    </div>

                                </div>
                                <p className="text-sm text-gray-600 mb-3">{card.desc}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {card.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-3 py-1 text-xs bg-gray-100 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <a
                                href="#"
                                className=" text-sm font-medium hover:underline"
                            >
                                {card.footer}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
