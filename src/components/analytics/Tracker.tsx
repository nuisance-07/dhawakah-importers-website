"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Tracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Only track if we are not in the admin dashboard to avoid skewing stats
    if (!pathname.startsWith("/admin")) {
      fetch("/api/track", {
        method: "POST",
        // Fire and forget
      }).catch((err) => console.error("Tracking failed", err));
    }
  }, [pathname]);

  return null;
}
