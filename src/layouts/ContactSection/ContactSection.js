import React from "react";
import { TitleSection } from "../../components";
import { AddressData, ContactData } from "../../data/ContactData";
import { Column, Container, Row, Section } from "../../globalStyles";

import {
  AddressTitle,
  AddressDetail,
  ContactColumn,
  ContactIcon,
  FormColumn,
  ContactRow
} from "./ContactStyle";
const ContactSection = () => {
  return (
    <Section>
      <Container>
        <TitleSection {...ContactData} />
        <Row>
          <ContactColumn>
            {AddressData.map((item, index) => (
              <ContactRow key={index}>
                <ContactIcon>
                  <item.icon />
                </ContactIcon>
                <Column column={"80%"}>
                  <AddressTitle>{item.title}</AddressTitle>
                  <AddressDetail>{item.detail}</AddressDetail>
                </Column>
              </ContactRow>
            ))}
          </ContactColumn>
          <FormColumn></FormColumn>
        </Row>
      </Container>
    </Section>
  );
};

export default ContactSection;
