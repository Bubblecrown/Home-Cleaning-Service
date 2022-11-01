import React from "react";
import { TitleSection } from "../../components";
import { ContactData } from "../../data/ContactData";
import { Column, Container, Row, Section } from "../../globalStyles";

const ContactSection = () => {
  return (
    <Section>
      <Container>
        <TitleSection {...ContactData} />
        <Row>
          <Column></Column>
          <Column></Column>
        </Row>
      </Container>
    </Section>
  );
};

export default ContactSection;
