import dbConnect from "@/lib/mongodb";
import { Vehicle as VehicleModel, IVehicle } from "@/models/Vehicle";

export interface Vehicle {
  id: string;
  slug: string;
  title: string;
  year: number;
  price: number;
  originalPrice?: number;
  mileage?: string;
  transmission: string;
  fuelType: string;
  category: string;
  images: string[];
  description: string;
  featured: boolean;
}

// Convert Mongoose doc to plain object
function mapToPlainObject(doc: any): Vehicle {
  return {
    id: doc._id.toString(),
    slug: doc.slug,
    title: doc.title,
    year: doc.year,
    price: doc.price,
    originalPrice: doc.originalPrice,
    mileage: doc.mileage,
    transmission: doc.transmission,
    fuelType: doc.fuelType,
    category: doc.category,
    images: doc.images,
    description: doc.description,
    featured: doc.featured,
  };
}

export async function getVehicles(): Promise<Vehicle[]> {
  await dbConnect();
  const vehicles = await VehicleModel.find({}).sort({ createdAt: -1 }).lean();
  return vehicles.map(mapToPlainObject);
}

export async function getFeaturedVehicles(): Promise<Vehicle[]> {
  await dbConnect();
  const vehicles = await VehicleModel.find({ featured: true }).lean();
  return vehicles.map(mapToPlainObject);
}

export async function getVehicleBySlug(slug: string): Promise<Vehicle | null> {
  await dbConnect();
  const vehicle = await VehicleModel.findOne({ slug }).lean();
  if (!vehicle) return null;
  return mapToPlainObject(vehicle);
}
