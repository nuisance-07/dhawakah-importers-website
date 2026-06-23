"use client";

import { useSearchParams } from "next/navigation";
import { Vehicle } from "@/data/vehicles";
import VehicleCard from "@/components/ui/VehicleCard";
import FilterSidebar from "@/components/inventory/FilterSidebar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useMemo } from "react";

export default function InventoryClient({ allVehicles }: { allVehicles: Vehicle[] }) {
  const searchParams = useSearchParams();

  const typeFilter = searchParams.get("type");
  const makeFilter = searchParams.get("make");
  const priceFilter = searchParams.get("price");

  const filteredVehicles = useMemo(() => {
    let result = allVehicles;

    if (typeFilter && typeFilter !== "All") {
      result = result.filter((v) => v.category.toLowerCase() === typeFilter.toLowerCase());
    }

    if (makeFilter && makeFilter !== "All") {
      result = result.filter((v) => {
        const searchStr = makeFilter.toLowerCase();
        if (searchStr === "mercedes benz") {
          return v.title.toLowerCase().includes("mercedes") || v.title.toLowerCase().includes("maybach");
        }
        return v.title.toLowerCase().includes(searchStr);
      });
    }

    if (priceFilter && priceFilter !== "All") {
      if (priceFilter === "Under 10M") {
        result = result.filter((v) => v.price < 10000000);
      } else if (priceFilter === "10M - 20M") {
        result = result.filter((v) => v.price >= 10000000 && v.price <= 20000000);
      } else if (priceFilter === "Over 20M") {
        result = result.filter((v) => v.price > 20000000);
      }
    }

    return result;
  }, [allVehicles, typeFilter, makeFilter, priceFilter]);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Filters Sidebar */}
      <div className="w-full lg:w-64 shrink-0">
        <FilterSidebar />
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
          <div className="text-center py-24 bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-white/5 rounded-sm shadow-sm dark:shadow-none">
            <h3 className="text-xl text-gray-900 dark:text-white font-semibold mb-2">No vehicles found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
}
