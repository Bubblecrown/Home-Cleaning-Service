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
    if (click === true) {
      setClick(false);
      document.body.style.overflow = "auto";
    } else {
      setClick(true);
      document.body.style.overflow = "hidden";
    }
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
