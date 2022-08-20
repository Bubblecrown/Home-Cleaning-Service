import React from "react";
import { Button, MainText } from "../../globalStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo />
      <Container>
        <MainText></MainText>
        <HeroText></HeroText>
        <ButtonContainer>
          <Link to="/Signup">
            <Button></Button>
          </Link>
          <ButtonHero></ButtonHero>
        </ButtonContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;
