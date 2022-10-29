import styled from "styled-components";
import { BgCircleColor } from "../../globalStyles";

export const CardPlan = styled.div`
  flex: 1;
  max-width: 30%;
  flex-basis: 30%;
  height: auto;
  background-color: ${BgCircleColor};
  padding: 20px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export const CardTier = styled.h1`
  font-size: 1.5rem;
`;

export const PriceCircle = styled.div`
  font-size: 1.5rem;
`;
export const Price = styled.h2`
  font-size: 1.5rem;
`;
export const PriceTitle = styled.p`
  font-size: 1.5rem;
`;
export const PlanList = styled.div`
  font-size: 1.5rem;
`;
export const ListIcon = styled.div`
  font-size: 1.5rem;
`;
export const ServiceList = styled.h3`
  font-size: 1.5rem;
`;