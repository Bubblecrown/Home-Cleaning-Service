import styled from "styled-components";
import { Container, Primary } from "../../globalStyles";

export const FooterSection = styled.footer`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  background-color: ${Primary};
`;

export const FollowText = styled.h2`
  text-align: center;
  text-transform: capitalize;
  color: #ffff;
  padding-bottom: 20px;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  height: 100%;
`;

export const FooterRow = styled.div`
  display: flex;
  gap: 20px;
  width: cac(100% - 50px);
  flex-wrap: wrap;
  justify-content: center;
`;

export const IconFooter = styled.img``;
