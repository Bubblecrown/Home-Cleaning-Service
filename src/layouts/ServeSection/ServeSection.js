import React from "react";
import {TitleSection} from "../../components";
import { ServiceItem } from "../../data/ServiceData";
import { Container, Row,Section } from "../../globalStyles";

import {
  Column,
  ServiceImg,
  ImgTitle,
} from "./ServeStyle";

const ServeSection = ({ title, sectionTitle, headTitle, center }) => {
  return (
    <>
      <Section>
        <Container>
          <TitleSection title={title} headTitle={headTitle} sectionTitle={sectionTitle} center={center}/>
          <Row>
            {ServiceItem.map((item, index) => (
              <Column key={index}>
                <ServiceImg src={item.image} alt={item.imageAlt} />
                <ImgTitle>{item.imageTitle}</ImgTitle>
              </Column>
            ))}
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default ServeSection;
