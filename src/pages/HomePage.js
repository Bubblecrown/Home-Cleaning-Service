import React from "react";
import { InfoSection } from "../components";
import { HeroData } from "../data/InfoData";
import { AboutusData } from "../data/InfoData";

const HomePage = () => {
  return (
    <>
      <InfoSection {...HeroData} path="home"/>
      <InfoSection {...AboutusData} path="about"/>

    </>
  );
};

export default HomePage;
