import React from "react";
import { InfoSection } from "../components";
import { HeroData, AboutusData } from "../data/InfoData";
const HomePage = () => {
  return (
    <>
      <InfoSection {...HeroData}/>
      <InfoSection {...AboutusData}/>
    </>
  );
};

export default HomePage;
