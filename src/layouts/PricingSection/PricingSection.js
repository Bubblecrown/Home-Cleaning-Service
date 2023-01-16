import React from "react";
import { Container, Section, Row } from "../../globalStyles";
import {TitleSection, Card} from "../../components";
import { PriceData, TierData } from "../../data/PricingData";

const PricingSection = ({path}) => {
  return (
    <Section id={path}>
      <Container>
        <TitleSection {...PriceData} />
        <Row>
          {TierData.map((item, index) => (
            <Card
              key={index}
              tier={item.tier}
              price={item.price}
              serviceList={item.serviceList}
              btnText={item.btnText}
              center={item.center}
            />
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default PricingSection;
