import mongoose from "mongoose";

export interface IVehicle {
  _id?: string;
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

const VehicleSchema = new mongoose.Schema<IVehicle>({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  mileage: { type: String },
  transmission: { type: String, required: true },
  fuelType: { type: String, required: true },
  category: { type: String, required: true },
  images: [{ type: String }],
  description: { type: String, required: true },
  featured: { type: Boolean, default: false }
}, {
  timestamps: true
});

export const Vehicle = mongoose.models.Vehicle || mongoose.model<IVehicle>("Vehicle", VehicleSchema, "dhawakah_vehicles");
