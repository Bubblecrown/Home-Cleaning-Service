import styled from "styled-components";
import { Primary } from "../../globalStyles";

export const TextWrapper = styled.article`
  display: ${({ boxContainer }) => (boxContainer ? "flex" : "none")};
  min-width: 100px;
  max-width: 140px;
  min-height: 100px;
  max-height: 140px;
  width: 100%;
  height: auto;
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
  }
`;

export const BoxHeader = styled.h1`
  font-size: ${({ longLabel }) =>
    longLabel ? "1.40rem" : "clamp(1.25rem, 4vw, 2.25rem)"};
  line-height: ${({ longLabel }) => (longLabel ? "2rem" : "3rem")};
  text-transform: capitalize;
  font-weight: ${({ longLabel }) => (longLabel ? "600" : "800")}; ;
`;

export const BoxText = styled.p`
  font-size: ${({ longLabel }) =>
    longLabel ? "1rem" : "clamp(0.5rem, 4vw, 0.85rem)"};
  line-height: ${({ longLabel }) => (longLabel ? "2rem" : "1.25rem")};
  width: min-content;
  text-transform: ${({ longLabel }) =>
    longLabel ? "capitalize" : "uppercase"};
`;
