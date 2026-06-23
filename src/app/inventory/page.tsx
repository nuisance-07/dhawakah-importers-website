import { Suspense } from "react";
import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getVehicles } from "@/data/vehicles";
import InventoryClient from "@/components/inventory/InventoryClient";

export const revalidate = 0;

export const metadata = {
  title: "Inventory | Dhawakah Importers",
  description: "Browse our premium selection of luxury vehicles.",
};

export default async function InventoryPage() {
  const allVehicles = await getVehicles();

  return (
    <PageTransition>
      {/* Header */}
      <div className="bg-white dark:bg-dark-surface pt-32 pb-16 border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white uppercase mb-4">
              Vehicle Inventory
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
              Explore our current stock of premium imported vehicles. Use the filters below to find exactly what you're looking for.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <Suspense fallback={<div className="text-gray-900 dark:text-white">Loading inventory...</div>}>
          <InventoryClient allVehicles={allVehicles} />
        </Suspense>
      </div>
    </PageTransition>
  );
}
