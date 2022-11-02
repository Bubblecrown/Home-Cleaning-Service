import styled from "styled-components";
import {
  CircleLabel,
  Column,
  LineColor,
  Primary,
  Row,
  Secondary,
} from "../../globalStyles";

export const AddressTitle = styled.h1``;

export const AddressDetail = styled.h1``;

export const ContactColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 20px;
`;

export const FormColumn = styled(Column)``;

export const ContactRow = styled(Row)`
  &:not(:first-child) {
    border-top: 2px solid ${LineColor};
  }
`;

export const ContactIcon = styled.div`
  ${CircleLabel};
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Primary};
`;
