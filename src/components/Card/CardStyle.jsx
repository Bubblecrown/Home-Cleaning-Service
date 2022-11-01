import styled from "styled-components";
import {
  BgCircleColor,
  Boxshadow,
  Button,
  Column,
  Primary,
  Secondary,
} from "../../globalStyles";

export const CardPlan = styled.section`
  ${Column}
  max-width: 32%;
  flex-basis: 32%;
  height: auto;
  background-color: ${BgCircleColor};
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: ${Boxshadow};
  text-transform: capitalize;
`;

export const CardTier = styled.h1`
  font-size: 1.75rem;
  text-align: center;
`;

export const CircleContainer = styled.div`
  width: 100%;
  height: auto;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
`;
export const PriceCircle = styled.article`
  width: 130px;
  height: 130px;
  padding: 80px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: inset ${Boxshadow};
  border-radius: 100%;
  gap: 10px;
`;
export const Price = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${Primary};
`;
export const PriceTitle = styled.p`
  font-size: 1rem;
  color: ${Secondary};
`;

export const PlanContainer = styled.div`
  padding: 20px 0;
`;
export const PlanList = styled.div`
  font-size: 1rem;
  color: ${Secondary};
  display: flex;
  gap: 20px;
  margin-bottom: 5px;
`;
export const ListIcon = styled.h2`
  font-weight: 800;
`;
export const ServiceList = styled.h3`
  font-weight: 500;
`;

export const PlanButton = styled(Button)`
  font-size: 1rem;
  display: block;
  margin: auto;
  padding: 15px 40px;
  border-radius: 50px;
  font-weight: 700;
`;
