import React from "react";
import { Container, Section, Row } from "../../globalStyles";
import TitleSection from "../../components/TitleComponent/TitleSection";
import { PriceData, TierData } from "../../data/PricingData";
// import Card from "../../components/Card/Card";
// import { CardPlan } from "../../components/Card/CardStyle";
import {
  CardPlan,
  CardTier,
  PriceCircle,
  Price,
  PriceTitle,
  PlanList,
  ListIcon,
  ServiceList,
} from "./PricingStyle";

import { GoCheck } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";

const PricingSection = () => {
  return (
    <Section>
      <Container>
        <TitleSection {...PriceData} />
        <Row>
          {TierData.map((item, index) => (
            <CardPlan key={index}>
              <CardTier>{item.tier}</CardTier>
              <PriceCircle>
                <Price>{item.price}</Price>
                <PriceTitle>monthly</PriceTitle>
              </PriceCircle>
                {item.serviceList.map((list, index) => (
                  <PlanList key={index}>
                    <ListIcon >
                      {list.service ? <GoCheck /> : <GrFormClose />}
                    </ListIcon>
                    <ServiceList>{list.textList}</ServiceList>
                  </PlanList>
                ))}
            </CardPlan>
          ))}
          {/* <Card {...TierData}/> */}
        </Row>
      </Container>
    </Section>
  );
};

export default PricingSection;
