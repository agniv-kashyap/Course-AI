import { BorderBeam } from "@/components/ui/border-beam";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import React from "react";

export const AICourseText = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-r from-stormy-light/30 via-white to-stormy-blue/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-stormy-morning/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-stormy-blue/20 to-transparent"></div>
      </div>
      
      {/* Enhanced container with border beam effect */}
      <div className="relative container mx-auto px-4">
        <BorderBeam size={250} duration={12} delay={9} />
        
        <div className="relative z-10">
          <VelocityScroll
            text="Effortless Course Creation with AI – Transform Ideas into Learning Experiences - AI Course Generator"
            default_velocity={1}
            className="font-display text-center text-3xl font-bold tracking-[-0.02em] text-stormy-dark drop-shadow-sm md:text-6xl md:leading-[4rem] lg:text-7xl"
          />
          
          {/* Subtle subtitle */}
          <div className="text-center mt-8">
            <p className="text-lg text-stormy-dark/60 max-w-2xl mx-auto">
              Powered by advanced AI technology to deliver exceptional learning experiences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
