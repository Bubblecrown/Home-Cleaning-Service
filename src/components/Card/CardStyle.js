import styled from "styled-components";
import {
  BgCircleColor,
  Boxshadow,
  Column,
  Primary,
  Secondary,
} from "../../globalStyles";

export const CardPlan = styled.section`
  ${Column}
  max-width: 30%;
  flex-basis: 30%;
  height: auto;
  background-color: ${BgCircleColor};
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: ${Boxshadow};
  text-transform: capitalize;
  @media screen and (max-width: 980px) {
    max-width: 42%;
    flex-basis: 42%;
  }
  @media screen and (max-width: 710px) {
    max-width: 60%;
    flex-basis: 60%;
  }

  @media screen and (max-width: 536px) {
    max-width: 100%;
    flex-basis: 100%;
  }
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
  gap: clamp(5px, 5vw, 20px);
  margin-bottom: 5px;
`;
export const ListIcon = styled.h2`
  font-weight: 800;
`;
export const ServiceList = styled.h3`
  font-weight: 500;
  font-size: clamp(0.8rem, 5vw, 1.17rem) ;
  width: 100%;
`;
