import React from "react";
import { Container, Section, Row } from "../../globalStyles";
import TitleSection from "../../components/TitleComponent/TitleSection";
import { PriceData, TierData } from "../../data/PricingData";
import Card from "../../components/Card/Card";

const PricingSection = () => {
  return (
    <Section>
      <Container>
        <TitleSection {...PriceData} />
        <Row>
          {TierData.map((item, index) => (
            <Card
              key={index}
              tier={item.tier}
              price={item.price}
              serviceList={item.serviceList}
            />
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default PricingSection;
