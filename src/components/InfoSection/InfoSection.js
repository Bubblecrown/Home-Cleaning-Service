import React from "react";
import { Container } from "../../globalStyles";
import {
  HeroSection,
  Row,
  Column,
  HeroTitle,
  HeroText,
  HeroImg,
  Img,
  HeroButton,
  HeroTabLine,
  BoxText,
  TextWrapper,
  BoxHeader
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
  circleLabel,
  boxNumberText,
  boxText,
  boxContainer,
}) => {
  return (
    <>
      <HeroSection>
        <Container>
          <Row reverse={reverse}>
            <Column>
              <HeroTabLine title={title}>{title}</HeroTabLine>
              <HeroTitle headTitle={headTitle} title={title}>
                {head}
              </HeroTitle>
              <HeroText>{text}</HeroText>
              <HeroText>{additionText}</HeroText>
              <HeroButton btnText={btnText}>{btnText}</HeroButton>
            </Column>
            <Column>
              <HeroImg
                imageStart={imageStart}
                circle={circle}
                circleLabel={circleLabel}
              >
                <Img src={imgPath} alt={imgTitle} circleLabel={circleLabel} />

                <TextWrapper boxContainer={boxContainer}>
                  <BoxHeader boxNumberText={boxNumberText}>
                    {boxNumberText}
                  </BoxHeader>
                  <BoxText boxText={boxText}>{boxText}</BoxText>
                </TextWrapper>
              </HeroImg>
            </Column>
          </Row>
        </Container>
      </HeroSection>
    </>
  );
};

export default InfoSection;
