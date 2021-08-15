import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

export const Navlist = (props) => (
  <>

    <NavLink to="/aboutus" className={props.linkStyle} activeClassName={props.activeLinkStyle}>
      <FormattedMessage id='navlist_about_us' />
    </NavLink>

    <NavLink to="/production" className={props.linkStyle} activeClassName={props.activeLinkStyle}>
      <FormattedMessage id='navlist_production' />
    </NavLink>

    <NavLink to="/ingeneering" className={props.linkStyle} activeClassName={props.activeLinkStyle}>
      <FormattedMessage id='navlist_engineering' />
    </NavLink>

    <NavLink to="/contact" className={props.linkStyle} activeClassName={props.activeLinkStyle}>
      <FormattedMessage id='navlist_contact' />
    </NavLink>
  </>
)