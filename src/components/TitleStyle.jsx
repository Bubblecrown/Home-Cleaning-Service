import styled from "styled-components";
import { Primary } from "../globalStyles";

export const TextWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  flex-direction: column;
  margin-bottom: ${({ center }) => (center ? "40px" : "0")};
`;

const Line = `
  position: relative;
  margin: 0 10px;
  width: 160px;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  color: ${Primary};
  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 30px;
    height: 3px;
    background-color: ${Primary};
    top: 50%;
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

export const TablineTitle = styled.h1`
  font-size: ${({ headTitle }) => (headTitle ? "3.3rem" : "2.75rem")};
  margin: ${({ title }) => (title ? "20px 0" : "0 0")};
  text-transform: capitalize;
`;
