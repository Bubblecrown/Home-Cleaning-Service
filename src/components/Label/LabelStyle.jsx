import styled from "styled-components";
import { Primary } from "../../globalStyles";

export const TextWrapper = styled.article`
  display: ${({ boxContainer }) => (boxContainer ? "flex" : "none")};
  width: ${({ longLabel }) => (longLabel ? "75%" : "140px")};
  height: ${({ longLabel }) => (longLabel ? "90px" : "140px")};
  background: ${Primary};
  position: ${({ longLabel }) => (longLabel ? "absolute" : "absolute")};
  top: ${({ longLabel }) => (longLabel ? "90%" : "35%")};
  left: ${({ longLabel }) => (longLabel ? "none" : "-15%")};
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${({ longLabel }) =>
    longLabel ? "0 40px 0 40px" : "0 30% 0 30%"};
`;
export const BoxHeader = styled.h1`
  font-size: ${({ longLabel }) => (longLabel ? "1.40rem" : "2.25rem")};
  line-height: ${({ longLabel }) => (longLabel ? "2rem" : "3rem")};
  text-transform: capitalize;
  font-weight: ${({ longLabel }) => (longLabel ? "600" : "800")}; ;
`;

export const BoxText = styled.p`
  font-size: ${({ longLabel }) => (longLabel ? "1rem" : "0.85rem")};
  word-spacing: ${({ longLabel }) => (longLabel ? "0" : "1rem")};
  line-height: ${({ longLabel }) => (longLabel ? "2rem" : "1.25rem")};
  text-transform: ${({ longLabel }) =>
    longLabel ? "capitalize" : "uppercase"};
`;
