import React from 'react';
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const Accordion = (props) => {
  return (
    <div className="accordion__item">
      <div className="accordion__title" onClick={() => props.setIsAccordionActive(!props.isAccordionActive)}>
        <div className="accordion__menu">Menu</div>
      </div>
      {props.isAccordionActive && <div className="accordion__content">
        <NavLink className="accordion__link" activeClassName="accordion__link-active" to="/aboutus" onClick={() => props.setIsAccordionActive(!props.isAccordionActive)}>
          <FormattedMessage id='navlist_about_us' />
        </NavLink>

        <NavLink className="accordion__link" activeClassName="accordion__link-active" to="/production" onClick={() => props.setIsAccordionActive(!props.isAccordionActive)}>
          <FormattedMessage id='navlist_production' />
        </NavLink>

        <NavLink className="accordion__link" activeClassName="accordion__link-active" to="/ingeneering" onClick={() => props.setIsAccordionActive(!props.isAccordionActive)}>
          <FormattedMessage id='navlist_engineering' />
        </NavLink>

        <NavLink className="accordion__link" activeClassName="accordion__link-active" to="/contact" onClick={() => props.setIsAccordionActive(!props.isAccordionActive)}>
          <FormattedMessage id='navlist_contact' />
        </NavLink>
      </div>}
    </div>
  );
};

export default Accordion;