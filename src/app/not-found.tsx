import Link from "next/link";
import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="flex-grow flex items-center justify-center bg-dark-surface min-h-[70vh] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent_70%)]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 className="font-heading font-bold text-8xl md:text-9xl text-white/10 mb-4 select-none">
              404
            </h1>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white uppercase mb-6">
              Page Not Found
            </h2>
            <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link 
              href="/"
              className="inline-block px-8 py-4 bg-primary text-black font-semibold rounded-sm hover:bg-primary-hover transition-colors"
            >
              Return Home
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}
