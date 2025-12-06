import React, { useState } from "react";

const GREtoGMAT = () => {
  const [greVerbal, setGreVerbal] = useState(156);
  const [greQuant, setGreQuant] = useState(155);
  const [verbalScore, setVerbalScore] = useState(null);
  const [quantScore, setQuantScore] = useState(null);
  const [totalScore, setTotalScore] = useState(null);

  const greVerbalToGMAT = {
    130: 0,
    131: 0,
    132: 0,
    133: 0,
    134: 6,
    135: 7,
    136: 9,
    137: 11,
    138: 12,
    139: 14,
    140: 15,
    141: 17,
    142: 18,
    143: 20,
    144: 22,
    145: 24,
    146: 26,
    147: 28,
    148: 30,
    149: 31,
    150: 33,
    151: 34,
    152: 35,
    153: 36,
    154: 37,
    155: 38,
    156: 39,
    157: 40,
    158: 41,
    159: 42,
    160: 43,
    161: 44,
    162: 45,
    163: 46,
    164: 47,
    165: 48,
    166: 49,
    167: 50,
    168: 51,
    169: 51,
    170: 51,
  };

  const greQuantToGMAT = {
    130: 0,
    131: 0,
    132: 0,
    133: 0,
    134: 0,
    135: 0,
    136: 0,
    137: 0,
    138: 7,
    139: 9,
    140: 11,
    141: 13,
    142: 15,
    143: 17,
    144: 19,
    145: 21,
    146: 24,
    147: 26,
    148: 29,
    149: 31,
    150: 33,
    151: 36,
    152: 38,
    153: 40,
    154: 42,
    155: 44,
    156: 46,
    157: 48,
    158: 49,
    159: 50,
    160: 51,
    161: 51,
    162: 51,
    163: 51,
    164: 51,
    165: 51,
    166: 51,
    167: 51,
    168: 51,
    169: 51,
    170: 51,
  };

  const convertVerbal = () => {
    const score = greVerbalToGMAT[greVerbal] || 0;
    setVerbalScore(score);
    if (quantScore !== null) {
      calculateTotal(score, quantScore);
    }
  };

  const convertQuant = () => {
    const score = greQuantToGMAT[greQuant] || 0;
    setQuantScore(score);
    if (verbalScore !== null) {
      calculateTotal(verbalScore, score);
    }
  };

  const calculateTotal = (verbal, quant) => {
    const scaledVerbal = verbal * 2;
    const scaledQuant = quant * 2;
    const percentile = (scaledVerbal + scaledQuant) / 2;

    const total = Math.round(200 + (percentile / 51) * 600);
    setTotalScore(Math.min(800, Math.max(200, total)));
  };

  return (
    <div className="flex items-center justify-center p-4">
      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
      <div className="bg-white p-2 md:p-4 max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* GRE Verbal Section */}
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              GRE Verbal
            </h2>

            <div className="mb-4 sm:mb-6">
              <div className="flex justify-center items-center mb-2">
                <span className="text-3xl sm:text-4xl font-bold text-blue-500">
                  {greVerbal}
                </span>
              </div>

              <input
                type="range"
                min="130"
                max="170"
                value={greVerbal}
                onChange={(e) => setGreVerbal(parseInt(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #2563eb 0%, #2563eb ${
                    ((greVerbal - 130) / 40) * 100
                  }%, #dbeafe ${
                    ((greVerbal - 130) / 40) * 100
                  }%, #dbeafe 100%)`,
                }}
              />

              <p className="text-center text-sm text-gray-600 mt-2">
                Slide to change
              </p>
            </div>

            <button
              onClick={convertVerbal}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 rounded-full transition duration-200 mb-3 sm:mb-4 text-sm sm:text-base"
            >
              Convert
            </button>
            {verbalScore && (
              <div className="mt-2 p-4 bg-blue-50 border border-green-200 rounded-lg">
                <p className="text-sm text-gray-600">Your CGPA is:</p>
                <p className="text-2xl font-bold text-blue-500">
                  {verbalScore}
                </p>
              </div>
            )}
          </div>

          {/* GRE Quant Section */}
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              GRE Quant
            </h2>

            <div className="mb-4 sm:mb-6">
              <div className="flex justify-center items-center mb-2">
                <span className="text-3xl sm:text-4xl font-bold text-blue-500">
                  {greQuant}
                </span>
              </div>

              <input
                type="range"
                min="130"
                max="170"
                value={greQuant}
                onChange={(e) => setGreQuant(parseInt(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #2563eb 0%, #2563eb ${
                    ((greQuant - 130) / 40) * 100
                  }%, #dbeafe ${((greQuant - 130) / 40) * 100}%, #dbeafe 100%)`,
                }}
              />

              <p className="text-center text-sm text-gray-600 mt-2">
                Slide to change
              </p>
            </div>

            <button
              onClick={convertQuant}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 rounded-full transition duration-200 mb-3 sm:mb-4 text-sm sm:text-base"
            >
              Convert
            </button>
            {quantScore && (
              <div className="mt-2 p-4 bg-blue-50 border border-green-200 rounded-lg">
                <p className="text-sm text-gray-600">Your CGPA is:</p>
                <p className="text-2xl font-bold text-blue-500">{quantScore}</p>
              </div>
            )}
          </div>
        </div>

        {/* Total GMAT Score */}
        {totalScore && (
          <div className="mt-2 p-4 bg-blue-50 border border-green-200 rounded-lg text-center">
            <p className="text-sm text-gray-600">Total Score is:</p>
            <p className="text-2xl font-bold text-blue-500">{totalScore}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GREtoGMAT;
