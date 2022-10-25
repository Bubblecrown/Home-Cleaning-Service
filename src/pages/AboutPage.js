import React from "react";
import { InfoSection } from "../components";
import { AboutusData } from "../data/InfoData";
const AboutPage = () => {
  return (
    <div id="about">
      <InfoSection {...AboutusData}/>
    </div>
  );
};

export default AboutPage;
