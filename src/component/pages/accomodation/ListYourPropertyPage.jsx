import React from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import StatsSection from './components/StatsSection';
import WhyChooseUs from './components/WhyChooseUs';

const ListYourPropertyPage = () => {
  const features = [
    {
      icon: "/images/accomodation/ticket.png",
      title: "Hassle-Free Management",
      description: "From listing to booking, we handle the details so you can focus on what matters",
    },
    {
      icon: "/images/accomodation/hot-air-balloon.png",
      title: "Grow Profits with Broader Reach",
      description: "Tap into a vast pool of international students looking for accommodation.",
    },
    {
      icon: "/images/accomodation/diamond.png",
      title: "Zero Listing Fees",
      description: "List as many properties as you want—no limits",
    },
  ];
  return (
    <>
      <main className='bg-gray-50 pb-5'>
        <HeroSection />
        <StatsSection />
        <WhyChooseUs features={features} />
        <HowItWorks />
        <CallToAction />
      </main>
    </>
  );
};

export default ListYourPropertyPage;