import styled from "styled-components";
import {
  CircleLabel,
  Row,
} from "../InfoSection/InfoStyle";

export const ServiceSection = styled.div`
  padding: 50px 0;
`;

export const ServiceRow = styled(Row)`
  flex-direction: row;
`;

export const Column = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 20%;
  flex-basis: 20%;
  position: relative;
  @media screen and (max-width: 768px) {
    max-width: 45%;
    flex-basis: 45%;
  }
`;

export const ServiceImg = styled.img`
  ${CircleLabel}
  width: 160px;
  padding: 10px;
  margin-bottom: 30px;
`;

export const ImgTitle = styled.h2`
  font-size: 1.4rem;
  text-transform: capitalize;
  font-weight: 600;
  line-height: 0.5rem;
`;


