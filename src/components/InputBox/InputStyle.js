import styled from "styled-components";
import { LineColor } from "../../globalStyles";

export const FormControl = styled.form`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  max-width: calc(50% + 60px);
  height: 100%;
  max-height: 100%;
  flex-basis: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  resize: none;
  background: transparent;
  border-style: solid;
  border-color: ${LineColor};
  &:focus {
    outline: none;
  }
  font-size: clamp(0.75rem, 5vw, 1rem);
`;

export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 25px 20px;
  display: flex;
  border-radius: 30px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  background: transparent;
  border-style: solid;
  border-color: ${LineColor};
  &:focus {
    outline: none;
  }
  font-size: clamp(0.75rem, 5vw, 1rem);
`;
