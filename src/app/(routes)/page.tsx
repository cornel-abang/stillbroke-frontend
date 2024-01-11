import Collections from "../../layouts/landing/collections";
import BannerDisplay from "../../layouts/landing/bannerDisplay";
import Hero from "../../layouts/landing/hero";
import Services from "../../layouts/landing/services";

export default function Home() {
  return (
    <main>
      <BannerDisplay />
      <Hero />
      <Collections />
      <Services />
    </main>
  )
}
