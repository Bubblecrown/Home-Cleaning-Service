import React from "react";
import {
  InfoSection,
  PricingSection,
  ServeSection,
  TeamSection,
  ContactSection,
  Footer,
} from "../layouts";
import { HeroData } from "../data/InfoData";
import { AboutusData } from "../data/InfoData";

const HomePage = () => {
  return (
    <>
      <InfoSection {...HeroData} path="home" />
      <InfoSection {...AboutusData} path="about" />
      <ServeSection path="services" />
      <PricingSection path="pricing" />
      <TeamSection path="team" />
      <ContactSection path="contact" />
      <Footer />
    </>
  );
};

export default HomePage;
