import { NavLink } from "react-router-dom"

const imgPath = process.env.PUBLIC_URL + '/img';

export const Logo = (props) => (
  <NavLink className={props.linkStyle} to="/">
    <img className={props.imgStyle} src={imgPath + "/logo.png"} alt="logo" onClick={() => props.setIsAccordionActive(false)} />
  </NavLink>
)