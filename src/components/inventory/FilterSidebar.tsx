"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const VEHICLE_TYPES = ["All", "SUV", "Sedan", "Coupe", "Pickup", "Van"];
const VEHICLE_MAKES = ["All", "BMW", "Mercedes Benz", "Toyota", "Lexus", "Range Rover", "Land Rover", "Chevrolet", "Porsche", "Suzuki", "Bentley"];
const VEHICLE_PRICES = ["All", "Under 10M", "10M - 20M", "Over 20M"];

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentType = searchParams.get("type") || "All";
  const currentMake = searchParams.get("make") || "All";
  const currentPrice = searchParams.get("price") || "All";

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "All") {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleFilterChange = (name: string, value: string) => {
    const qs = createQueryString(name, value);
    // Use standard router.push without `{ scroll: false }` to ensure it triggers a Server Component refresh, or simply use Next.js standard approach.
    router.push(`/inventory${qs ? `?${qs}` : ""}`);
    router.refresh(); // Force server re-render just in case
  };

  return (
    <ScrollReveal direction="right" delay={0.1}>
      <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/5 p-6 rounded-sm sticky top-32 shadow-sm dark:shadow-none">
        <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm border-b border-gray-200 dark:border-white/10 pb-4">
          Filters
        </h3>
        
        <div className="space-y-8">
          <div>
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">Vehicle Type</h4>
            <div className="space-y-3">
              {VEHICLE_TYPES.map((type) => {
                const isActive = currentType === type;
                return (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="type"
                      checked={isActive}
                      onChange={() => handleFilterChange("type", type)}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${isActive ? 'border-primary' : 'border-gray-300 dark:border-white/20 group-hover:border-primary/50 dark:group-hover:border-primary/50'}`}>
                      {isActive && <div className="w-2 h-2 bg-primary rounded-sm" />}
                    </div>
                    <span className={`text-sm transition-colors ${isActive ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200'}`}>
                      {type}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">Make</h4>
            <div className="space-y-3">
              {VEHICLE_MAKES.map((make) => {
                const isActive = currentMake === make;
                return (
                  <label key={make} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="make"
                      checked={isActive}
                      onChange={() => handleFilterChange("make", make)}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${isActive ? 'border-primary' : 'border-gray-300 dark:border-white/20 group-hover:border-primary/50 dark:group-hover:border-primary/50'}`}>
                      {isActive && <div className="w-2 h-2 bg-primary rounded-sm" />}
                    </div>
                    <span className={`text-sm transition-colors ${isActive ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200'}`}>
                      {make}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">Price Range</h4>
            <div className="space-y-3">
              {VEHICLE_PRICES.map((price) => {
                const isActive = currentPrice === price;
                return (
                  <label key={price} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="price"
                      checked={isActive}
                      onChange={() => handleFilterChange("price", price)}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${isActive ? 'border-primary' : 'border-gray-300 dark:border-white/20 group-hover:border-primary/50 dark:group-hover:border-primary/50'}`}>
                      {isActive && <div className="w-2 h-2 bg-primary rounded-sm" />}
                    </div>
                    <span className={`text-sm transition-colors ${isActive ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200'}`}>
                      {price}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </ScrollReveal>
  );
}
