
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Edit3, Star, Download, Facebook, Instagram, Twitter, Youtube, Linkedin, Rss, ChevronLeft, ChevronRight, User, X } from 'lucide-react';

const CollegeduniaApp = () => {
    const [selectedGoal, setSelectedGoal] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="max-w-sm mx-auto bg-gray-100  relative overflow-hidden">

            <div className="bg-white shadow-xl rounded-3xl mx-4 my-4 overflow-hidden ">

                <div className="bg-white px-4 py-6">
                    <div className="text-center mb-4">
                        <h1 className="text-lg font-semibold text-gray-800 mb-2">
                            Hello, Welcome To Dreams To Fly
                        </h1>
                        <div className="flex items-center justify-center text-green-600 text-sm">
                            <div className="w-3 h-2 bg-green-600 rounded-full mr-2"></div>
                            <span>Search Colleges, Exams, Courses & More</span>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 mb-1">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700 font-medium">Select Goal</span>
                            <Edit3 className="w-4 h-4 text-gray-500" />
                        </div>
                    </div>


                    <Link to={"/login"} >
                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1 rounded-lg transition-colors duration-200">
                            Login/Register
                        </button>
                    </Link>

                </div>


                <div className="bg-orange-50 mx-4 rounded-lg p-4 mb-3 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-gray-700 font-medium mb-1">
                                "Write a Review
                            </div>
                            <div className="text-gray-700 font-medium mb-2">
                                & Earn Upto ₹500*"
                            </div>
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < 4 ? 'text-orange-400 fill-current' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex space-x-2">

                            <img className='w-20 h-20' src="https://www.shutterstock.com/image-vector/vector-illustration-material-young-couple-600nw-2216537437.jpg" alt="" />
                        </div>
                    </div>
                </div>


                <div className="bg-white mx-4 rounded-lg p-4 mb-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-1">
                                Get DreamsToFly App
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                For 10x Faster Results
                            </p>
                            <div className="flex space-x-2">
                                <div className="bg-black text-white px-3 py-1 rounded text-xs flex items-center space-x-1">
                                    <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                                        <span className="text-black text-xs">▶</span>
                                    </div>
                                    <span>Google Play</span>
                                </div>
                                <div className="bg-black text-white px-3 py-1 rounded text-xs flex items-center space-x-1">
                                    <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                                        <span className="text-black text-xs">🍎</span>
                                    </div>
                                    <span>App Store</span>
                                </div>
                            </div>
                        </div>
                        <div className="ml-4">

                            <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                                <div className="grid grid-cols-8 gap-px w-12 h-12">
                                    {[...Array(64)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="px-4 mb-2">
                    <div className="flex items-center justify-center space-x-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Facebook className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <Instagram className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                            <Twitter className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                            <Youtube className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                            <Linkedin className="w-5 h-5 text-white" />
                        </div>
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                            <Rss className="w-5 h-5 text-white" />
                        </div>
                    </div>
                </div>


            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
                <div className="flex items-center justify-between max-w-sm mx-auto">
                    <button className="flex flex-col items-center space-y-1 p-2">
                        <Search className="w-5 h-5 text-gray-600" />
                        <span className="text-xs text-gray-600">Search</span>
                    </button>
                    <button className="flex flex-col items-center space-y-1 p-2">
                        <div className="w-5 h-5 bg-gray-600 rounded"></div>
                        <span className="text-xs text-gray-600">Colleges</span>
                    </button>
                    <button className="flex flex-col items-center space-y-1 p-2">
                        <div className="w-5 h-5 bg-gray-600 rounded"></div>
                        <span className="text-xs text-gray-600">Exams</span>
                    </button>
                    <button className="flex flex-col items-center space-y-1 p-2">
                        <div className="w-5 h-5 bg-gray-600 rounded"></div>
                        <span className="text-xs text-gray-600">Courses</span>
                    </button>
                    <button className="flex flex-col items-center space-y-1 p-2">
                        <div className="w-5 h-5 bg-gray-600 rounded"></div>
                        <span className="text-xs text-gray-600">More</span>
                    </button>
                </div>
            </div>


            <div className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                    <h3 className="font-semibold text-lg mb-4">Select Your Goal</h3>
                    <div className="space-y-3">
                        {['Engineering', 'Medical', 'Management', 'Arts & Science', 'Law', 'Other'].map((goal) => (
                            <button
                                key={goal}
                                onClick={() => setSelectedGoal(goal)}
                                className={`w-full text-left p-3 rounded-lg border transition-colors ${selectedGoal === goal
                                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                {goal}
                            </button>
                        ))}
                    </div>
                    <button className="w-full bg-orange-500 text-white py-3 rounded-lg mt-4 font-medium">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CollegeduniaApp;
