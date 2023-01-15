import React from "react";
import { TitleSection, InputBox } from "../../components";
import { AddressData, ContactData } from "../../data/ContactData";
import { Container, Row, Section, Column } from "../../globalStyles";

import {
  AddressTitle,
  AddressDetail,
  ContactColumn,
  ContactIcon,
  ContactRow,
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
                <Column>
                  <AddressTitle>{item.title}</AddressTitle>
                  <AddressDetail>{item.detail}</AddressDetail>
                </Column>
              </ContactRow>
            ))}
          </ContactColumn>

          <InputBox />
        </Row>
      </Container>
    </Section>
  );
};

export default ContactSection;
