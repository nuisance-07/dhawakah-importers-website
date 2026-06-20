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

const Vehicle = mongoose.models.Vehicle || mongoose.model("Vehicle", VehicleSchema, "dhawakah_vehicles");

const seedData = [
  {
    slug: "bmw-x7-2025",
    title: "BMW X7 SUV",
    year: 2025,
    price: 14200000,
    originalPrice: 15000000,
    mileage: "0 km",
    transmission: "Automatic",
    fuelType: "Petrol",
    category: "SUV",
    images: ["/vehicles/bmw-x7.jpg"],
    description: "The 2025 BMW X7 is a masterclass in luxury and performance. Features a striking dark grey exterior, premium interior finishes, and advanced driver assistance systems.",
    featured: true,
  },
  {
    slug: "mercedes-amg-e53-2020",
    title: "Mercedes Benz AMG E53",
    year: 2020,
    price: 11000000,
    originalPrice: 12500000,
    mileage: "24,000 km",
    transmission: "Automatic",
    fuelType: "Petrol",
    category: "Sedan",
    images: ["/vehicles/mercedes-e53.jpg"],
    description: "A perfect blend of aggressive AMG styling and E-Class luxury. Finished in metallic grey with signature AMG Panamericana grille.",
    featured: true,
  },
  {
    slug: "toyota-lc-prado-v-xl-2020",
    title: "Toyota LC Prado V-XL",
    year: 2020,
    price: 9800000,
    mileage: "45,000 km",
    transmission: "Automatic",
    fuelType: "Diesel",
    category: "SUV",
    images: ["/vehicles/toyota-prado.jpg"],
    description: "The ultimate reliable luxury SUV. The V-XL trim comes fully loaded with leather interior, sunroof, and advanced off-road capabilities.",
    featured: true,
  },
  {
    slug: "porsche-cayenne-2020",
    title: "Porsche Cayenne",
    year: 2020,
    price: 9500000,
    originalPrice: 10200000,
    mileage: "38,000 km",
    transmission: "Automatic",
    fuelType: "Petrol",
    category: "SUV",
    images: ["/vehicles/porsche-cayenne.jpg"],
    description: "Sports car performance in an SUV body. Stunning silver exterior with premium black leather interior.",
    featured: true,
  }
];

// Add the 15 imported images
for (let i = 1; i <= 15; i++) {
  seedData.push({
    slug: `premium-import-${i}`,
    title: `Premium Import Model ${i}`,
    year: 2022 + (i % 3),
    price: 3000000 + (i * 500000),
    mileage: `${10000 + (i * 2000)} km`,
    transmission: "Automatic",
    fuelType: i % 2 === 0 ? "Petrol" : "Diesel",
    category: i % 3 === 0 ? "Sedan" : "SUV",
    images: [`/vehicles/import-${i}.jpeg`],
    description: `A stunning premium vehicle freshly imported to our showroom. Please contact us for detailed specifications for this unit.`,
    featured: i <= 4,
  });
}

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    await Vehicle.deleteMany({});
    console.log("Cleared existing vehicles");

    await Vehicle.insertMany(seedData);
    console.log(`Successfully seeded ${seedData.length} vehicles`);

    process.exit(0);
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1);
  }
}

seed();
