import React from "react";
import { Container } from "../../globalStyles";
import { PriceSection } from "./PricingStyle";
import TitleSection from "../../components/TitleComponent/TitleSection";

const PricingSection = () => {
  return (
    <PriceSection>
      <Container>
        <TitleSection />
      </Container>
    </PriceSection>
  );
};

export default PricingSection;
