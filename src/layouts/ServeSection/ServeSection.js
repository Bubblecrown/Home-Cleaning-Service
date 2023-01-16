import React from "react";
import {TitleSection} from "../../components";
import { ServiceData, ServiceItem } from "../../data/ServiceData";
import { Container, Row,Section } from "../../globalStyles";

import {
  ServiceColumn,
  ServiceImg,
  ImgTitle,
} from "./ServeStyle";

const ServeSection = ({path}) => {
  const { title, sectionTitle, headTitle, center } = ServiceData;
  return (

      <Section id={path}>
        <Container>
          <TitleSection title={title} headTitle={headTitle} sectionTitle={sectionTitle} center={center}/>
          <Row>
            {ServiceItem.map((item, index) => (
              <ServiceColumn key={index}>
                <ServiceImg src={item.image} alt={item.imageAlt} />
                <ImgTitle>{item.imageTitle}</ImgTitle>
              </ServiceColumn>
            ))}
            
          </Row>
        </Container>
      </Section>

  );
};

export default ServeSection;
