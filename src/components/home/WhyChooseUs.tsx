import ScrollReveal from "@/components/ui/ScrollReveal";
import { ShieldCheck, Award, Clock, Users } from "lucide-react";

const stats = [
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "500+", label: "Vehicles Imported", icon: CarIcon },
  { value: "100%", label: "Client Satisfaction", icon: Users },
  { value: "50+", label: "Global Partners", icon: Award },
];

function CarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-dark-surface relative overflow-clip">
      {/* Abstract Background Element (Hidden on mobile to prevent rendering glitches) */}
      <div className="hidden md:block absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none transform-gpu" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-2 block">The Dhawakah Difference</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white uppercase mb-6">Why Choose Us</h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
                At Dhawakah Importers, we don't just sell cars and materials; we deliver peace of mind. Our extensive global network and deep industry expertise ensure that you receive premium products at competitive prices, with a seamless end-to-end experience.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} className="space-y-6">
              {[
                { title: "Direct Importation", desc: "No middlemen. We source directly from trusted global dealers and manufacturers." },
                { title: "End-to-End Handling", desc: "From purchase to customs clearance and delivery to your doorstep." },
                { title: "Uncompromising Quality", desc: "Every vehicle and material undergoes rigorous inspection before shipment." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900 dark:text-white text-lg mb-1">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={0.4 + (index * 0.1)} direction="up">
                <div className="bg-white dark:bg-black/40 border border-gray-200 dark:border-white/5 p-8 flex flex-col items-center justify-center text-center rounded-sm hover:border-primary/50 dark:hover:border-primary/30 shadow-sm dark:shadow-none transition-colors h-full">
                  <stat.icon size={36} className="text-primary mb-4" />
                  <div className="font-heading font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
