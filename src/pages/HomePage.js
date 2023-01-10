import React from "react";
import { InfoSection, PricingSection, ServeSection, TeamSection } from "../layouts";
import { HeroData } from "../data/InfoData";
import { AboutusData } from "../data/InfoData";
import ContactSection from "../layouts/ContactSection/ContactSection";

const HomePage = () => {
  return (
    <>
      <InfoSection {...HeroData} path="home" />
      <InfoSection {...AboutusData} path="about" />
      <ServeSection/>
      <PricingSection/>
      <TeamSection/>
      <ContactSection/>
    </>
  );
};

export default HomePage;
