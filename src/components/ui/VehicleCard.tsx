import Image from "next/image";
import Link from "next/link";
import { Vehicle } from "@/data/vehicles";
import { ArrowRight, Gauge, Settings, Fuel } from "lucide-react";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="group bg-white dark:bg-dark-surface border border-gray-200 dark:border-white/5 rounded-sm overflow-hidden hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 flex flex-col h-full shadow-sm dark:shadow-none">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-black">
        <Image
          src={vehicle.images[0] || "/placeholder-car.jpg"}
          alt={vehicle.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
          {vehicle.year}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading font-semibold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors">
          {vehicle.title}
        </h3>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <span className="flex items-center gap-1.5">
            <Gauge size={16} className="text-gray-400 dark:text-gray-500" />
            {vehicle.mileage}
          </span>
          <span className="flex items-center gap-1.5">
            <Settings size={16} className="text-gray-400 dark:text-gray-500" />
            {vehicle.transmission}
          </span>
          <span className="flex items-center gap-1.5">
            <Fuel size={16} className="text-gray-400 dark:text-gray-500" />
            {vehicle.fuelType}
          </span>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
          <div>
            {vehicle.originalPrice && (
              <div className="text-xs text-gray-400 dark:text-gray-500 line-through mb-1">
                {formatPrice(vehicle.originalPrice)}
              </div>
            )}
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              {formatPrice(vehicle.price)}
            </div>
          </div>
          
          <Link
            href={`/inventory/${vehicle.slug}`}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-900 dark:text-white group-hover:bg-primary group-hover:text-black dark:group-hover:text-black transition-all"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
