import Link from "next/link";
import { getFeaturedVehicles } from "@/data/vehicles";
import VehicleCard from "@/components/ui/VehicleCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export default async function FeaturedVehicles() {
  const allFeatured = await getFeaturedVehicles();
  const featuredVehicles = allFeatured.slice(0, 8);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollReveal>
            <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold mb-2 block">Our Showroom</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white uppercase">Featured Vehicles</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <Link 
              href="/inventory"
              className="group flex items-center gap-2 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              View Full Inventory
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVehicles.map((vehicle, index) => (
            <ScrollReveal key={vehicle.id} delay={index * 0.1} direction="up">
              <VehicleCard vehicle={vehicle} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
