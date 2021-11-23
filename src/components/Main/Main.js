import React from "react";
import styles from "./Main.module.css";
import Search from "../Search/Search";
import Info from "../Info/Info";

const Main = (props) => {
  return (
    <div className={styles.wrapper}>
      <Search data={props.data} />
      <Info />
    </div>
  );
};

export default Main;
