import Navbar from "./Navbar";
import Hero from "./Hero";
import Apropos from "./Apropos";
import Menu from "./Menu";
import Reservation from "./Reservation";
import Galerie from "./Galerie";
import Contact from "./Contact";

export default function RestaurantPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf5ec]">
      <Navbar />
      <Hero />
      <Apropos />
      <Menu />
      <Reservation />
      <Galerie />
      <Contact />
    </main>
  );
}
