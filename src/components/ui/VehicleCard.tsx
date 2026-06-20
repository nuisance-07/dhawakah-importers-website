import Image from "next/image";
import Link from "next/link";
import { Vehicle } from "@/data/vehicles";
import { ArrowRight } from "lucide-react";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="group bg-dark-surface border border-white/5 rounded-sm overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-black">
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
        <h3 className="font-heading font-semibold text-xl text-white mb-2 group-hover:text-primary transition-colors">
          {vehicle.title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <span className="flex items-center gap-1.5">
            {vehicle.mileage}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span className="flex items-center gap-1.5">
            {vehicle.transmission}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span className="flex items-center gap-1.5">
            {vehicle.fuelType}
          </span>
        </div>
        
        <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            {vehicle.originalPrice && (
              <div className="text-xs text-gray-500 line-through mb-1">
                {formatPrice(vehicle.originalPrice)}
              </div>
            )}
            <div className="text-lg font-bold text-white">
              {formatPrice(vehicle.price)}
            </div>
          </div>
          
          <Link
            href={`/inventory/${vehicle.slug}`}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black transition-all"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
