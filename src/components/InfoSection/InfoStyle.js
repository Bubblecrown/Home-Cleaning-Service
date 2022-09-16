import styled from "styled-components";
import { Button, Primary } from "../../globalStyles";

export const HeroSection = styled.header`
  padding: 40px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
`;

export const Column = styled.aside`
  flex: 1;
  max-width: 48%;
  flex-basis: 48%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export const TextWrapper = styled.div``;

export const HeroTitle = styled.h1``;

export const HeroText = styled.p``;

export const HeroImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ imageStart }) =>
    imageStart ? "flex-start" : "center"};
`;

export const Img = styled.img`
  &:before {
    position: relative;
    content: '';
    position: absolute;
    width: 340px;
    height: 340px;
    border-radius: 200px;
    background-color: ${Primary};
    left: 20%;
    top: 22%;
    z-index: -1;
  }
`;

export const HeroButton = styled(Button)`
  ${Button}
  font-size: medium;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
