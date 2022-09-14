import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Logotitle,
  Logotext,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarStyles";

// icon
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
// icon

import { NavData } from "../../data/NavbarData";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <IconContext.Provider value={{ color: click ? "#fff" : "#3ca7dd" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <Logotitle>tolmol</Logotitle>
              <Logotext>cleaning service</Logotext>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              {NavData.map((item, index) => (
                <NavItem key={index}>
                  <NavLinks to={item.to}>{item.title}</NavLinks>
                </NavItem>
              ))}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
