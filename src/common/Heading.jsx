import React from "react";

const Heading = ({ text, className }) => {
  return (
    <h1
      className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 ${className}`}
    >
      {text}
    </h1>
  );
};

export default Heading;
