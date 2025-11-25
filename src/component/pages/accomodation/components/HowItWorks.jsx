import React from "react";

const steps = [
  {
    title: "Create Your Listing",
    step: "Step 1",
    image: "/images/accomodation/listing1.png",
    desc: "Create an account and list your property in minutes",
  },
  {
    title: "Connect With Students",
    step: "Step 2",
    image: "/images/accomodation/listing2.png",
    desc: "Students will discover your property through our Property Management System",
  },
  {
    title: "Manage With Ease",
    step: "Step 3",
    image: "/images/accomodation/listing3.png",
    desc: "Easily handle bookings and communications through our system",
  },
];

const HowItWorks = () => {
  return (
    <section className="px-6 md:px-16 py-14">
       <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-medium text-start text-gray-900 mb-12">
        How It Works ?
        </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition"
          >
            <div className="relative p-2">
            <img src={item.image} alt={item.title} className="w-full h-56 object-cover rounded-2xl" />
            <span className="absolute bg-white text-blue-600 text-sm font-semibold px-4 py-1 rounded-l-0 rounded-r-full top-5 left-0">
                {item.step}
              </span>
              </div>

            <div className="p-6">
              

              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default HowItWorks;
