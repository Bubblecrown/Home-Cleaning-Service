import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
  font-family: 'Inter', sans-serif;
  
}
body{
  background-color: #e7f3f9;
}

`;

export const Primary = "#3ca7dd";
export const Secondary = "#696e70";
export const Maintext = "#000";
export const BgColor = "#e7f3f9";
export const BgCircleColor = "#eff7fb";
export const Boxshadow = "rgba(60,167,221,0.2) 0px 0px 15px 0px;";
export const LineColor = "#c0dbe9";

export const Section = styled.div`
  padding: 60px 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0;

  @media screen and (max-width: 1220px) {
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  display: ${({ btnText }) => (btnText ? "block" : "none")};
  border-radius: 20px;
  padding: ${({ center }) => (center ? "15px 40px" : "10px 20px")};
  white-space: nowrap;
  background-color: ${Primary};
  outline: none;
  border: none;
  color: #fff;
  margin: ${({ center }) => (center ? "auto" : "0 0")};
  font-weight: ${({ center }) => (center ? "700" : "none")};
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto;

  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: space-evenly;
  row-gap: 50px;
`;

export const Column = styled.aside`
  flex: 1;
  flex-basis: ${({ column }) => (column ? column : "48%")};
  padding: 0 10px;
  position: relative;
  margin: auto;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export const CircleLabel = `
  background-color: ${BgCircleColor};
  border-radius:50%;
  margin:auto;
  box-shadow: ${Boxshadow};
  
`;

export default GlobalStyles;
