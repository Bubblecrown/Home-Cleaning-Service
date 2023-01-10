import React from "react";
import { TextWrapper, BoxHeader, BoxText } from "./LabelStyle";
const Label = ({ longLabel, boxContainer, boxName, boxText }) => {
  return (
    <TextWrapper boxContainer={boxContainer} longLabel={longLabel}>
      <BoxHeader longLabel={longLabel}>{boxName}</BoxHeader>
      {boxText.map((text, index) => (
        <BoxText longLabel={longLabel} key={index}>
          {text}
        </BoxText>
      ))}
    </TextWrapper>
  );
};

export default Label;
