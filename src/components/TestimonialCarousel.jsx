import React, { useState } from "react";
import "@/styles/waves.css";

const testimonials = [
  {
    id: 1,
    name: "Carlos Méndez",
    image: "https://img.lovepik.com/element/45016/4170.png_860.png",
    quote: "¡El servicio es increíble! Mis mascotas están en las mejores manos.",
  },
  {
    id: 2,
    name: "Ana López",
    image: "https://img.lovepik.com/element/45016/4170.png_860.png",
    quote: "Confío plenamente en ellos. Siempre vuelvo tranquila.",
  },
  {
    id: 3,
    name: "Pedro García",
    image: "https://img.lovepik.com/element/45016/4170.png_860.png",
    quote: "Amables y profesionales. ¡Mi perro los adora!",
  },
  {
    id: 4,
    name: "Sofía Martínez",
    image: "https://img.lovepik.com/element/45016/4170.png_860.png",
    quote: "El mejor cuidado para mis mascotas. ¡Muy recomendable!",
  },
];

const TestimonialCard = ({ testimonial, isActive, gradientStart = 'from-[#3D75EC]', gradientEnd = 'to-[#89a9f4]' }) => (
  <div
    className={`w-[300px] px-4 py-6 transform transition-all duration-500 ${isActive ? "scale-125 z-10" : "scale-100 opacity-100"}`}
  >
    <div
      className={`p-6 text-white rounded-3xl shadow-lg ${isActive
        ? "bg-gradient-to-br from-red-500 to-[#FD6845]"
        : `bg-gradient-to-br ${gradientStart} ${gradientEnd}`
        }`}
    >
      <div className="flex flex-col items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full mb-3"
        />
        <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
        <p className="text-center text-sm">"{testimonial.quote}"</p>
      </div>
    </div>
  </div>
);

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleTestimonials = () => {
    const visibleTestimonials = [];
    for (let i = 0; i < 3; i++) {
      visibleTestimonials.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visibleTestimonials;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center m-auto w-full max-w-[600px]">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#ff6b6b]">
          Lo que dicen nuestros clientes:
        </h2>
      </div>
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          className="absolute left-[calc(50%_-_500px)] top-1/2 transform -translate-y-1/2 bg-[#FD6845] text-white rounded-full p-3 shadow-lg focus:outline-none z-10 hover:scale-110 transition-transform"
          onClick={handlePrev}
          aria-label="Anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="none">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center justify-center space-x-4 w-[900px] h-fit mt-12">
          {getVisibleTestimonials().map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === 1}
            />
          ))}
        </div>
        <button
          className="absolute right-[calc(50%_-_500px)] top-1/2 transform -translate-y-1/2 bg-[#FD6845] text-white rounded-full p-3 shadow-lg focus:outline-none z-10 hover:scale-110 transition-transform"
          onClick={handleNext}
          aria-label="Siguiente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="none">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
