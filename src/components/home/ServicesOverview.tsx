import Link from "next/link";
import { Car, PackageSearch, HardHat, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    title: "Imported Vehicles",
    description: "Access our exclusive inventory of premium, hand-picked luxury vehicles imported directly for you.",
    icon: Car,
    href: "/inventory",
    delay: 0.1,
  },
  {
    title: "Clearing & Forwarding",
    description: "Expert logistics and customs clearance services to ensure your cargo arrives safely and on time.",
    icon: PackageSearch,
    href: "/services#clearing",
    delay: 0.2,
  },
  {
    title: "Construction Materials",
    description: "High-quality building materials sourced globally to meet the highest industry standards.",
    icon: HardHat,
    href: "/services#materials",
    delay: 0.3,
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
            <ScrollReveal key={index} delay={service.delay} direction="up">
              <Link href={service.href} className="block group h-full">
                <div className="bg-white dark:bg-black/50 border border-gray-200 dark:border-white/5 p-10 h-full hover:bg-gray-50 dark:hover:bg-black/80 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 relative overflow-hidden flex flex-col items-start rounded-sm shadow-sm dark:shadow-none">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                    <service.icon size={32} className="text-gray-500 dark:text-secondary group-hover:text-primary dark:group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider group-hover:gap-4 transition-all">
                    Learn More <ArrowRight size={16} />
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
