import styled from "styled-components";
import { CircleLabel } from "../../globalStyles";

export const TeamColumn = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const TeamImg = styled.img`
  ${CircleLabel};
  padding: 10px;
  max-width: 100%;
`;
