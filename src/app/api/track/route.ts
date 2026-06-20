import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Visitor } from "@/models/Visitor";

export async function POST(req: Request) {
  try {
    await dbConnect();
    
    // Get IP address from headers (works on Vercel)
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

    // Find today's record
    let visitorStats = await Visitor.findOne({ date: today });

    if (!visitorStats) {
      visitorStats = new Visitor({
        date: today,
        views: 1,
        uniqueVisitors: 1,
        ips: [ip],
      });
    } else {
      visitorStats.views += 1;
      
      // Check if unique visitor
      if (ip !== "unknown" && !visitorStats.ips.includes(ip)) {
        visitorStats.ips.push(ip);
        visitorStats.uniqueVisitors += 1;
      }
    }

    await visitorStats.save();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Tracking error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
