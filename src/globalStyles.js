import styled, { createGlobalStyles } from "styled-components";

const GlobalStyles = createGlobalStyles`
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
  font-family: 'Inter', sans-serif;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.section``;
export const Article = styled.article``;

export const Row = styled.div``;
export const Column = styled.div``;
export const MainText = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: 0.5rem;
`;
export const SubText = styled.h2``;
export const Paragraph = styled.p``;
