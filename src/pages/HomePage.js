import React from "react";
import { InfoSection, ServeSection } from "../components";
import { HeroData } from "../data/InfoData";
import { AboutusData } from "../data/InfoData";
import { ServiceData } from "../data/ServiceData";


const HomePage = () => {
  return (
    <>
      <InfoSection {...HeroData} path="home"/>
      <InfoSection {...AboutusData} path="about"/>
      <ServeSection {...ServiceData}  />
    </>
  );
};

export default HomePage;
