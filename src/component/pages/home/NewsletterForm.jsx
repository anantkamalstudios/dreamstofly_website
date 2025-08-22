import React, { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { MdOutlineSchool } from "react-icons/md";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");
    const [errors, setErrors] = useState({});

    const courses = [
        {
            main: "Engineering",
            subs: ["Mechanical Engineering", "Computer Science", "Civil Engineering", "Electrical Engineering", "Electronics & Communication"],
        },
        {
            main: "Medical",
            subs: ["MBBS", "BDS", "BAMS", "BHMS", "Nursing"],
        },
        {
            main: "Management",
            subs: ["MBA in Marketing", "MBA in Finance", "MBA in HR", "MBA in Operations", "MBA in IT"],
        },
        {
            main: "Law",
            subs: ["LLB", "LLM", "Corporate Law", "Criminal Law", "International Law"],
        },
        {
            main: "Arts",
            subs: ["BA in History", "BA in English", "BA in Political Science", "BA in Economics", "BA in Sociology"],
        },
        {
            main: "Science",
            subs: ["B.Sc Physics", "B.Sc Chemistry", "B.Sc Mathematics", "B.Sc Zoology", "B.Sc Botany"],
        },
        {
            main: "Commerce",
            subs: ["B.Com General", "B.Com Accounting", "B.Com Finance", "B.Com Computer Applications", "B.Com Banking"],
        },
        {
            main: "Pharmacy",
            subs: ["B.Pharm", "M.Pharm", "Diploma in Pharmacy", "Pharmaceutical Chemistry", "Pharmacology"],
        },
        {
            main: "Education",
            subs: ["B.Ed", "M.Ed", "Diploma in Education", "Special Education", "Early Childhood Education"],
        },
        {
            main: "Design",
            subs: ["Fashion Design", "Interior Design", "Graphic Design", "Product Design", "UI/UX Design"],
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Please enter a valid email.";
        if (!mobile || !/^\d{10}$/.test(mobile)) newErrors.mobile = "Please enter a valid mobile number.";
        if (!selectedCourse) newErrors.course = "Please select a valid value.";
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted successfully!");
        }
    };

    return (
        <>
            <hr className="mt-5" />

            <div className="max-w-6xl mx-auto p-4 mt-5">
                <h2 className="text-center text-2xl md:text-3xl font-bold">Subscribe To Our News Letter</h2>
                <p className="text-center text-gray-500 mb-6">
                    Get College Notifications, Exam Notifications and News Updates
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row items-center gap-4"
                >
                    {/* Email */}
                    <div className="flex flex-col w-full md:w-1/4">
                        <div className="flex items-center border rounded px-3 py-2">
                            <FiMail className="text-gray-500 mr-2" />
                            <input
                                type="email"
                                placeholder="Enter your email id"
                                className="w-full outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                    </div>

                    {/* Mobile */}
                    <div className="flex flex-col w-full md:w-1/4">
                        <div className="flex items-center border rounded px-3 py-2">
                            <FiPhone className="text-gray-500 mr-2" />
                            <input
                                type="tel"
                                placeholder="Enter your mobile no"
                                className="w-full outline-none"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                        {errors.mobile && <span className="text-red-500 text-xs">{errors.mobile}</span>}
                    </div>

                    {/* Course Dropdown */}
                    <div className="flex flex-col w-full md:w-1/4">
                        <div className="flex items-center border rounded px-3 py-2">
                            <MdOutlineSchool className="text-gray-500 mr-2" />
                            <select
                                className="w-full outline-none"
                                value={selectedCourse}
                                onChange={(e) => setSelectedCourse(e.target.value)}
                            >
                                <option value="">Choose your course</option>
                                {courses.map((course, idx) => (
                                    <optgroup key={idx} label={course.main}>
                                        {course.subs.map((sub, i) => (
                                            <option key={i} value={`${course.main} - ${sub}`}>
                                                {sub}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                        </div>
                        {errors.course && <span className="text-red-500 text-xs">{errors.course}</span>}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="bg-[#0073df] text-white font-semibold px-6 py-2 rounded w-full md:w-auto"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
