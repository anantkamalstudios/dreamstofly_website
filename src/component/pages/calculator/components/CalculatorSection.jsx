import React from "react";
import CgpaToGpa from "./CgpaToGpa";
import GpaToCgpa from "./GpaToCgpa";

const CalculatorSection = ({
  inputValue,
  setInputValue,
  outputValue,
  setOutputValue,
  inputError,
  outputError,
  resultValue,
  ResultValue,

  onConvertForward,
  onConvertBackward,

  headerData,
  calculatorCardContent,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
        {headerData.title}
      </h1>

      <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 max-w-4xl mx-auto">
        {headerData.subTitle}
      </p>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        <CgpaToGpa
          inputValue={inputValue}
          setInputValue={setInputValue}
          inputError={inputError}
          resultValue={resultValue}
          onConvertForward={onConvertForward}
          content={calculatorCardContent.first}
        />

        <GpaToCgpa
          outputValue={outputValue}
          setOutputValue={setOutputValue}
          outputError={outputError}
          ResultValue={ResultValue}
          onConvertBackward={onConvertBackward}
          content={calculatorCardContent.second}
        />
      </div>
    </div>
  );
};

export default CalculatorSection;
