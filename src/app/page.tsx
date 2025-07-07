import Banner from "@/components/home/Banner";
import BestsellerProducts from "@/components/home/BestsellerProducts";
import FeaturesSection from "@/components/home/Features";
import FruitHero from "@/components/home/FruitHero";
import Products from "@/components/home/Products";
import PromoCards from "@/components/home/PromoCards";
import StatsSection from "@/components/home/StatsSection";
import VegetableCards from "@/components/home/VegetableCards";
import Layout from "@/components/layout/Layout";
// import Image from "next/image";

export default function HomePage() {
  return (
    <Layout>
      <Banner/>
      <FeaturesSection/>
      <Products/>
      <PromoCards/>
      <VegetableCards/>
      <FruitHero/>
      <BestsellerProducts/>
      <StatsSection/>
    </Layout>
  );
}
