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
  HeroTabLine,
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
  circle,
  headTitle,
  additionText,
}) => {
  const btnShow = btnText ? <HeroButton>{btnText}</HeroButton> : "";
  return (
    <>
      <HeroSection>
        <Container>
          <Row reverse={reverse}>
            <Column>
              <TextWrapper>
                <HeroTabLine title={title}>{title}</HeroTabLine>
                <HeroTitle headTitle={headTitle} title={title}>
                  {head}
                </HeroTitle>
                <HeroText>{text}</HeroText>
                <HeroText>{additionText}</HeroText>
              </TextWrapper>
              {btnShow}
            </Column>
            <Column>
              <HeroImg imageStart={imageStart} circle={circle}>
                <Img src={imgPath} alt={imgTitle} />
              </HeroImg>
            </Column>
          </Row>
        </Container>
      </HeroSection>
    </>
  );
};

export default InfoSection;
