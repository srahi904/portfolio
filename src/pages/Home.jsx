/** @format */

import HeroSection from "../components/sections/HeroSection";
import AboutMe from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

import ContactUs from "../components/contact/ContactUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className=" w-auto h-0.5 bg-slate-400 my-4  mx-10"></div>
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactUs />
    </>
  );
};

export default Home;
