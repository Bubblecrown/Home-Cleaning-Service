import styled from "styled-components";
import {
  CircleLabel,
  Column,
  LineColor,
  Primary,
  Row,
  Secondary,
} from "../../globalStyles";

export const AddressTitle = styled.h1`
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const AddressDetail = styled.p`
  text-transform: capitalize;
  font-size: 1.1rem;
  color: ${Secondary};
`;

export const ContactColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 20px;
  max-width: 42%;
  flex-basis: 42%;
`;

export const FormColumn = styled(Column)``;

export const ContactRow = styled(Row)`
  &:not(:first-child) {
    border-top: 2px solid ${LineColor};
    margin-top: 40px;
    padding-top: 20px;
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
