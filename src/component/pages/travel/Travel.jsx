import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  ArrowRight,
  Star,
  MapPin,
  Users,
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Globe,
  Shield,
  BookOpen,
  Briefcase,
  Heart,
  Luggage,
  Building,
  Play,
} from "lucide-react";

const Travel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});

  const visaServices = [
    {
      title: "Business Visa",
      description:
        "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
      image:
        "https://www.s2immigration.co.in/immigration/wp-content/uploads/2015/09/Business-visa-pic-300x149.png",
      bgColor: "bg-white",
      borderColor: "border-gray-200",
    },
    {
      title: "Working Visa",
      description:
        "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
      image:
        "https://www.s2immigration.co.in/immigration/wp-content/uploads/2015/09/Business-visa-pic-300x149.png",
      bgColor: "bg-white",
      borderColor: "border-gray-200",
    },
    {
      title: "Student Visa",
      description:
        "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
      image:
        "https://www.s2immigration.co.in/immigration/wp-content/uploads/2015/09/Business-visa-pic-300x149.png",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-100",
    },
    {
      title: "Tourist Visa",
      description:
        "Et purus duis sollicitudin dignissim habitant. Egestas nulla quis the venenatis cras sed eu",
      image:
        "https://www.s2immigration.co.in/immigration/wp-content/uploads/2015/09/Business-visa-pic-300x149.png",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
    },
    {
      title: "Medical Visa",
      description:
        "Get assistance for your medical visa to access world-class healthcare abroad.",
      image:
        "https://www.s2immigration.co.in/immigration/wp-content/uploads/2015/09/Business-visa-pic-300x149.png",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];

  const supportServices = [
    {
      title: "Student Visa",
      description:
        "Secure your student visa for studying abroad with our trusted services.",
      icon: <BookOpen className="w-5 h-5 text-white" />,
      bgColor: "bg-yellow-500",
    },
    {
      title: "Business Visa",
      description:
        "Fast-track your business visa to expand your global business opportunities.",
      icon: <Briefcase className="w-5 h-5 text-white" />,
      bgColor: "bg-red-500",
    },
    {
      title: "Tourist Visa",
      description:
        "Secure your tourist visa with easy and reliable guidance for smooth travel.",
      icon: <Luggage className="w-5 h-5 text-white" />,
      bgColor: "bg-teal-600",
    },
  ];

  const tripCards = [
    {
      title: "Trip To Greece",
      dateBy: "14-29 June | by Robbin jo",
      image:
        "https://media.istockphoto.com/id/499608704/photo/white-luxury-yacht-against-azure-sea.jpg?s=612x612&w=0&k=20&c=CDZ64DAPk4ESg4uyfWniPrL-Zp36zwExBpiAMYCBFs4=",
      people: 24,
    },
    {
      title: "Trip To Rome",
      dateBy: "01-12 May | by Angela",
      image:
        "https://images.unsplash.com/photo-1548588683-cb1fa3d64d54?w=1200&auto=format&fit=crop&q=60",
      people: 18,
    },
    {
      title: "Trip To Tokyo",
      dateBy: "05-20 July | by Kenji",
      image:
        "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=1200&auto=format&fit=crop&q=60",
      people: 32,
    },
    {
      title: "Trip To London",
      dateBy: "10-22 Sept | by Sarah",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop&q=60",
      people: 21,
    },
  ];

  const testimonials = [
    {
      name: "Regina Miles",
      role: "Designer",
      rating: 4,
      text: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAsAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EADEQAAIBAwIDBQcEAwAAAAAAAAABAgMEEQUhEjFRIkFhcYETMjNSYqHBI0KR4RSx0f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A+ygAAAAAAAAAADnur2har9SWZd0Y7si62sVZ7UYqC6vdlgnB5FalqF3J73E15bCN/dp7XE/XD/2IlWUEJR1mtFpVoRmu9rZkna3tG6+HLEvklzBXQACKAAAAAAAAAAAAAAAAEZqWo+ycqNB9vvlzUTo1O6/xbfs/EntHw8SuZzu85fPJUZlJybk8tvnkwAUAAEDMXwvK2a3TXUwBqpvTdS9pw0bhrj5KXXw8yTKjnG65osWmXf8Ak0O18SGFLx8SK7AAQAAAAAAAAAAAHMDONwK7qtZ1r2fy0+wvz9zjMyk5Nyfe8swaxAABAAAAAAOzSqzo3sFnap2X68jjMqTjJSXOLyBbQE8rIMtAAAAAAAAAAACSymuoAFRWywDfe0/ZXVWHcpNryZoNIAAIAAAAAAfJrrsDdZUvbXVKHdxJvy7wLPFYil0Rky+Zgy0AAAAAAAAAAAAAIvXLbjjG4gt47Tx07iFLbJKUXGSyns0V7UbKVrNyis0W+y+nmVHGACoAAAAAoTOh2zUZXE1720Pyzi06xldTUpLFJPtPr4IsSSilGKxFLCRKAAIoAAAAAAAAAAAAAGJxjKDjKKcXzT7ziu9Ut6HZhmpPw5L1NVlq3tqyp1YRhxe7JdQNV3pEk3O2eV8j5+jIypTqUpcNWnKD+pFsPMoqS4ZJNdGi1IqQLPOytZc6EPRCNlax3VCH8CkVulTnWnw0oSm+iRJ2mkSb4rl4XyJkxFKMeGKSj0QFIxCMYRUYJKKWEkZIy81VUazpUYKfDzk3t6G211ShXxGf6U/q5P1IruA58gAAAAAAAAAANdzWp29F1KjxFd3VgZr1YUKbqVZcMUQN7qFS5bjF8FL5U935mm8uql3Vcpvs/tS7jQVBGU8GAUTmm6jGpFUq7xU7pPlL+ySW5UTsttSuaGylxw+WZBYzBFQ1qOO3QefpkYlrUcdii2/qlgRUsRupakqUXSt2nUezkv2/2R9zqNxcR4XJQh8sNvucfcIh57j0ALg7bHUals1CTc6Xem915E7Rr069NVKUlKL+xVTfa3VS0qKdN9n90XykBZwa6FaFxSVSnLKf2NhlQAAAAAk1GLlJpJc2yt6heSu62U/04vsL8ndrV1jFtF7tZn/whyxAAFAABAAAAAAAAAAAAAB1afdu0rqT+HL3kWRNSSlF5T5PqVEmNEuuy7ab8af5RFSwAIoeK1WNGlKrLlFZPZGa7WcaUKMXjjfE/JAQ9WcqtWdSfvSeWeADTIAAAAAAAAAAAAAAAAAAB6pVJUqkakPei8o8gRVroVI1qUakPdmsnsi9CrcVKVGT915j5MlDKsrmV7WpOWoTT5RjFL+MmAXBxAArIAAAAAAAAAAAAAAAAAAAAA7tG21Cmlykmn5YLAgCauP/2Q==",
    },
  ];

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const ShimmerPlaceholder = () => (
    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Travel */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-red-500 text-sm font-medium mb-4 tracking-wide">
                BEST DESTINATIONS AROUND THE WORLD
              </p>

              <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-8">
                Travel,{" "}
                <span className="relative">
                  enjoy
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-red-400 opacity-60 -z-10"></div>
                </span>
                <br />
                and live a new
                <br />
                and full life
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>

              <div className="flex items-center gap-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Find out more
                </button>
                <button className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                  <div className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
                    <Play className="w-4 h-4 ml-1" />
                  </div>
                  <span className="font-medium">Watch now</span>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww"
                alt="Traveler"
                className="w-full max-w-md mx-auto"
              />

              {/* Floating airplane icons */}
              <div className="absolute top-20 -right-10 text-blue-500 opacity-70">
                <svg
                  className="w-8 h-8 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </div>

              <div className="absolute top-40 -left-16 text-blue-400 opacity-50">
                <svg
                  className="w-6 h-6 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header for Visa Services */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-700 leading-tight">
            Seeking Adventure Thrills
            <br />
            and Excitement Await
          </h2>
        </div>
      </section>

      {/* Visa Services - Swiper */}
      <section className="pb-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[SwiperPagination]}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {visaServices.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`group ${service.bgColor} ${service.borderColor} border-2 rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full`}
                >
                  <div className="mb-4">
                    <div className="relative rounded-2xl overflow-hidden mb-4 bg-gray-100">
                      {!imageLoaded[`visa-${index}`] && <ShimmerPlaceholder />}
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-32 object-cover transition-opacity duration-500 ${
                          imageLoaded[`visa-${index}`]
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        onLoad={() => handleImageLoad(`visa-${index}`)}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-teal-700 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="p-2 rounded-xl border-2 border-blue-200 text-blue-600 group-hover:border-blue-400 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                      {index === 0 && <Shield className="w-6 h-6" />}
                      {index === 1 && <Building className="w-6 h-6" />}
                      {index === 2 && <BookOpen className="w-6 h-6" />}
                      {index === 3 && <Globe className="w-6 h-6" />}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Support Services with Trip Card */}
      <section className="py-16 px-4 bg-gray-50 relative overflow-hidden">
        {/* Decorative dotted lines */}
        <div className="absolute left-0 top-1/2 w-32 h-px border-t-2 border-dotted border-teal-300 opacity-50"></div>
        <div className="absolute right-0 bottom-1/4 w-32 h-px border-t-2 border-dotted border-teal-300 opacity-50"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Services List */}
            <div>
              <div className="mb-8">
                <p className="text-gray-500 text-sm font-medium mb-2">
                  Easy and Fast
                </p>
                <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                  Easy Visa Support From
                  <br />
                  Start To Finish
                </h2>
              </div>

              <div className="space-y-6">
                {supportServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div
                      className={`flex-shrink-0 w-10 h-10 ${service.bgColor} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Trip Cards (Swiper) */}
            <div className="relative">
              <Swiper
                modules={[SwiperPagination]}
                pagination={{ clickable: true }}
                spaceBetween={24}
                slidesPerView={1}
              >
                {tripCards.map((trip, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                      <div className="relative mb-4 rounded-2xl overflow-hidden bg-gray-100">
                        {!imageLoaded[`trip-${index}`] && (
                          <ShimmerPlaceholder />
                        )}
                        <img
                          src={trip.image}
                          alt={trip.title}
                          className={`w-full h-48 object-cover transition-opacity duration-500 ${
                            imageLoaded[`trip-${index}`]
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                          onLoad={() => handleImageLoad(`trip-${index}`)}
                        />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {trip.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">
                        {trip.dateBy}
                      </p>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                          <Calendar className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                          <MapPin className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                          <ArrowRight className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Building className="w-4 h-4" />
                        <span>{trip.people} people going</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Testimonials Slider */}
          <div className="mb-16">
            <Swiper
              modules={[SwiperPagination]}
              pagination={{ clickable: true }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-yellow-400 transition-all duration-300 hover:shadow-2xl h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-2xl object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-500 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 leading-relaxed text-sm">
                      {testimonial.text}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Experience Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Traveler Image */}
            <div className="relative">
              <div className="relative">
                {/* Background Circle */}
                <div className="absolute inset-0 rounded-full transform scale-110"></div>

                {/* Main Image */}
                <div className="relative z-10 bg-yellow-300 rounded-full p-8">
                  <img
                    src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fHww"
                    alt="Traveler"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Location Pin */}
                <div className="absolute -bottom-6 -left-6 bg-yellow-500 rounded-2xl p-4 shadow-xl">
                  <Star className="w-8 h-8 text-white" />
                </div>

                {/* Stats Cards */}
                <div className="absolute top-8 -right-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-10">
                  <div className="text-3xl font-bold text-orange-500 mb-1 ">
                    600%
                  </div>
                  <div className="text-sm text-gray-600">Destinations</div>
                </div>

                <div className="absolute bottom-16 right-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-lg font-bold text-gray-800">
                      5000+
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">Customers</div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <div className="mb-8">
                <p className="text-orange-500 text-sm font-medium mb-2">
                  Our Experience
                </p>
                <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                  Our Stories Have
                  <br />
                  Adventures
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-12">
                We are experienced in bringing adventures to stay their journey,
                with all outdoor destinations in the world as our specialties.
                Start your adventure now! Nature has already called you!
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    12K+
                  </div>
                  <div className="text-gray-600 text-sm">
                    Succes
                    <br />
                    Journey
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    16+
                  </div>
                  <div className="text-gray-600 text-sm">
                    Awards
                    <br />
                    Winning
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    20+
                  </div>
                  <div className="text-gray-600 text-sm">
                    Years Of
                    <br />
                    Experience
                  </div>
                </div>
              </div>

              {/* Pagination */}
              {/* <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2">
                  <span className="text-white text-sm px-2">1 / 2</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// CSS Animations
const styles = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .animate-shimmer {
    animation: shimmer 1.5s infinite;
  }
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default Travel;
