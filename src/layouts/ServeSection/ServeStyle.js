import styled from "styled-components";
import { CircleLabel } from "../../globalStyles";

export const ServiceColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 20%;
  flex-basis: 20%;
  @media screen and (max-width: 768px) {
    max-width: 45%;
    flex-basis: 45%;
    padding: 10px;
  }
  @media screen and (max-width: 320px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export const ServiceImg = styled.img`
  ${CircleLabel}
  width: 160px;
  padding: 10px;
  margin-bottom: 30px;
  
`;

export const ImgTitle = styled.h2`
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;
`;
