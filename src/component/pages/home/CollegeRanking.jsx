
import React from "react";
import { colleges, agencies } from "../../data/home/collegeranking";

export default function CollegeRanking() {

    const maharashtraColleges = colleges.filter(
        (college) => college.state === "Maharashtra"
    );

    return (
        <>
            <hr />
            <div className="max-w-7xl mx-auto p-4 mt-8">
                {/* Heading */}
                <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                    <h2 className="text-2xl sm:text-4xl font-bold">
                        College Ranking 2025
                    </h2>
                    <a
                        href="#"
                        className="text-#08dceb-600 hover:underline text-lg sm:text-xl"
                    >
                        View all Colleges
                    </a>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                    {/* Ranking Year Selector */}
                    <div className="border rounded-full px-3 py-1 flex items-center">
                        <span className="whitespace-nowrap mr-2 font-medium">
                            Ranking:
                        </span>
                        <select className="outline-none bg-transparent">
                            <option>2025</option>
                            <option>2024</option>
                            <option>2023</option>
                        </select>
                    </div>

                    {/* Agencies */}
                    <div className="flex items-center gap-2 overflow-x-auto">
                        <span className="whitespace-nowrap mr-2 font-medium">
                            Agencies:
                        </span>
                        {agencies.map((agency, idx) => (
                            <button
                                key={idx}
                                className={`px-4 py-1 border rounded-full whitespace-nowrap ${idx === 0
                                    ? "bg-black text-white border-black"
                                    : ""
                                    }`}
                            >
                                {agency}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Table / Mobile Slider */}
                <div className="overflow-x-auto border rounded-lg">
                    <table className="min-w-full border-collapse">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border text-start px-4 py-2 font-semibold">
                                    College
                                </th>
                                <th className="border text-start px-4 py-2 font-semibold">
                                    Ranking
                                </th>
                                <th className="border text-start px-4 py-2 font-semibold">
                                    Streams
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {maharashtraColleges.map((college, idx) => (
                                <tr
                                    key={idx}
                                    className="hover:bg-gray-50 "
                                >
                                    <td className="border px-4 py-3 flex items-center gap-3 min-w-[250px]">
                                        <img
                                            src={college.img}
                                            alt={college.name}
                                            className="h-9 w-9 object-contain  rounded-full"
                                        />
                                        <span className="text-sm sm:text-base">
                                            {college.name}
                                        </span>
                                    </td>
                                    <td className="border px-4 py-3 min-w-[150px]">
                                        {college.rank}
                                    </td>
                                    <td className="border px-4 py-3 min-w-[150px]">
                                        {college.stream}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile hint */}
                <p className="text-sm text-gray-500 mt-2 sm:hidden">
                    Swipe left/right to see more →
                </p>
            </div>
        </>
    );
}
