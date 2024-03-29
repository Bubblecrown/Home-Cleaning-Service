import React from "react";
import { TitleSection, Label } from "../../components";
import { Container, Row, Column, Button } from "../../globalStyles";
import { HeroText, HeroImg, Img, InfoSec } from "./InfoStyle";

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
  center
}) => {
  return (
    <InfoSec id={path} circle={circle}>
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
            <Button btnText={btnText}>{btnText}</Button>
          </Column>
          <Column>
            <HeroImg
              imageStart={imageStart}
              circle={circle}
              circleLabel={circleLabel}
            >
              <Img
                src={imgPath}
                alt={imgTitle}
                circle={circle}
                circleLabel={circleLabel}
              />

              <Label
                boxContainer={boxContainer}
                boxName={boxNumberText}
                boxText={boxText}
              />
            </HeroImg>
          </Column>
        </Row>
      </Container>
    </InfoSec>
  );
};

export default InfoSection;
