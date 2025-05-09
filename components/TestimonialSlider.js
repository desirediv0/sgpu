"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Fake data for the testimonials
const testimonials = [
  {
    id: 1,
    name: "Aditya Choudhary",
    role: "BA",
    achievement: "Gold medal in World Archery Youth Championships",
    location: "Poland",
    type: "STUDENT",
    image: "/images3.jpeg",
    testimonial:
      "The state of art indoor and outdoor sports facility provided at STGU is commendable. The understanding of the game and strategizing the strengths of the players by the coach is laudable. They understand the players and this relationship goes beyond the field for a lifetime.",
  },
  {
    id: 2,
    name: "Amit Kumar Mishra",
    role: "MSc",
    achievement: "Silver medal in National Science Competition",
    location: "India",
    type: "STUDENT",
    image: "/images-2.jpeg",
    testimonial:
      "The research facilities and mentorship at STGU have been instrumental in my academic journey. The professors are always available to guide students and provide valuable insights that help us excel in our fields.",
  },
  {
    id: 3,
    name: "Navtej Singh Sandhu",
    role: "BTech",
    achievement: "First prize in International Robotics Challenge",
    location: "Singapore",
    type: "STUDENT",
    image: "/images-3.jpeg",
    testimonial:
      "The engineering labs at STGU are equipped with cutting-edge technology that allows students to experiment and innovate. The practical approach to learning has helped me develop skills that are highly valued in the industry.",
  },
  {
    id: 4,
    name: "Utkarsh Gautam",
    role: "MBA",
    achievement: "Best Business Plan Award",
    location: "National Entrepreneurship Summit",
    type: "STUDENT",
    image: "/images.jpeg",
    testimonial:
      "The entrepreneurship ecosystem at STGU is vibrant and supportive. From ideation to execution, the university provides all the resources needed to transform innovative ideas into successful ventures.",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll event to show/hide scroll to top button
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-[#f47b20] p-8 pb-4 relative">
      <div className="max-w-6xl mx-auto mb-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            STGU family speaks
          </h1>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="p-3 border border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 border border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait" custom={activeIndex}>
          <motion.div
            key={activeIndex}
            custom={activeIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white p-6 md:p-10 rounded-sm shadow-md mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f47b20] transform rotate-3 rounded-lg"></div>
                <div className="relative transform hover:scale-105 transition-transform duration-300 border-4 border-white shadow-xl rounded-lg overflow-hidden">
                  <img
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="text-white text-sm font-medium">
                      {testimonials[activeIndex].name}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block bg-[#f47b20] text-black font-semibold px-3 py-1 mb-4">
                  {testimonials[activeIndex].type}
                </div>
                <p className="text-gray-700 mb-6">
                  {testimonials[activeIndex].testimonial}
                </p>
                <div className="border-t border-gray-300 pt-4 mt-4">
                  <h3 className="font-bold text-xl">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-gray-700">
                    {testimonials[activeIndex].achievement}
                  </p>
                  <p className="text-gray-700">
                    {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="border-t border-b border-gray-700 py-4">
          <Carousel>
            <CarouselContent className="flex">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="basis-auto">
                  <div
                    className={`flex items-center gap-3 cursor-pointer px-4 ${
                      activeIndex === index ? "opacity-100" : "opacity-70"
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <div className="relative overflow-hidden rounded-md border-2 border-white shadow-md">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className={`w-12 h-12 object-cover transition-transform duration-300 ${
                          activeIndex === index ? "scale-110" : "scale-100"
                        }`}
                      />
                      {activeIndex === index && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute inset-0 border-2 border-[#f47b20]"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                    <span className="font-medium">{testimonial.name}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-[#8B4513] text-white p-3 rounded-sm shadow-lg hover:bg-[#6B3100] transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
