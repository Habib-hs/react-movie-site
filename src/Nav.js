import { useEffect, useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className={`nav  ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        //  src="https://upload.wikimedia.org/wikipedia/common/0/0f"
         src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
        alt="netflix-log"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix-log"
      />
    </div>
  );
}
