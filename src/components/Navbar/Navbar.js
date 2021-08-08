import React from 'react'
import { Navlist } from './Navlist/Navlist'
import Accordion from '../Accordion/Accordion'
import { NavCrane } from '../../utils/NavCrane'

export const Navbar = (props) => (
  <nav className="navbar">
    <div className="navbar__wrapper container">
      <Navlist linkStyle={"navbar__link"} activeLinkStyle={"selected-yellow"} />
      <div className="navbar__menu">
        <Accordion isAccordionActive={props.isAccordionActive} setIsAccordionActive={props.setIsAccordionActive} />
      </div>
      <NavCrane />
    </div>
  </nav>
)
