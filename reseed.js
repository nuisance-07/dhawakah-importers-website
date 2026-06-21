const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env.local") });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please define the MONGODB_URI environment variable inside .env.local");
  process.exit(1);
}

const VehicleSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  mileage: { type: String, default: "0 km" },
  transmission: { type: String, default: "Automatic" },
  fuelType: { type: String, default: "Petrol" },
  category: { type: String, required: true },
  images: [{ type: String }],
  description: { type: String, required: true },
  features: [{ type: String }],
  featured: { type: Boolean, default: false }
}, { timestamps: true });

const Vehicle = mongoose.models.Vehicle || mongoose.model("Vehicle", VehicleSchema, "dhawakah_vehicles");

const seedVehicles = [
  {
    slug: "toyota-land-cruiser-250-2024",
    title: "Toyota Land Cruiser 250",
    year: 2024,
    price: 17000000,
    mileage: "New",
    transmission: "Automatic",
    fuelType: "Diesel",
    category: "SUV",
    images: ["/vehicles/import-1.jpeg"],
    description: "The ultimate 2024 Toyota Land Cruiser 250. Combining legendary off-road capability with modern luxury and advanced technology.",
    features: ["2.8L 1GD-FTV Turbo Diesel Engine", "201 Horsepower", "Full-Time 4WD with Low Range", "8-Speed Automatic Transmission", "Premium Leather Trim", "Toyota Safety Sense 3.0", "Multi-Terrain Select"],
    featured: true
  },
  {
    slug: "mercedes-benz-gle-63s",
    title: "Mercedes Benz GLE 63s",
    year: 2023,
    price: 18000000,
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    category: "SUV",
    images: ["/vehicles/import-2.jpeg"],
    description: "Experience unparalleled performance with the Mercedes Benz GLE 63s. A masterpiece of engineering featuring a handcrafted AMG engine.",
    features: ["4.0L V8 Biturbo with EQ Boost", "603 Horsepower", "AMG Performance 4MATIC+ AWD", "AMG SPEEDSHIFT TCT 9-Speed", "Burmester Surround Sound System", "AMG Ride Control+ Air Suspension", "Exclusive Nappa Leather"],
    featured: true
  },
  {
    slug: "toyota-land-cruiser-200-2018",
    title: "Toyota Land Cruiser 200 (J200)",
    year: 2018,
    price: 14000000,
    mileage: "Used",
    transmission: "Automatic",
    fuelType: "Diesel",
    category: "SUV",
    images: ["/vehicles/import-3.jpeg"],
    description: "The classic and reliable Toyota Land Cruiser 200 series. Built for the toughest terrains while maintaining premium comfort.",
    features: ["4.5L Twin-Turbo V8 Diesel Engine", "268 Horsepower", "Full-Time 4WD System", "6-Speed Automatic Transmission", "Premium Wood Grain Interior", "Kinetic Dynamic Suspension System (KDSS)", "7-Seater Configuration"],
    featured: false
  },
  {
    slug: "range-rover-sport-hp525-2025",
    title: "Range Rover Sport HP525",
    year: 2025,
    price: 26000000,
    mileage: "New",
    transmission: "Automatic",
    fuelType: "Petrol",
    category: "SUV",
    images: ["/vehicles/import-4.jpeg"],
    description: "The dynamic 2025 Range Rover Sport HP525. Delivering sporting luxury, refined performance, and unmistakable design.",
    features: ["4.4L Twin-Turbo V8 Engine", "523 Horsepower", "All-Wheel Drive (AWD)", "8-Speed Automatic Transmission", "Meridian 3D Surround Sound", "Dynamic Air Suspension", "Premium Semi-Aniline Leather"],
    featured: true
  },
  {
    slug: "lexus-lx570-2018",
    title: "Lexus LX570",
    year: 2018,
    price: 14000000,
    mileage: "Used",
    transmission: "Automatic",
    fuelType: "Petrol",
    category: "SUV",
    images: ["/vehicles/import-5.jpeg"],
    description: "A commanding presence. The Lexus LX570 blends remarkable off-road ability with a lavishly appointed interior.",
    features: ["5.7L V8 Engine", "383 Horsepower", "Full-Time 4WD", "8-Speed Automatic Transmission", "Mark Levinson Reference Audio", "Adaptive Variable Suspension", "Semi-Aniline Leather Seating"],
    featured: false
  },
  {
    slug: "bmw-5-series-sedan-2025",
    title: "BMW 5 series Sedan",
    year: 2025,
    price: 15000000,
    mileage: "New",
    transmission: "Automatic",
    fuelType: "Petrol",
    category: "Sedan",
    images: ["/vehicles/import-6.jpeg"],
    description: "The 2025 BMW 5 Series Sedan sets the benchmark for executive sedans with its athletic elegance and cutting-edge innovations.",
    features: ["3.0L TwinPower Turbo Inline-6 Engine", "375 Horsepower", "xDrive All-Wheel Drive", "8-Speed Sport Automatic Transmission", "Bowers & Wilkins Surround Sound", "Curved Display & iDrive 8.5", "M Sport Package"],
    featured: true
  },
  {
    slug: "chevrolet-camaro-coupe-2021",
    title: "Chevrolet Camaro Coupe",
    year: 2021,
    price: 6200000,
    mileage: "Used",
    transmission: "Automatic",
    fuelType: "Petrol",
    category: "Coupe",
    images: ["/vehicles/import-7.jpeg"],
    description: "Iconic American muscle. The 2021 Chevrolet Camaro Coupe delivers thrilling performance and an aggressive stance.",
    features: ["6.2L V8 Engine", "455 Horsepower", "Rear-Wheel Drive (RWD)", "10-Speed Automatic Transmission", "Bose Premium Audio System", "Magnetic Ride Control", "Recaro Performance Seats"],
    featured: false
  },
  {
    slug: "lexus-lx-600-2025",
    title: "Lexus LX 600",
    year: 2025,
    price: 22000000,
    mileage: "New",
    transmission: "Automatic",
    fuelType: "Petrol",
    category: "SUV",
    images: ["/vehicles/import-8.jpeg"],
    description: "The flagship 2025 Lexus LX 600 redefines ultra-luxury SUVs with a refined twin-turbo V6 and unparalleled craftsmanship.",
    features: ["3.4L Twin-Turbo V6 Engine", "409 Horsepower", "Full-Time 4WD", "10-Speed Direct-Shift Automatic", "Mark Levinson 25-Speaker Audio", "Active Height Control Suspension", "Ultra-Luxury VIP Seating"],
    featured: true
  },
  {
    slug: "mercedes-maybach-gls-600",
    title: "Mercedes Maybach GLS 600",
    year: 2024,
    price: 42000000,
    mileage: "New",
    transmission: "Automatic",
    fuelType: "Petrol",
    category: "SUV",
    images: ["/vehicles/import-9.jpeg"],
    description: "The pinnacle of luxury SUVs. The Mercedes Maybach GLS 600 offers a first-class experience with exquisite materials and extraordinary comfort.",
    features: ["4.0L V8 Biturbo with Mild Hybrid", "550 Horsepower", "4MATIC Fully Variable AWD", "9G-TRONIC 9-Speed Automatic", "First-Class Rear Executive Seating", "E-Active Body Control Suspension", "Burmester High-End 3D Surround"],
    featured: true
  },
  {
    slug: "bmw-x6-2023-coupe",
    title: "BMW X6 Coupe",
    year: 2023,
    price: 17000000,
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    category: "SUV",
    images: ["/vehicles/import-10.jpeg"],
    description: "The bold and provocative BMW X6 Coupe. Featuring a sloping roofline and exhilarating driving dynamics.",
    features: ["3.0L TwinPower Turbo Inline-6", "335 Horsepower", "xDrive All-Wheel Drive", "8-Speed Sport Automatic", "Harman Kardon Surround Sound", "Adaptive M Suspension", "Illuminated Kidney Grille"],
    featured: false
  },
  {
    slug: "mercedes-benz-amg-g63-2022",
    title: "Mercedes Benz AMG G63",
    year: 2022,
    price: 32000000,
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    category: "SUV",
    images: ["/vehicles/import-11.jpeg"],
    description: "The legendary G-Wagon. The Mercedes Benz AMG G63 pairs its iconic boxy design with a roaring V8 biturbo engine.",
    features: ["4.0L V8 Biturbo Engine", "577 Horsepower", "AMG Performance 4MATIC AWD", "AMG SPEEDSHIFT TCT 9-Speed", "Burmester Surround Sound", "AMG Ride Control Suspension", "Iconic G-Class Box Design"],
    featured: true
  },
  {
    slug: "porsche-cayenne-2020",
    title: "Porsche Cayenne",
    year: 2020,
    price: 9500000,
    mileage: "Used",
    transmission: "Automatic",
    fuelType: "Petrol",
    category: "SUV",
    images: ["/vehicles/import-12.jpeg"],
    description: "The sports car of SUVs. The 2020 Porsche Cayenne delivers thrilling handling and premium refinement.",
    features: ["3.0L Turbocharged V6", "335 Horsepower", "Active All-Wheel Drive", "8-Speed Tiptronic S", "Bose Surround Sound System", "Porsche Active Suspension Management", "Panoramic Roof System"],
    featured: false
  },
  {
    slug: "toyota-lc-prado-v-xl-2020",
    title: "Toyota LC Prado V-XL",
    year: 2020,
    price: 9800000,
    mileage: "Used",
    transmission: "Automatic",
    fuelType: "Diesel",
    category: "SUV",
    images: ["/vehicles/import-13.jpeg"],
    description: "The versatile Toyota LC Prado V-XL. Renowned for its durability, space, and premium features suitable for any journey.",
    features: ["2.8L Turbo Diesel Engine", "174 Horsepower", "Full-Time 4WD", "6-Speed Automatic Transmission", "JBL Premium Audio System", "Kinetic Dynamic Suspension (KDSS)", "Premium Leather & Wood Trim"],
    featured: false
  },
  {
    slug: "bmw-x7-suv-2025",
    title: "BMW X7 SUV",
    year: 2025,
    price: 14200000,
    mileage: "New",
    transmission: "Automatic",
    fuelType: "Petrol",
    category: "SUV",
    images: ["/vehicles/import-14.jpeg"],
    description: "The grandest BMW ever built. The 2025 BMW X7 SUV offers three rows of pure luxury and imposing presence.",
    features: ["3.0L TwinPower Turbo Inline-6", "375 Horsepower", "xDrive All-Wheel Drive", "8-Speed Sport Automatic", "Bowers & Wilkins Diamond Surround", "2-Axle Air Suspension", "Sensafin Premium Upholstery"],
    featured: true
  },
  {
    slug: "mercedes-benz-amg-e53-2020",
    title: "Mercedes Benz AMG E53",
    year: 2020,
    price: 11000000,
    mileage: "Used",
    transmission: "Automatic",
    fuelType: "Petrol",
    category: "Sedan",
    images: ["/vehicles/import-15.jpeg"],
    description: "The perfect balance of everyday usability and AMG performance. The E53 boasts a potent electrified inline-6 and stunning aesthetics.",
    features: ["3.0L Inline-6 Turbo with EQ Boost", "429 Horsepower", "AMG Performance 4MATIC+ AWD", "AMG SPEEDSHIFT TCT 9-Speed", "Burmester Surround Sound", "AMG Ride Control+ Suspension", "AMG Performance Steering Wheel"],
    featured: false
  },
  {
    slug: "toyota-corolla-fielder-hybrid-2018",
    title: "Toyota Corolla Fielder Hybrid G WXB",
    year: 2018,
    price: 1445860,
    mileage: "101,000 km",
    transmission: "Automatic",
    fuelType: "Hybrid (Petrol)",
    category: "Sedan",
    images: Array.from({length: 20}, (_, i) => `/vehicles/corolla-fielder/fielder-${i + 1}.jpeg`),
    description: "The Toyota Corolla Fielder Hybrid G WXB offers exceptional fuel efficiency, immense practicality, and unmatched reliability. Freshly imported from Japan in pristine condition.",
    features: [
      "1.5L 1NZ-1LM Hybrid Petrol Engine",
      "Automatic Transmission",
      "Right-Hand Drive (RHD)",
      "2-Wheel Drive (2WD)",
      "5 Doors, 5 Seats",
      "Hybrid G WXB Trim"
    ],
    featured: true
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB Atlas");

    // Clear existing data
    await Vehicle.deleteMany({});
    console.log("Cleared existing vehicle data");

    // Insert new data
    const inserted = await Vehicle.insertMany(seedVehicles);
    console.log(`Successfully inserted ${inserted.length} vehicles!`);

    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}

seed();
