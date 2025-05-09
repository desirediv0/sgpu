"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  BookOpen,
  Users,
} from "lucide-react";
import Image from "next/image";

// University-appropriate images for the slides
const slides = [
  {
    id: 1,
    image: "/institute-7421918_640.jpg", // Replace with your university campus image
    title: "Excellence in Education",
    subtitle: "Shaping future leaders with world-class academic programs",
    features: [
      {
        icon: <BookOpen className="h-5 w-5" />,
        text: "200+ Undergraduate & Postgraduate Programs",
      },
      {
        icon: <Users className="h-5 w-5" />,
        text: "35,000+ Students from 50+ Countries",
      },
      {
        icon: <Calendar className="h-5 w-5" />,
        text: "Admissions Open for 2025-26",
      },
    ],
  },
  {
    id: 2,
    image: "/harvard-university-cambridge-usa_1268-14363.jpg.avif", // Replace with research lab or library image
    title: "Research & Innovation",
    subtitle:
      "Pioneering advancements through cutting-edge research facilities",
    features: [
      { icon: <BookOpen className="h-5 w-5" />, text: "150+ Research Centers" },
      {
        icon: <Users className="h-5 w-5" />,
        text: "₹500 Crore Annual Research Budget",
      },
      { icon: <Calendar className="h-5 w-5" />, text: "500+ Patents Filed" },
    ],
  },
  {
    id: 3,
    image: "/photo-1576495199011-eb94736d05d6.jpeg", // Replace with campus life or graduation image
    title: "Campus Life & Placements",
    subtitle: "Vibrant campus culture with exceptional career opportunities",
    features: [
      {
        icon: <BookOpen className="h-5 w-5" />,
        text: "100+ Companies Visit Annually",
      },
      { icon: <Users className="h-5 w-5" />, text: "98% Placement Record" },
      {
        icon: <Calendar className="h-5 w-5" />,
        text: "50+ Student Clubs & Organizations",
      },
    ],
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Handle automatic slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause autoplay when user interacts with controls
  const handleNavigation = (action) => {
    setIsAutoPlaying(false);

    if (action === "next") {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (action === "prev") {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    } else {
      setCurrentSlide(action);
    }

    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden"
      aria-label="University highlights slideshow"
    >
      {/* Slider */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Background image with gradient overlay */}
            <div className="absolute inset-0 bg-gray-900">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover opacity-80"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4 md:px-6 lg:px-8 text-white">
                <div className="max-w-4xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    <div className="bg-[#FF5C00]/20 text-[#FF5C00] inline-block px-4 py-1 rounded-full text-sm md:text-base font-medium mb-2">
                      University Spotlight
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                      {slide.title}
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl text-gray-100">
                      {slide.subtitle}
                    </p>

                    {/* Feature highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                      {slide.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-sm md:text-base"
                        >
                          <div className="bg-[#FF5C00] p-2 rounded-full">
                            {feature.icon}
                          </div>
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button className="bg-[#FF5C00] hover:bg-[#E05000] text-white px-6 py-3 rounded-md font-medium text-base">
                        Apply Now
                      </Button>
                      <Button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-medium text-base">
                        Explore Programs
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - larger on desktop, smaller on mobile */}
      <button
        onClick={() => handleNavigation("prev")}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#FF5C00] text-white p-2 md:p-3 rounded-full transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={() => handleNavigation("next")}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#FF5C00] text-white p-2 md:p-3 rounded-full transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(index)}
            className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-[#FF5C00] w-4 md:w-6"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
