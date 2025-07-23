import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CurvedLoop from "@/components/CurvedLoop";

export default function Home() {
  return (
    <main>
      <Hero />
      <CurvedLoop
        marqueeText="Forever Living ✦ Aloe Vera ✦"
        speed={1}
        curveAmount={200}
        interactive={false}
      />
      <FeaturedProducts />
    </main>
  );
}
