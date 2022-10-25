import React from "react";
import { InfoSection } from "../components";
import { AboutusData } from "../data/InfoData";
const AboutPage = () => {
  return (
    <>
      <InfoSection {...AboutusData}/>
    </>
  );
};

export default AboutPage;
