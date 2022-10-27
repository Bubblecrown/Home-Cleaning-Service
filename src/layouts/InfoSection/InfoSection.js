import React from "react";
import TitleSection from "../../components/TitleSection";
import { Container } from "../../globalStyles";
import {
  HeroSection,
  Row,
  Column,
  HeroText,
  HeroImg,
  Img,
  HeroButton,
  BoxText,
  TextWrapper,
  BoxHeader,
} from "./InfoStyle";

const InfoSection = ({
  reverse,
  imageStart,
  sectionTitle,
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
  path,
  center,
}) => {
  return (
    <HeroSection id={path}>
      <Container>
        <Row reverse={reverse}>
          <Column>
            <TitleSection
              title={title}
              headTitle={headTitle}
              sectionTitle={sectionTitle}
              center={center}
            />

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
  );
};

export default InfoSection;
