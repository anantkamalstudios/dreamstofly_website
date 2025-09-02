import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const ServiceLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default ServiceLayout;
