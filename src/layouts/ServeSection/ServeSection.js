import React from "react";
import TitleSection from "../../components/TitleSection";
import { ServiceItem } from "../../data/ServiceData";
import { Container } from "../../globalStyles";

import {
  ServiceSection,
  ServiceRow,
  Column,
  ServiceImg,
  ImgTitle,
} from "./ServeStyle";

const ServeSection = ({ title, sectionTitle, headTitle, center }) => {
  return (
    <>
      <ServiceSection>
        <Container>
          <TitleSection title={title} headTitle={headTitle} sectionTitle={sectionTitle} center={center}/>
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
