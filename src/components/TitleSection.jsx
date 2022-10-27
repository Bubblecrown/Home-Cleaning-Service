import React from "react";
import { TextWrapper, TabLine, TablineTitle } from "./TitleStyle";

const TitleSection = ({title, headTitle, sectionTitle, center}) => {
  return (
    <TextWrapper center={center}>
      <TabLine title={title}>{title}</TabLine>
      <TablineTitle headTitle={headTitle} title={title}>
        {sectionTitle}
      </TablineTitle>
    </TextWrapper>
  );
};

export default TitleSection;
