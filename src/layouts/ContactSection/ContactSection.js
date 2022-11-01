import React from "react";
import { TitleSection } from "../../components";
import { AddressData, ContactData } from "../../data/ContactData";
import { Column, Container, Row, Section } from "../../globalStyles";

import { AddressTitle, AddressDetail, ContactColumn } from "./ContactStyle";
const ContactSection = () => {
  return (
    <Section>
      <Container>
        <TitleSection {...ContactData} />
        <Row>
          <ContactColumn column={"42%"}>
            {AddressData.map((item, index) => (
              <Row key={index}>
                <item.icon />
                <Column>
                  <AddressTitle>{item.title}</AddressTitle>
                  <AddressDetail>{item.detail}</AddressDetail>
                </Column>
              </Row>
            ))}
          </ContactColumn>
          <ContactColumn column={"55%"}></ContactColumn>
        </Row>
      </Container>
    </Section>
  );
};

export default ContactSection;
