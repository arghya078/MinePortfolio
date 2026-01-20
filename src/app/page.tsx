import HeroSection from "@/components/home/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ProjectSection from "@/projects/ProjectSection";
import SkillSection from "@/skills/SkillSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/general/Footer";
import AnimationLayout from "../../layouts/AnimationLayout";

export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <Footer/>
    </AnimationLayout>
  );
}
