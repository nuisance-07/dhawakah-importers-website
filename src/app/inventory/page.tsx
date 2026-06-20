import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getVehicles } from "@/data/vehicles";
import VehicleCard from "@/components/ui/VehicleCard";

export const revalidate = 0;

export const metadata = {
  title: "Inventory | Dhawakah Importers",
  description: "Browse our premium selection of luxury vehicles.",
};

export default async function InventoryPage() {
  const vehicles = await getVehicles();

  return (
    <PageTransition>
      {/* Header */}
      <div className="bg-dark-surface pt-32 pb-16 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase mb-4">
              Vehicle Inventory
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Explore our current stock of premium imported vehicles. Use the filters below to find exactly what you're looking for.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar (Static for now) */}
          <div className="w-full lg:w-64 shrink-0">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-black border border-white/5 p-6 rounded-sm sticky top-24">
                <h3 className="font-heading font-semibold text-white mb-6 uppercase tracking-wider text-sm border-b border-white/10 pb-4">
                  Filters
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3">Vehicle Type</h4>
                    <div className="space-y-2">
                      {["All", "SUV", "Sedan", "Hatchback"].map((type) => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                          <div className="w-4 h-4 border border-white/20 rounded-sm group-hover:border-primary transition-colors flex items-center justify-center">
                            {type === "All" && <div className="w-2 h-2 bg-primary rounded-sm" />}
                          </div>
                          <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3">Make</h4>
                    <div className="space-y-2">
                      {["BMW", "Mercedes Benz", "Toyota", "Porsche"].map((make) => (
                        <label key={make} className="flex items-center gap-3 cursor-pointer group">
                          <div className="w-4 h-4 border border-white/20 rounded-sm group-hover:border-primary transition-colors" />
                          <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{make}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {vehicles.map((vehicle, index) => (
                <ScrollReveal key={vehicle.id} delay={index * 0.1} direction="up">
                  <VehicleCard vehicle={vehicle} />
                </ScrollReveal>
              ))}
            </div>
            
            {vehicles.length === 0 && (
              <div className="text-center py-20 text-gray-400">
                No vehicles found matching your criteria.
              </div>
            )}
          </div>
          
        </div>
      </div>
    </PageTransition>
  );
}
