import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedVehicles from "@/components/home/FeaturedVehicles";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";
import PageTransition from "@/components/ui/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <ServicesOverview />
      <FeaturedVehicles />
      <WhyChooseUs />
      <CallToAction />
    </PageTransition>
  );
}
