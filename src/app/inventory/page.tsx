import { Suspense } from "react";
import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getVehicles } from "@/data/vehicles";
import VehicleCard from "@/components/ui/VehicleCard";
import FilterSidebar from "@/components/inventory/FilterSidebar";

export const revalidate = 0;

export const metadata = {
  title: "Inventory | Dhawakah Importers",
  description: "Browse our premium selection of luxury vehicles.",
};

export default async function InventoryPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const allVehicles = await getVehicles();
  
  // Extract search params
  const typeFilter = typeof searchParams.type === 'string' ? searchParams.type : null;
  const makeFilter = typeof searchParams.make === 'string' ? searchParams.make : null;
  const priceFilter = typeof searchParams.price === 'string' ? searchParams.price : null;

  // Apply filters
  let filteredVehicles = allVehicles;

  if (typeFilter) {
    filteredVehicles = filteredVehicles.filter(
      (v) => v.category.toLowerCase() === typeFilter.toLowerCase()
    );
  }

  if (makeFilter) {
    filteredVehicles = filteredVehicles.filter((v) => {
      const searchStr = makeFilter.toLowerCase();
      // Handle Mercedes Maybach edge case
      if (searchStr === "mercedes benz") {
        return v.title.toLowerCase().includes("mercedes") || v.title.toLowerCase().includes("maybach");
      }
      return v.title.toLowerCase().includes(searchStr);
    });
  }

  if (priceFilter) {
    if (priceFilter === "Under 10M") {
      filteredVehicles = filteredVehicles.filter(v => v.price < 10000000);
    } else if (priceFilter === "10M - 20M") {
      filteredVehicles = filteredVehicles.filter(v => v.price >= 10000000 && v.price <= 20000000);
    } else if (priceFilter === "Over 20M") {
      filteredVehicles = filteredVehicles.filter(v => v.price > 20000000);
    }
  }

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
          
          {/* Filters Sidebar (Client Component) */}
          <div className="w-full lg:w-64 shrink-0">
            <Suspense fallback={<div className="p-6 border border-white/5 rounded-sm bg-black animate-pulse h-64" />}>
              <FilterSidebar />
            </Suspense>
          </div>

          {/* Grid */}
          <div className="flex-1">
            {filteredVehicles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle, index) => (
                  <ScrollReveal key={vehicle.slug} delay={index * 0.1} direction="up">
                    <VehicleCard vehicle={vehicle} />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-black/30 border border-white/5 rounded-sm">
                <h3 className="text-xl text-white font-semibold mb-2">No vehicles found</h3>
                <p className="text-gray-400">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </PageTransition>
  );
}
