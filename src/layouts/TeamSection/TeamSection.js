import React from "react";
import { TitleSection, Label } from "../../components";
import { Container, Row, Section } from "../../globalStyles";
import { TeamData,  TeamMember } from "../../data/TeamData";
import { TeamColumn, TeamImg } from "./TeamStyle";

const TeamSection = ({path}) => {
  return (
    <Section id={path}>
      <Container>
        <TitleSection {...TeamData} />
        <Row>
          {TeamMember.map((item, index) => (
            <TeamColumn key={index}>
              <TeamImg src={item.imgPath} alt={item.imageAlt} />
              <Label
                longLabel={TeamData.longLabel}
                boxContainer={TeamData.boxContainer}
                boxName={item.name}
                boxText={item.position}
              />
            </TeamColumn>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default TeamSection;
