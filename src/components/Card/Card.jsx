import React from "react";
import {
  CardPlan,
  CardTier,
  PriceCircle,
  Price,
  PriceTitle,
  PlanList,
  ListIcon,
  ServiceList,
} from "./CardStyle";

import { GoCheck } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";

const Card = ({ tier, price, serviceList }) => {
  return (
    <CardPlan>
      <CardTier>{tier}</CardTier>
      <PriceCircle>
        <Price>{price}</Price>
        <PriceTitle>monthly</PriceTitle>
      </PriceCircle>
      {serviceList.map((list, index) => (
        <PlanList key={index}>
          <ListIcon>{list.service ? <GoCheck /> : <GrFormClose />}</ListIcon>
          <ServiceList>{list.textList}</ServiceList>
        </PlanList>
      ))}
    </CardPlan>
  );
};

export default Card;
