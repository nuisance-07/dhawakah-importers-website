import mongoose from "mongoose";

export interface IVisitor {
  date: string; // YYYY-MM-DD
  views: number;
  uniqueVisitors: number;
  ips: string[]; // Store IPs to calculate unique daily visitors
}

const VisitorSchema = new mongoose.Schema<IVisitor>({
  date: { type: String, required: true, unique: true },
  views: { type: Number, default: 0 },
  uniqueVisitors: { type: Number, default: 0 },
  ips: [{ type: String }],
});

export const Visitor = mongoose.models.Visitor || mongoose.model<IVisitor>("Visitor", VisitorSchema, "dhawakah_visitors");
