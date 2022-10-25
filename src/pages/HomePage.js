import React from "react";
import { InfoSection } from "../components";
import { HeroData } from "../data/InfoData";

const HomePage = () => {
  return (
    <div id="home">
      <InfoSection {...HeroData}/>
    </div>
  );
};

export default HomePage;
