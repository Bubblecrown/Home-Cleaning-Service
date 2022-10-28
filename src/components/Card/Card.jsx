import React from "react";
import { CardPlan, CardTier } from "./CardStyle";

const Card = (props) => {
  return (
    <CardPlan>
      <CardTier>{props.tier}</CardTier>
    </CardPlan>
  );
};

export default Card;
