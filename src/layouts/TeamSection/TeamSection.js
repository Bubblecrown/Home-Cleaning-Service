import React from "react";
import { TitleSection } from "../../components";
import { Container, Row, Section } from "../../globalStyles";
import { TeamData, TeamImage } from "../../data/TeamData";
import {TeamColumn,TeamImg} from './TeamStyle'

const TeamSection = () => {
  return (
    <Section>
      <Container>
        <TitleSection {...TeamData} />
        <Row>
          {TeamImage.map((item,index)=>(
            <TeamColumn key={index}>
            <TeamImg src={item.imgPath} alt={item.imageAlt}/>
            </TeamColumn>
          ))}
          
        </Row>
      </Container>
    </Section>
  );
};

export default TeamSection;
