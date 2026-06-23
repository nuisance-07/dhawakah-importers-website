import Link from "next/link";
import { Car, PackageSearch, HardHat, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AutoCarousel from "@/components/ui/AutoCarousel";

const services = [
  {
    title: "Vehicle Importation",
    description: "Access our exclusive inventory of premium, hand-picked luxury vehicles imported directly for you.",
    icon: Car,
    href: "/inventory",
    delay: 0.1,
    images: Array.from({ length: 15 }).map((_, i) => `/services/cars/car-${i + 1}.jpeg`),
  },
  {
    title: "Clearing & Forwarding",
    description: "Expert logistics and customs clearance services to ensure your cargo arrives safely and on time.",
    icon: PackageSearch,
    href: "/services#clearing",
    delay: 0.2,
    images: [
      "/services/materials/logistics-1.jpeg",
      "/services/materials/logistics-2.jpeg",
      "/services/materials/logistics-3.jpeg",
      "/services/materials/logistics-4.jpeg",
      "/services/materials/logistics-5.jpeg",
      "/services/materials/logistics-6.jpeg",
      "/services/port/port-1.png",
      "/services/port/port-2.png",
      "/services/port/port-3.png"
    ],
  },
  {
    title: "Construction Materials",
    description: "High-quality building materials sourced globally to meet the highest industry standards.",
    icon: HardHat,
    href: "/services#materials",
    delay: 0.3,
    images: [
      "/services/construction/construction-1.jpeg",
      "/services/construction/construction-2.jpeg",
      "/services/construction/construction-3.jpeg"
    ],
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-dark-surface relative">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-2 block">What We Do</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white uppercase">Our Services</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={service.delay} direction="up" className="h-full">
              <Link href={service.href} className="block group h-full">
                <div className="bg-white dark:bg-black/50 border border-gray-200 dark:border-white/5 h-full hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 relative flex flex-col items-start rounded-sm shadow-sm dark:shadow-none overflow-hidden group/card">
                  
                  {/* Carousel Header */}
                  <div className="w-full h-56 relative overflow-hidden">
                    <AutoCarousel images={service.images} interval={3500 + index * 500} />
                    <div className="absolute inset-0 bg-black/30 group-hover/card:bg-black/10 transition-colors z-10" />
                  </div>

                  {/* Content */}
                  <div className="p-8 pt-0 flex flex-col flex-grow w-full relative z-20 bg-white dark:bg-[#0a0a0c]">
                    <div className="w-16 h-16 bg-white dark:bg-[#0a0a0c] border border-gray-100 dark:border-white/10 rounded-full flex items-center justify-center mb-6 group-hover/card:bg-primary/10 transition-colors -mt-8 relative z-30 shadow-md self-start">
                      <service.icon size={28} className="text-gray-500 dark:text-secondary group-hover/card:text-primary transition-colors" />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover/card:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider group-hover/card:gap-4 transition-all">
                      Learn More <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
