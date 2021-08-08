import { useRef, useEffect } from 'react'
import { useLocation } from "react-router-dom";

export const NavCrane = () => {

  const craneRef = useRef()

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (currentPath === '/aboutus') {
      craneRef.current.classList.add("navbar__crane-img-aboutUs");
      craneRef.current.classList.remove("navbar__crane-img-production");
      craneRef.current.classList.remove("navbar__crane-img-engeneering");
      craneRef.current.classList.remove("navbar__crane-img-contact");
    } else if (currentPath === '/production') {
      craneRef.current.classList.remove("navbar__crane-img-aboutUs");
      craneRef.current.classList.add("navbar__crane-img-production");
      craneRef.current.classList.remove("navbar__crane-img-engeneering");
      craneRef.current.classList.remove("navbar__crane-img-contact");
    } else if (currentPath === '/ingeneering') {
      craneRef.current.classList.remove("navbar__crane-img-aboutUs");
      craneRef.current.classList.remove("navbar__crane-img-production");
      craneRef.current.classList.add("navbar__crane-img-engeneering");
      craneRef.current.classList.remove("navbar__crane-img-contact");
    } else if (currentPath === '/contact') {
      craneRef.current.classList.remove("navbar__crane-img-aboutUs");
      craneRef.current.classList.remove("navbar__crane-img-production");
      craneRef.current.classList.remove("navbar__crane-img-engeneering");
      craneRef.current.classList.add("navbar__crane-img-contact");
    } else {
      craneRef.current.classList.remove("navbar__crane-img-aboutUs");
      craneRef.current.classList.remove("navbar__crane-img-production");
      craneRef.current.classList.remove("navbar__crane-img-engeneering");
      craneRef.current.classList.remove("navbar__crane-img-contact");
    }
  }, [currentPath]);

  return (
    <div className="navbar__crane">
      <img className="navbar__crane-img" src={process.env.PUBLIC_URL + "/img/selected.png"} alt="crane" ref={craneRef} />
    </div>
  )
}