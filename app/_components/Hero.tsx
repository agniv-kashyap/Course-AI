"use client";

import Link from "next/link";
import PulsatingButton from "@/components/ui/pulsating-button";
import WordPullUp from "@/components/ui/word-pull-up";
import { useUser } from "@clerk/nextjs";
import ShinyButton from "@/components/ui/shiny-button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const { user } = useUser();

  const scrollToHowToGetStarted = () => {
    const element = document.getElementById('how-to-get-started');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stormy-light via-white to-stormy-blue/30"></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-stormy-morning/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-stormy-blue/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-stormy-light/30 rounded-full blur-lg animate-pulse delay-500"></div>
      
      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* Main Headline with improved typography */}
        <div className="mb-8">
          <WordPullUp
            className="text-5xl font-bold tracking-[-0.02em] text-stormy-dark md:text-8xl md:leading-[6rem] lg:text-9xl"
            words="CourseAi"
          />
        </div>

        {/* Enhanced description with better typography */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-medium text-stormy-dark/80 leading-relaxed">
            Revolutionize your course creation with our AI-powered platform.
            <span className="block mt-2 text-lg md:text-xl text-stormy-dark/60">
              Delivering engaging and high-quality courses in minutes.
            </span>
          </p>
        </div>

        {/* Enhanced CTA section with better spacing */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 z-20 relative">
          {!user ? (
            <Link href="/sign-in" className="transform hover:scale-105 transition-transform duration-200">
              <PulsatingButton
                text="Get Started"
                pulseColor="150, 0, 255"
                backgroundColor="#9945FF"
                textColor="#ffffff"
                animationDuration="1.5s"
                buttonWidth="220px"
                buttonHeight="56px"
              />
            </Link>
          ) : (
            <Link href="/dashboard" className="transform hover:scale-105 transition-transform duration-200">
              <ShinyButton text="Go to Dashboard" />
            </Link>
          )}
          
          {/* Scroll to How to Get Started button */}
          <button
            onClick={scrollToHowToGetStarted}
            className="flex items-center gap-2 px-6 py-3 bg-stormy-light/50 hover:bg-stormy-light/70 text-stormy-dark/80 hover:text-stormy-dark rounded-full transition-all duration-200 transform hover:scale-105"
          >
            <span className="text-sm font-medium">How to Get Started</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 flex justify-center items-center gap-8 text-sm text-stormy-dark/50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Instant Generation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>High Quality</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;