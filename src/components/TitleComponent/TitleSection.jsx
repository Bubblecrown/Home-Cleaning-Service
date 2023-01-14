import React from "react";
import { TextWrapper, TabLine, TablineTitle, SpanText } from "./TitleStyle";

const TitleSection = ({title, headTitle, sectionTitle, center}) => {
  return (
    <TextWrapper center={center}>
      <TabLine title={title} center={center}><SpanText>{title}</SpanText></TabLine>
      <TablineTitle headTitle={headTitle} title={title} >
        {sectionTitle}
      </TablineTitle>
    </TextWrapper>
  );
};

export default TitleSection;
