import React, { useMemo } from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Regina Miles",
    role: "Designer",
    avatar: "/images/services/uk.png",
    rating: 4.5,
    text: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
  {
    id: 2,
    name: "Alex Johnson",
    role: "Product Manager",
    avatar: "/images/services/uk.png",
    rating: 5,
    text: "Amazing experience! The team really understands how to craft delightful journeys and seamless support throughout.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Engineer",
    avatar: "/images/services/uk.png",
    rating: 4,
    text: "Solid quality and great attention to detail. Processes are smooth and responses are quick.",
  },
  {
    id: 4,
    name: "Diego Alvarez",
    role: "Marketer",
    avatar: "/images/services/uk.png",
    rating: 4.5,
    text: "It felt effortless from start to finish. Highly recommend for anyone looking for dependable service.",
  },
];

const Stars = ({ value }) => {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const items = useMemo(() => Array.from({ length: 5 }, (_, i) => i), []);
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {items.map((i) => (
        <Star
          key={i}
          size={18}
          style={{
            fill:
              i < full
                ? "currentColor"
                : half && i === full
                ? "currentColor"
                : "transparent",
          }}
        />
      ))}
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className="relative bg-white rounded-3xl p-8 flex gap-6 items-start border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.06)] min-h-[240px] transition-all duration-300 hover:shadow-lg hover:border-blue-200">
      <div className="w-[130px] h-[180px] rounded-2xl overflow-hidden flex-shrink-0">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <Stars value={item.rating} />
        <p className="mt-3 text-gray-600 leading-relaxed">{item.text}</p>
        <div className="mt-4">
          <div
            className="font-semibold"
            style={{ color: "var(--hover-color)" }}
          >
            {item.name}
          </div>
          <div className="text-sm text-blue-500">{item.role}</div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--hover-color)" }}
          >
            What Clients Say
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Real feedback from people who used our services and loved the
            experience.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation
            loop
            grabCursor
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            speed={700}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              1024: { slidesPerView: 2, spaceBetween: 28 },
            }}
            className="!pb-12"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id}>
                <Card item={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
