"use client";

import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/ui/shiny-button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { user } = useUser();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stormy-light/20">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo with enhanced styling */}
        <Link href="/" className="flex items-center group">
          <Image 
            src={"/logo.png"} 
            alt="CourseAI Logo" 
            width={150} 
            height={100} 
            priority 
            className="object-cover group-hover:scale-105 transition-transform duration-200" 
          />
        </Link>
        
        {/* Navigation and CTA */}
        <div className="flex items-center gap-4">
          {!user ? (
            <Link href="/sign-up">
              <ShinyButton text="Sign Up" />
            </Link>
          ) : (
            <Link href="/dashboard">
              <Button className="bg-stormy-morning hover:bg-stormy-dark text-white transition-colors duration-200">
                Dashboard
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
