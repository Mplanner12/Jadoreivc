"use client";
import Hero from "./Components/Hero";
import FeaturedGuides from "./Components/FeaturedGuides";
import RecentBookings from "./Components/RecentBookings";
import { LogoCarousel } from "./Components/LogoCarouselSm";
import LogoCarouselMd from "./Components/LogoCarouselMd";
import NewsAndUpdate from "./Components/NewsAndUpdateSm";
import NewsAndUpdateMd from "./Components/NewsAndUpdateMd";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { UserProvider } from "./context/UserContex";
import ClientOnly from "./Components/ClientOnly";

export default function Home() {
  return (
    <ClientOnly>
      <main className="m-0 p-0 flex flex-col justify-center">
        {/* <Header /> */}
        <Hero />
        <FeaturedGuides guideCount={8} />
        <RecentBookings />
        <LogoCarousel />
        <LogoCarouselMd />
        <NewsAndUpdate />
        <NewsAndUpdateMd />
        {/* <Footer /> */}
      </main>
    </ClientOnly>
  );
}
