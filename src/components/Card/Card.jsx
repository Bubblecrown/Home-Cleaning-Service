import React from "react";
import {
  CardPlan,
  CircleContainer,
  CardTier,
  PriceCircle,
  Price,
  PriceTitle,
  PlanContainer,
  PlanList,
  ListIcon,
  ServiceList,
  PlanButton,
} from "./CardStyle";

import { GoCheck } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";

const Card = ({ tier, price, serviceList }) => {
  return (
    <CardPlan>
        <CardTier>{tier}</CardTier>
        <CircleContainer>
          <PriceCircle>
            <Price>{price}</Price>
            <PriceTitle>monthly</PriceTitle>
          </PriceCircle>
        </CircleContainer>
        <PlanContainer>
        {serviceList.map((list, index) => (
          <PlanList key={index}>
            <ListIcon>{list.service ? <GoCheck /> : <GrFormClose />}</ListIcon>
            <ServiceList>{list.textList}</ServiceList>
          </PlanList>
        ))}</PlanContainer>
        <PlanButton>Get Started</PlanButton>
    </CardPlan>
  );
};

export default Card;
