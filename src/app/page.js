import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CurvedLoop from "@/components/CurvedLoop";
import ThreeFeaturedProducts from "@/components/home/ThreeFeaturedProducts";
import About from "@/components/home/About";
import CategoryCards from "@/components/home/CategoryCards";

export default function Home() {
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
