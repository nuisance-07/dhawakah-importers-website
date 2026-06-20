import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Car, PackageSearch, HardHat, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services | Dhawakah Importers",
  description: "Explore our premium services: Vehicle Importation, Clearing & Forwarding, and Construction Materials.",
};

const services = [
  {
    id: "importation",
    title: "Vehicle Importation",
    icon: Car,
    subtitle: "Your gateway to global luxury.",
    description: "We specialize in sourcing and importing high-end, luxury, and performance vehicles from Japan, UK, Australia, and Singapore. Whether you're looking for a specific make, model, or custom specification, our global network ensures we find the perfect vehicle for you.",
    features: [
      "Direct auction access in Japan",
      "Rigorous pre-shipment inspections",
      "Mileage and condition verification",
      "Secure shipping and marine insurance",
      "Full KRA customs clearance"
    ]
  },
  {
    id: "clearing",
    title: "Clearing & Forwarding",
    icon: PackageSearch,
    subtitle: "Seamless logistics from port to door.",
    description: "Navigating customs can be complex and time-consuming. Our dedicated clearing and forwarding team handles all the paperwork, port charges, and customs declarations on your behalf, ensuring a smooth and hassle-free release of your cargo.",
    features: [
      "Expert knowledge of KRA regulations",
      "Fast-track clearance processes",
      "Handling of all port and CFS charges",
      "Transparent fee structures",
      "Safe inland transportation"
    ]
  },
  {
    id: "materials",
    title: "Construction Materials",
    icon: HardHat,
    subtitle: "Building the future with premium materials.",
    description: "Dhawakah Importers supplies top-tier building and construction materials sourced from reputable global manufacturers. We cater to large-scale developers and individual builders who demand nothing but the best for their projects.",
    features: [
      "High-grade structural steel and iron",
      "Premium cement and binding materials",
      "Specialized interior and exterior finishes",
      "Bulk ordering and logistics",
      "Quality assurance and compliance testing"
    ]
  }
];

export default function ServicesPage() {
  return (
    <PageTransition>
      {/* Header */}
      <div className="bg-dark-surface pt-32 pb-16 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-2 block">What We Do</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-6">
              Our Services
            </h1>
            <p className="text-gray-400 text-lg">
              Comprehensive import and logistics solutions tailored to your exacting standards.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Services List */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} id={service.id} className="scroll-mt-32">
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                    
                    {/* Visual/Icon Side */}
                    <div className="w-full lg:w-1/2">
                      <ScrollReveal direction={isEven ? "right" : "left"}>
                        <div className="aspect-square max-w-md mx-auto bg-dark-surface border border-white/10 rounded-sm relative flex items-center justify-center group overflow-hidden">
                          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                          <service.icon size={120} className="text-white/20 group-hover:text-primary/40 transition-colors duration-500" strokeWidth={1} />
                          <div className="absolute bottom-8 left-8">
                            <div className="font-heading font-bold text-6xl text-white/10 group-hover:text-primary/20 transition-colors">
                              0{index + 1}
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                      <ScrollReveal direction={isEven ? "left" : "right"}>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase mb-2">
                          {service.title}
                        </h2>
                        <h3 className="text-xl text-primary font-medium mb-6">
                          {service.subtitle}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg mb-8">
                          {service.description}
                        </p>
                        
                        <div className="space-y-4 mb-10">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <CheckCircle2 className="text-primary shrink-0" size={20} />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Link 
                          href="/contact"
                          className="inline-block px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-sm hover:border-primary hover:text-primary transition-colors"
                        >
                          Inquire Now
                        </Link>
                      </ScrollReveal>
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
