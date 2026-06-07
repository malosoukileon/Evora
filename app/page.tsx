import AudiencesSection from "./components/home/AudiencesSection";
import ContactSection from "./components/home/ContactSection";
import Footer from "./components/home/Footer";
import Hero from "./components/home/Hero";
import Navbar from "./components/home/Navbar";
import ProblemSection from "./components/home/ProblemSection";
import ProcessSection from "./components/home/ProcessSection";
import ProjectsSection from "./components/home/ProjectsSection";
import ServicesSection from "./components/home/ServicesSection";
import TrustBar from "./components/home/TrustBar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0B0B0B]">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <AudiencesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
