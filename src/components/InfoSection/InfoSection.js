import React from "react";
import { Button, Container } from "../../globalStyles";
import {
  HeroSection,
  Row,
  Column,
  TextWrapper,
  HeroTitle,
  HeroText,
  HeroImg,
} from "./InfoStyle";
const InfoSection = ({reverse, head, text, title}) => {
  return (
    <>
      <HeroSection>
        <Container>
          <Row reverse={reverse}>
            <Column>
              <TextWrapper>
                <HeroTitle>{head}</HeroTitle>
                <HeroText>
                  {text}
                </HeroText>
              </TextWrapper>
              <Button>Know More</Button>
            </Column>
            <Column>
              <HeroImg></HeroImg>
            </Column>
          </Row>
        </Container>
      </HeroSection>
    </>
  );
};

export default InfoSection;
