import styled from "styled-components";
import { Button } from "../../globalStyles";

export const HeroSection = styled.section`
  height: 100vh;
  background: cover center;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;
export const HeroBackground = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba (0,0,0,0.7), rgba (0,0,0,0.1));
  position: absolute;
  top: 0;
  z-index: -1;
`;
export const HeroParagrahp = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;
export const ButtonHero = styled(Button)`
  color: #fff;
  &:before {
    background-color: #fff;
  }
  &:hover:before {
    width: 100%;
  }

  &:hover {
    color: black;
  }
`;
