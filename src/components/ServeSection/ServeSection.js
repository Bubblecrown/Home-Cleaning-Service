import React from "react";
import { ServiceItem } from "../../data/ServiceData";
import { Container } from "../../globalStyles";
import {
  ServiceSection,
  ServiceTabline,
  ServiceHead,
  ServiceRow,
  Column,
  ServiceImg,
  ImgTitle,
  TextWrapper
} from "./ServeStyle";

const ServeSection = ({ title, serviceTitle, headTitle }) => {
  return (
    <>
      <ServiceSection>
        <Container>
          <TextWrapper>
          <ServiceTabline title={title}>{title}</ServiceTabline>
          <ServiceHead headTitle={headTitle} title={title}>{serviceTitle}</ServiceHead></TextWrapper>
          <ServiceRow>
            {ServiceItem.map((item, index) => (
              <Column key={index}>
                <ServiceImg src={item.image} alt={item.imageAlt} />
                <ImgTitle>{item.imageTitle}</ImgTitle>
              </Column>
            ))}
          </ServiceRow>
        </Container>
      </ServiceSection>
    </>
  );
};

export default ServeSection;
