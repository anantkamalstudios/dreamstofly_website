import React from 'react'

function SopMaker() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-64 h-40 bg-white rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
                {/* Animated text */}
                <h2 className="text-xl font-bold text-gray-700 animate-bounce">
                    Coming Soon 🚀
                </h2>

                {/* Optional shimmer background */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse opacity-30"></div>
            </div>
        </div>
    )
}

export default SopMaker
