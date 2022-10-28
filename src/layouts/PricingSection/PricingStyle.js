import styled from "styled-components";

export const Column = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 20%;
  flex-basis: 20%;
  position: relative;
  @media screen and (max-width: 768px) {
    max-width: 45%;
    flex-basis: 45%;
  }
`;