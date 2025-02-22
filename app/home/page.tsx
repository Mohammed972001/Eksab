import About from "@/components/LandingPageComponents/About";
import Contact from "@/components/LandingPageComponents/Contact";
import FAQ from "@/components/LandingPageComponents/FAQ";
import Hero from "@/components/LandingPageComponents/Hero";
import HomeCards from "@/components/LandingPageComponents/HomeCards";
import JoinUs from "@/components/LandingPageComponents/JoinUs";
import LandingFooter from "@/components/LandingPageComponents/LandingFooter";
import LandingNav from "@/components/LandingPageComponents/LandingNav";
import Partners from "@/components/LandingPageComponents/Partners";
import Services from "@/components/LandingPageComponents/Services";
import React from "react";

const page = () => {
  return (
    <div className="overflow-hidden">
      <LandingNav />
      <Hero />
      <About />
      <Services />
      <HomeCards />
      <FAQ />
      <Contact />
      <JoinUs />
      <Partners />
      <LandingFooter />
    </div>
  );
};

export default page;
