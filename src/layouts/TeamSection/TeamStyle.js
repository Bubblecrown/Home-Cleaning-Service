import styled from "styled-components";
import { CircleLabel } from "../../globalStyles";

export const TeamColumn = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media screen and (max-width: 960px) {
    max-width: 42%;
    flex-basis: 42%;
    margin: 40px 0;
  }
  @media screen and (max-width: 576px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;
export const TeamImg = styled.img`
  ${CircleLabel};
  padding: 10px;
  max-width: 100%;
`;
