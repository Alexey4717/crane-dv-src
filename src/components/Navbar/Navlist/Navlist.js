import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

export const Navlist = (props) => (
  <>

    <NavLink className={props.linkStyle} activeClassName={props.activeLinkStyle} to="/aboutus">
      <FormattedMessage id='navlist_about_us' />
    </NavLink>

    <NavLink className={props.linkStyle} activeClassName={props.activeLinkStyle} to="/production">
      <FormattedMessage id='navlist_production' />
    </NavLink>

    <NavLink className={props.linkStyle} activeClassName={props.activeLinkStyle} to="/ingeneering">
      <FormattedMessage id='navlist_engineering' />
    </NavLink>

    <NavLink className={props.linkStyle} activeClassName={props.activeLinkStyle} to="/contact">
      <FormattedMessage id='navlist_contact' />
    </NavLink>
  </>
)