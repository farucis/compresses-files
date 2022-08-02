import React from "react";
import "./Header.css";

/*--------Export Default Header--------*/
const Header = () => {
  return (
    <header className="header-container" id="Header">
      <div className="header-parent">
        <a className="icon" href="#fileCompress"></a>
        <NavOptions />
      </div>
    </header>
  );
};


/*--------Nav Bar Options--------*/
const NavOptions = () => (
  <div className="header-options">
    <a className="hover-underline-animation" href="#Home">
      Home{" "}
    </a>

    <a className="hover-underline-animation" href="#Compress">
      Compress{" "}
    </a>

    <a className="hover-underline-animation" href="#Contact">
      Contact{" "}
    </a>
  </div>
);

export default Header;
