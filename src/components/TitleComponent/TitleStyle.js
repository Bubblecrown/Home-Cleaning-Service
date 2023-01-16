import styled from "styled-components";
import { Primary, BgColor } from "../../globalStyles";

export const TextWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  flex-direction: column;
  margin-bottom: ${({ center }) => (center ? "40px" : "0")};
  @media screen and (max-width: 768px) {
    align-items: center;

  }
`;

const Line = `
  position: relative;
  max-width: 180px;
  width:100%;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  color: ${Primary};
  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background-color: ${Primary};
    top: 50%;
    z-index: -1;
  }
  &:before {
    left: 0;
  }
  &:after {
    right: 0;
  }
`;

export const TabLine = styled.div`
  ${({ title }) => title && `${Line}`}
  text-transform:capitalize
`;

export const SpanText = styled.span`
  background-color: ${BgColor};
  padding: 0 10px;
`;

export const TablineTitle = styled.h1`
  font-size: ${({ headTitle }) =>
    headTitle ? "clamp(1.75rem, 5vw, 3.3rem)" : "clamp(1.5rem, 5vw, 2.5rem)"};
  margin: ${({ title }) => (title ? "20px 0 0 0" : "0 0")};
  text-transform: capitalize;
`;
