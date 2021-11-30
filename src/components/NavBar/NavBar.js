import React, { useState } from "react";
import styles from "./Navbar.module.css";
import useViewport from "../../hooks/useVIewport";

const NavBar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const navClasses = scrolled ? styles.scrolled : "";

  const { width } = useViewport();
  const breakpoint = 475;
  const content =
    width < breakpoint ? <h1>EoLT</h1> : <h1>Encyclopedia of Ludic Terms</h1>;

  return (
    <nav className={navClasses}>
      {content}
      <div className={styles.buttonContainer}>
        <button>About us</button>
        <button>Support</button>
      </div>
    </nav>
  );
};

export default NavBar;
