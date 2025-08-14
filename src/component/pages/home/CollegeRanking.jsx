
import React from "react";

export default function CollegeRanking() {
    const colleges = [
        {
            img: "https://www.sirjjuniv.in/src/images/logo.webp",
            name: "Sir JJ College of Architecture, Mumbai",
            rank: "1 out of 12",
            stream: "Architecture",
            state: "Maharashtra",
        },
        {
            img: "https://mituniversity.ac.in/assets_web/images/LOGO2.png",
            name: "MIT Art, Design and Technology University, Pune",
            rank: "2 out of 12",
            stream: "Architecture",
            state: "Maharashtra",
        },
        {
            img: "https://bnca.ac.in/wp-content/themes/bnca-web/assets/img/bnca-logo.png",
            name: "Dr. Bhanuben Nanavati College of Architecture, Pune",
            rank: "3 out of 12",
            stream: "Architecture",
            state: "Maharashtra",
        },
        {
            img: "https://www.sandipuniversity.edu.in/images/logo-dark.png",
            name: "Sandip University ,Nashik",
            rank: "3 out of 12",
            stream: "Engineering",
            state: "Maharashtra",
        }
    ];

    const agencies = [
        "Indiatoday",
        "The Week",
        "NIRF",
        "Outlook",
        "IIRF",
        "TOI",
        "NIRF Innovation",
    ];

    // Filter only Maharashtra colleges
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
                        className="text-orange-600 hover:underline text-lg sm:text-xl"
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
