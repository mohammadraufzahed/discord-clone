import React, { useState } from "react";
import LogoSVG from "../../svgs/LogoSVG";
import classes from "../../styles/components/Navbar/index.module.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={[classes.container]}>
      <LogoSVG color="var(--white)" className={[classes.logo]} />
      <ul className={[classes.links]} data-active={menuOpen}>
        <li className={[classes.link]}>Download</li>
        <li className={[classes.link]}>Nitro</li>
        <li className={[classes.link]}>Safety</li>
        <li className={[classes.link]}>Support</li>
        <li className={[classes.link]}>Blog</li>
        <li className={[classes.link]}>Careers</li>
      </ul>
      <div
        className={[classes.shadow]}
        onClick={() => setMenuOpen(false)}
      ></div>
      <div>
        <span className={[classes.login]}>Login</span>
        <div
          className={[classes.hamburger]}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
