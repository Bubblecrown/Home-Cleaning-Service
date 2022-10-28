import styled from "styled-components";
import { Button, Primary, Secondary, BgCircleColor } from "../../globalStyles";

export const Column = styled.aside`
  flex: 1;
  max-width: 48%;
  flex-basis: 48%;
  position: relative;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export const HeroText = styled.p`
  font-size: 1rem;
  line-height: 1.3rem;
  margin: 30px 0;
  color: ${Secondary};
`;

const Circle = `&:before {
  content: "";
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 200px;
  background-color: ${Primary};
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  z-index: -1;}`;

export const CircleLabel = `
  background-color: ${BgCircleColor};
  width: fit-content;
  border-radius:50%;
  margin:auto;
  box-shadow: rgba(60,167,221,0.2) 0px 0px 15px 0px;
`;
export const HeroImg = styled.picture`
  width: 100%;
  display: flex;
  height: auto;
  justify-content: ${({ imageStart }) =>
    imageStart ? "flex-start" : "center"};
  position: relative;
  ${(props) => {
    if (props.circle) {
      return `${Circle}`;
    } else if (props.circleLabel) {
      return `${CircleLabel}`;
    }
  }}
`;

export const Img = styled.img`
  ${({ circleLabel }) =>
    circleLabel &&
    `max-width: 450px;
    padding: 20px;
    border-radius: 50%;`}
`;

export const HeroButton = styled(Button)`
  ${Button};
  display: ${({ btnText }) => (btnText ? "block" : "none")};
  font-size: 1rem;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export const TextWrapper = styled.article`
  display: ${({ boxContainer }) => (boxContainer ? "flex" : "none")};
  width: 140px;
  height: 140px;
  background: ${Primary};
  position: absolute;
  top: 35%;
  left: -15%;
  color: white;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0 30% 0 30%;
`;
export const BoxHeader = styled.h1`
  font-size: 2.25rem;
  line-height: 3rem;
`;

export const BoxText = styled.p`
  font-size: 0.85rem;
  word-spacing: 1rem;
  line-height: 1.25rem;
  text-transform: uppercase;
`;
