import React from "react";
import { FaMitten, FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import { NavData } from "./../../data/NavbarData";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  NavMobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({
      behavior: "smooth",
    });
  };
  const closeMenu = (to, id) => {
    if (id && location.pathname === "/") {
      scrollTo(id);
      navigate(to);
      setShow(false);
    }
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <NavIcon>
              <FaMitten />
              Lorem
            </NavIcon>
          </NavLogo>
          <NavMobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </NavMobileIcon>
          <NavMenu show={show}>
            {NavData.map((item, index) => (
              <NavItem key={index}>
                <NavLink onClick={()=>closeMenu(item.to, item.id)}>
                  {item.text}
                </NavLink>
              </NavItem>
            ))}
          </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
