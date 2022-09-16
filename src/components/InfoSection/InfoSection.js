import React from "react";
import { Container } from "../../globalStyles";
import {
  HeroSection,
  Row,
  Column,
  TextWrapper,
  HeroTitle,
  HeroText,
  HeroImg,
  Img,
  HeroButton,
} from "./InfoStyle";

const InfoSection = ({
  reverse,
  imageStart,
  head,
  text,
  title,
  btnText,
  imgPath,
  imgTitle,
}) => {
  const btnShow = btnText ? <HeroButton>{btnText}</HeroButton> : "";
  return (
    <>
      <HeroSection>
        <Container>
          <Row reverse={reverse}>
            <Column>
              <TextWrapper>
                <HeroTitle>{title}</HeroTitle>
                <HeroTitle>{head}</HeroTitle>
                <HeroText>{text}</HeroText>
              </TextWrapper>
              {btnShow}
            </Column>
            <Column>
              <HeroImg imageStart={imageStart}>
                <Img src={imgPath} alt={imgTitle}/>
              </HeroImg>
            </Column>
          </Row>
        </Container>
      </HeroSection>
    </>
  );
};

export default InfoSection;
