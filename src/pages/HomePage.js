import React from "react";
import { InfoSection } from "../components";
import { HeroData } from "../data/InfoData";
const HomePage = () => {
  return (
    <>
      <InfoSection {...HeroData}/>
    </>
  );
};

export default HomePage;
