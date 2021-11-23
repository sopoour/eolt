import React, { useState } from "react";
import styles from "./Navbar.module.css";

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

  return (
    <React.Fragment>
      <nav className={navClasses}>
        <h1>EoLT</h1>
        <div className={styles.buttonContainer}>
          <button>About us</button>
          <button>Support</button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
