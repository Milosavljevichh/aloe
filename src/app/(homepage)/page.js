import Hero from "@/components/homeSections/Hero";
import FeaturedProducts from "@/components/homeSections/FeaturedProducts";
import CurvedLoop from "@/components/CurvedLoop";
import ThreeFeaturedProducts from "@/components/homeSections/ThreeFeaturedProducts";
import About from "@/components/homeSections/About";
import CategoryCards from "@/components/homeSections/CategoryCards";

export default function HomePage() {
  return (
    <main className="bg-primary-white">
      <Hero />
      <ThreeFeaturedProducts />
      <CategoryCards />
      <CurvedLoop
        marqueeText="Forever Living ✦ Aloe Vera ✦"
        speed={1}
        curveAmount={230}
        interactive={false}
      />
      <About /> 
    </main>
  );
}
