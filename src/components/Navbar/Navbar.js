import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Logotitle,
  Logotext,
  MobileIcon,
} from "./NavbarStyles";

// icon
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
// icon

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <IconContext.Provider value={{ color: '#3ca7dd' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <Logotitle>tolmol</Logotitle>
              <Logotext>cleaning service</Logotext>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
