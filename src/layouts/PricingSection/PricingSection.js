import React from "react";
import { Container,Section,Row } from "../../globalStyles";
import TitleSection from "../../components/TitleComponent/TitleSection";
import { PriceData, TierData } from "../../data/PricingData";
import Card from "../../components/Card/Card";

const PricingSection = () => {
  return (
    <Section>
      <Container>
        <TitleSection {...PriceData}/>
        <Row>
          <Card {...TierData}/>
        </Row>
      </Container>
    </Section>
  );
};

export default PricingSection;
