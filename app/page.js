"use client";
import HeroSection from "@/components/HeroSection";
import Programs from "@/components/Programs";
import CampusHighlights from "@/components/CampusHighlights";
import TopRecruiters from "@/components/TopRecruiters";

import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Programs />
      <CampusHighlights />
      <TopRecruiters />
      <TestimonialSlider />
    </main>
  );
}
