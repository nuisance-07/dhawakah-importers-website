const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env.local") });

const MONGODB_URI = process.env.MONGODB_URI;

const VehicleSchema = new mongoose.Schema({
  slug: String,
  images: [String]
}, { strict: false });

const Vehicle = mongoose.models.Vehicle || mongoose.model("Vehicle", VehicleSchema, "dhawakah_vehicles");

async function fix() {
  await mongoose.connect(MONGODB_URI);
  
  await Vehicle.updateOne({ slug: 'bmw-x7-2025' }, { $set: { images: ['/vehicles/import-11.jpeg'] }});
  await Vehicle.updateOne({ slug: 'mercedes-amg-e53-2020' }, { $set: { images: ['/vehicles/import-12.jpeg'] }});
  await Vehicle.updateOne({ slug: 'toyota-lc-prado-v-xl-2020' }, { $set: { images: ['/vehicles/import-13.jpeg'] }});
  await Vehicle.updateOne({ slug: 'porsche-cayenne-2020' }, { $set: { images: ['/vehicles/import-14.jpeg'] }});
  
  console.log("Fixed broken images in MongoDB!");
  process.exit(0);
}

fix();
