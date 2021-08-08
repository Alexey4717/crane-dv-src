import React from 'react'
import { Logo } from '../Navbar/Logo/Logo'
import { Navlist } from '../Navbar/Navlist/Navlist'
import { FormattedMessage } from 'react-intl'

export const Footer = (props) => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__wrapper container">
        <Logo linkStyle={"footer__logo-link"} imgStyle={"footer__logo"} isAccordionActive={props.isAccordionActive} setIsAccordionActive={props.setIsAccordionActive} />
        <div className="footer__navbar container">
          <div className="footer__navbar-wrapper">
            <Navlist linkStyle={"footer__link"} activeLinkStyle={"selected-black"} />
          </div>
        </div>
        <hr className="thin line" />
        <div className="footer__copyright container">
          <span className="footer__copyright-krandv">
            &#169; 2020 - {new Date().getFullYear()} <FormattedMessage id='footer_copyright' />
          </span>
        </div>
      </div>
    </footer>
  )
}