import React from "react";
import { Link } from "react-router-dom";
import { Button, MainText, Container } from "../../globalStyles";
import {
  HeroSection,
  HeroBackground,
  HeroParagrahp,
  ButtonContainer,
  ButtonHero,
} from "./HeroStyle";
const Hero = () => {
  return (
    <HeroSection>
      <HeroBackground src="https://picsum.photos/seed/picsum/1920/1200?blur=10" />
      <Container>
        <MainText>Lorem ipsum dolor sit amet </MainText>
        <HeroParagrahp>
          Ea dolores blanditiis maiores non neque accusamus
        </HeroParagrahp>
        <ButtonContainer>
          <Link to="/Signup">
            <Button>Lorem ipsum</Button>
          </Link>
          <ButtonHero>dolor sit</ButtonHero>
        </ButtonContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;
