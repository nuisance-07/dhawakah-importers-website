import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About Us | Dhawakah Importers",
  description: "Learn about Dhawakah Importers, our mission, values, and our commitment to excellence.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-dark-surface">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <ScrollReveal>
            <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-4 block">Our Story</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-6 max-w-4xl mx-auto">
              Driven by Excellence, Defined by Trust.
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              For over a decade, Dhawakah Importers has been the premier choice for discerning clients seeking luxury vehicles, seamless logistics, and top-tier construction materials.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <ScrollReveal direction="right">
              <div className="bg-dark-surface p-10 md:p-12 rounded-sm border border-white/5 h-full relative overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                <h2 className="font-heading text-3xl font-bold text-white uppercase mb-6">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  To provide unparalleled access to premium global products, delivering them with unmatched efficiency, transparency, and personalized service. We strive to exceed our clients' expectations at every touchpoint of their journey with us.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-dark-surface p-10 md:p-12 rounded-sm border border-white/5 h-full relative overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                <h2 className="font-heading text-3xl font-bold text-white uppercase mb-6">Our Vision</h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  To be East Africa's most trusted and innovative import and logistics partner, setting the industry standard for quality, reliability, and customer-centric solutions in the luxury automotive and construction sectors.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-dark-surface">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase mb-4">Core Values</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", desc: "Honesty and transparency in every transaction, from pricing to customs declarations." },
              { title: "Quality", desc: "Uncompromising standards in the vehicles and materials we source." },
              { title: "Reliability", desc: "Delivering on our promises, every single time, without excuses." }
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="bg-black/50 p-8 rounded-sm text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
