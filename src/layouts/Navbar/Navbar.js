import React, { useState } from "react";

// style
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
// style

// icon
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
// icon

// Data
import { NavData } from "../../data/NavbarData";
// Data

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    if (click === true) {
      setClick(false);
      document.body.style.overflow = "auto";
    } else {
      setClick(true);
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: click ? "#fff" : "#3ca7dd" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/home">
              <Logotitle>tolmol</Logotitle>
              <Logotext>cleaning service</Logotext>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu click={click}>
              {NavData.map((item, index) => (
                <NavItem key={index}>
                  <NavLinks
                    to={item.to}
                    onClick={closeMenu}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {item.title}
                  </NavLinks>
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
