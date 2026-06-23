import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Tracker from "@/components/analytics/Tracker";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dhawakah-importers.vercel.app'),
  title: "Dhawakah Importers | Premium Vehicles & Logistics",
  description: "Dhawakah Importers - Premium importer of vehicles, clearing & forwarding, and building/construction materials.",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://dhawakah-importers.vercel.app",
    siteName: "Dhawakah Importers",
    title: "Dhawakah Importers | Premium Vehicles & Logistics",
    description: "Premium importer of vehicles, clearing & forwarding, and building/construction materials in Kenya.",
    images: [
      {
        url: "/generic/hero-bg.jpeg",
        width: 1200,
        height: 630,
        alt: "Dhawakah Importers Vehicles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhawakah Importers | Premium Vehicles & Logistics",
    description: "Premium importer of vehicles, clearing & forwarding, and building/construction materials in Kenya.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <Tracker />
        </ThemeProvider>
      </body>
    </html>
  );
}
