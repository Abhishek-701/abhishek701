import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SoftSkills from "@/components/SoftSkills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <SoftSkills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
