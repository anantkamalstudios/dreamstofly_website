import React from "react";

const Heading = ({ text, className }) => {
  return (
    <h1
      className={`text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900 ${className}`}
    >
      {text}
    </h1>
  );
};

export default Heading;
