import Header from "./_components/Header";
import Hero from "./_components/Hero";
import DotPattern from "@/components/ui/dot-pattern";
import { ny } from "@/lib/utils";
import { HowItWorks } from "./_components/HowItWorks";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content Grid */}
      <main className="relative">
        {/* Hero Section - Full Width */}
        <section className="relative">
          <Hero />
        </section>
        
        {/* Content Sections Container */}
        <div className="relative">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-stormy-light/5 via-transparent to-stormy-blue/5"></div>
          
          {/* Grid Layout for Content Sections */}
          <div className="relative grid grid-cols-1 gap-0">
            
            {/* How It Works Section - Now directly after Hero */}
            <section className="relative z-10">
              <HowItWorks />
            </section>
            
            {/* Bottom Spacing */}
            <div className="h-20 bg-gradient-to-b from-transparent to-stormy-light/10"></div>
          </div>
        </div>
      </main>
      
      {/* Background Pattern */}
      <DotPattern
        className={ny(
          "absolute inset-0 pointer-events-none [mask-image:radial-gradient(800px_circle_at_center,white,transparent)] opacity-30"
        )}
      />
    </div>
  );
}
