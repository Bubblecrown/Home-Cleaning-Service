import styled from "styled-components";
import { Primary } from "../../globalStyles";

export const TextWrapper = styled.article`
  display: ${({ boxContainer }) => (boxContainer ? "flex" : "none")};
  min-width: 100px;
  max-width: ${({ longLabel }) => (longLabel ? "250px" : "140px")};
  min-height: 100px;
  max-height: ${({ longLabel }) => (longLabel ? "40px" : "140px")};
  width: 100%;
  height: 100%;
  background: ${Primary};
  position: absolute;
  top: ${({ longLabel }) => (longLabel ? "90%" : "35%")};
  left: ${({ longLabel }) => (longLabel ? "none" : "-15%")};
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${({ longLabel }) => (longLabel ? "0 40px" : "0 40px")};

  @media screen and (max-width: 768px) {
    top: ${({ longLabel }) => (longLabel ? "90%" : "80%")};
    left: 0;
    right: 0;
    margin: 0 auto;
    height: auto;
  }
`;

export const BoxHeader = styled.h1`
  font-size: ${({ longLabel }) =>
    longLabel ? "1.40rem" : "clamp(1.25rem, 5vw, 2.25rem)"};
  line-height: ${({ longLabel }) => (longLabel ? "2rem" : "3rem")};
  text-transform: capitalize;
  font-weight: ${({ longLabel }) => (longLabel ? "600" : "800")};
  @media screen and (max-width: 768px) {
    line-height: ${({ longLabel }) => (longLabel ? "2rem" : "2rem")};
  }
`;

export const BoxText = styled.p`
  font-size: ${({ longLabel }) =>
    longLabel ? "1rem" : "clamp(0.2rem, 3vw, 0.85rem)"};
  line-height: ${({ longLabel }) => (longLabel ? "2rem" : "1.25rem")};
  width: ${({ longLabel }) => (longLabel ? "100%" : "min-content")};
  text-transform: ${({ longLabel }) =>
    longLabel ? "capitalize" : "uppercase"};
`;
