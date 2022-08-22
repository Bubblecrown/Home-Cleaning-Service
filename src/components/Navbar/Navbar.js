import React from 'react'
import {FaMitten} from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Navbar = () => {
  return (
    <IconContext.Provider>
      <Nav>
        <NavContainer>
          <NavLogo>
            <NavIcon>
              <FaMitten/>
              Lorem
            </NavIcon>
          </NavLogo>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar