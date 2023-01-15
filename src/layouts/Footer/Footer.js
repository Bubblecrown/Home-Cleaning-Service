import React from "react";
import { FooterData } from "../../data/FooterData";
import { Column} from "../../globalStyles";
import { FooterSection, FollowText, IconFooter, FooterRow, FooterContainer } from "./FooterStyle";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <Column>
        <FollowText>
          {FooterData.sectionTitle}
        </FollowText>
        <FooterRow>
          {FooterData.socialIcon.map((item, index)=>(
            <IconFooter key={index} src={item.imgPath} />
            
          ))}
        </FooterRow>
        </Column>
        </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
