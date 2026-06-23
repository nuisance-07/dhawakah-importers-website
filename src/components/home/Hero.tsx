import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video / Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/vehicles/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-white dark:to-[#0a0a0c]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center mt-16">
        <ScrollReveal delay={0.2} direction="up">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 uppercase">
            Dhawakah Importers
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4} direction="up">
          <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-300 max-w-3xl mx-auto font-light mb-12 tracking-wide">
            Your Premium Partner in Luxury Vehicles, Superior Building Materials & Expert Logistics.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.6} direction="up" className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/inventory"
            className="group px-8 py-4 bg-primary text-black font-semibold rounded-sm hover:bg-primary-hover transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Explore Vehicles
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/services"
            className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-sm hover:bg-white/10 hover:border-white transition-all w-full sm:w-auto justify-center text-center"
          >
            Our Services
          </Link>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <span className="text-xs uppercase tracking-widest text-gray-900 dark:text-white">Scroll Down</span>
        <div className="w-[1px] h-12 bg-primary" />
      </div>
    </section>
  );
}
