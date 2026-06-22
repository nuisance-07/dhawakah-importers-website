import { notFound } from "next/navigation";
import Link from "next/link";
import { getVehicleBySlug } from "@/data/vehicles";
import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageGallery from "@/components/ui/ImageGallery";
import { ArrowLeft, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const revalidate = 0;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = await getVehicleBySlug(slug);
  
  if (!vehicle) {
    return {
      title: "Vehicle Not Found | Dhawakah Importers"
    };
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', maximumFractionDigits: 0 }).format(price);
  };

  return {
    title: `${vehicle.title} ${vehicle.year} | Dhawakah Importers`,
    description: vehicle.description || `Buy a premium ${vehicle.year} ${vehicle.title} from Dhawakah Importers for ${formatPrice(vehicle.price)}.`,
    openGraph: {
      title: `${vehicle.title} ${vehicle.year}`,
      description: vehicle.description || `Available for ${formatPrice(vehicle.price)}`,
      images: vehicle.images?.[0] ? [{ url: vehicle.images[0], width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${vehicle.title} ${vehicle.year}`,
      description: vehicle.description,
      images: vehicle.images?.[0] ? [vehicle.images[0]] : [],
    }
  };
}

export default async function VehicleDetailPage({ params }: { params: { slug: string } }) {
  // Await the params before accessing slug
  const { slug } = await params;
  const vehicle = await getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', maximumFractionDigits: 0 }).format(price);
  };

  const whatsappMessage = encodeURIComponent(`Hello Dhawakah Importers, I am interested in the ${vehicle.title} (${vehicle.year}) priced at ${formatPrice(vehicle.price)}.`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    "name": `${vehicle.title} ${vehicle.year}`,
    "image": vehicle.images?.[0] ? `https://dhawakah-importers.vercel.app${vehicle.images[0]}` : undefined,
    "description": vehicle.description,
    "modelDate": vehicle.year.toString(),
    "brand": {
      "@type": "Brand",
      "name": vehicle.title.split(" ")[0]
    },
    "offers": {
      "@type": "Offer",
      "url": `https://dhawakah-importers.vercel.app/inventory/${slug}`,
      "priceCurrency": "KES",
      "price": vehicle.price,
      "itemCondition": "https://schema.org/UsedCondition",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageTransition>
      <div className="bg-dark-surface pt-32 pb-8 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <Link href="/inventory" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 text-sm uppercase tracking-wider font-semibold">
            <ArrowLeft size={16} /> Back to Inventory
          </Link>
          
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-2">
                  {vehicle.title}
                </h1>
                <div className="text-xl text-gray-400">{vehicle.year} • {vehicle.category}</div>
              </div>
              
              <div className="text-left md:text-right">
                {vehicle.originalPrice && (
                  <div className="text-gray-500 line-through mb-1 text-lg">
                    {formatPrice(vehicle.originalPrice)}
                  </div>
                )}
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {formatPrice(vehicle.price)}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <ScrollReveal delay={0.1}>
              <ImageGallery images={vehicle.images} title={vehicle.title} />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-heading text-2xl font-semibold text-white mb-6 uppercase tracking-wide">Vehicle Description</h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                {vehicle.description}
              </p>

              {vehicle.features && vehicle.features.length > 0 && (
                <ul className="space-y-3">
                  {vehicle.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-200 text-lg">
                      <div className="w-2 h-2 bg-primary rotate-45 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </ScrollReveal>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <ScrollReveal delay={0.2} direction="left">
              <div className="bg-black border border-white/5 p-8 rounded-sm">
                <h3 className="font-heading text-xl font-semibold text-white mb-6 uppercase tracking-wide border-b border-white/10 pb-4">
                  Specifications
                </h3>
                
                <ul className="space-y-4">
                  {[
                    { label: "Make/Model", value: vehicle.title },
                    { label: "Year", value: vehicle.year },
                    { label: "Mileage", value: vehicle.mileage || "N/A" },
                    { label: "Transmission", value: vehicle.transmission },
                    { label: "Fuel Type", value: vehicle.fuelType },
                    { label: "Body Style", value: vehicle.category },
                  ].map((spec, i) => (
                    <li key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-gray-400">{spec.label}</span>
                      <span className="text-white font-medium text-right">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="left">
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-sm space-y-4">
                <h3 className="font-heading text-xl font-semibold text-white mb-4 uppercase tracking-wide">
                  Interested in this vehicle?
                </h3>
                
                <a 
                  href={`https://wa.me/254746978736?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-sm font-semibold hover:bg-[#1ebd5a] transition-colors"
                >
                  <MessageCircle size={20} />
                  Enquire on WhatsApp
                </a>
                
                <a 
                  href="tel:+254746978736"
                  className="w-full flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 text-white py-4 rounded-sm font-semibold hover:border-primary hover:text-primary transition-colors"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} direction="left">
              <div className="space-y-4">
                <div className="flex gap-3 text-gray-300">
                  <CheckCircle2 className="text-primary shrink-0" />
                  <span className="text-sm">Verified Imports: 100% authentic and thoroughly inspected.</span>
                </div>
                <div className="flex gap-3 text-gray-300">
                  <CheckCircle2 className="text-primary shrink-0" />
                  <span className="text-sm">We handle all KRA customs clearance and port charges.</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </PageTransition>
    </>
  );
}
