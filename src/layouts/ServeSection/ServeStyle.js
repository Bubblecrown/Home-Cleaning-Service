import styled from "styled-components";
import { CircleLabel } from "../InfoSection/InfoStyle";

export const ServiceColumn = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 20%;
  flex-basis: 20%;
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
