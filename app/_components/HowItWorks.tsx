import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { IconType } from "react-icons/lib";
import { BookOpen, FileVideo, Share2, User } from "lucide-react";

interface FeatureProps {
  icon: IconType;
  title: string;
  description: string;
  step: number;
}

const features: FeatureProps[] = [
  {
    icon: User,
    title: "Register for an Account",
    description:
      "Sign up for a free account to access the course creation tools. Once registered, you'll be able to log in and start building your personalized courses",
    step: 1,
  },
  {
    icon: BookOpen,
    title: "Create Your First Course",
    description:
      "Use our intuitive interface to generate a course. Simply provide a topic, and Gemini AI will automatically generate the course content for you.",
    step: 2,
  },
  {
    icon: FileVideo,
    title: "Automatically Attach Related Videos",
    description:
      "After your course is generated, our system will find and attach relevant YouTube videos that complement your course material, saving you the hassle of finding additional resources",
    step: 3,
  },
  {
    icon: Share2,
    title: "Customize and Share",
    description:
      "Customize your course to fit your needs, and once you're satisfied, publish and share it with your students. Our platform makes it easy to manage and distribute your course content.",
    step: 4,
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-to-get-started" className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-stormy-light/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-stormy-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-stormy-morning/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stormy-dark mb-6">
            How To{" "}
            <span className="bg-gradient-to-r from-stormy-morning to-stormy-blue bg-clip-text text-transparent">
              Get Started
            </span>
          </h2>
          <p className="text-xl text-stormy-dark/70 max-w-3xl mx-auto leading-relaxed">
            Create Smarter, Learn Faster – AI-Powered Courses at Your Fingertips
          </p>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map(({ icon, title, description, step }: FeatureProps) => (
            <Card 
              key={title} 
              className="group relative bg-white/80 backdrop-blur-sm border-stormy-light/30 hover:border-stormy-morning/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Step number badge */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-stormy-morning to-stormy-blue rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {step}
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="flex flex-col items-center gap-4 text-center">
                  {/* Enhanced icon with background */}
                  <div className="w-16 h-16 bg-gradient-to-br from-stormy-light to-stormy-blue/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {React.createElement(icon, { 
                      size: 32, 
                      className: "text-stormy-dark group-hover:text-stormy-morning transition-colors duration-300" 
                    })}
                  </div>
                  <span className="text-lg font-semibold text-stormy-dark group-hover:text-stormy-morning transition-colors duration-300">
                    {title}
                  </span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-stormy-dark/70 leading-relaxed text-center group-hover:text-stormy-dark/80 transition-colors duration-300">
                  {description}
                </p>
              </CardContent>
              
              {/* Subtle hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-stormy-morning to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg"></div>
            </Card>
          ))}
        </div>
        
        {/* Call to action section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-stormy-light/50 rounded-full text-stormy-dark/70">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Ready to get started? It only takes a few minutes!</span>
          </div>
        </div>
      </div>
    </section>
  );
};
