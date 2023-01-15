import React from "react";
import { TitleSection, Label } from "../../components";
import { Container, Row, Section, Column, Button } from "../../globalStyles";
import { HeroText, HeroImg, Img } from "./InfoStyle";

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
    <Section id={path}>
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
              <Img src={imgPath} alt={imgTitle} circle={circle}
              circleLabel={circleLabel} />

              <Label
                boxContainer={boxContainer}
                boxName={boxNumberText}
                boxText={boxText}
              />
            </HeroImg>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export default InfoSection;
