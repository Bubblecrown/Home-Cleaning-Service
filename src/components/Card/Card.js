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
} from "./CardStyle";

import { GoCheck } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";
import { Button } from "../../globalStyles";

const Card = ({ tier, price, serviceList, btnText, center }) => {
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
        <Button btnText={btnText} center={center}>{btnText}</Button>
    </CardPlan>
  );
};

export default Card;
