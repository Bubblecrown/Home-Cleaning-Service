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
  border-radius: 20px;
  padding: ${({ pd }) => (pd ? pd : "10px 20px")};
  margin-top: 15px;
  white-space: nowrap;
  background-color: ${Primary};
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export default GlobalStyles;
