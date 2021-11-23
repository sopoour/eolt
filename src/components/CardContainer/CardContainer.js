import React from "react";
import Card from "../Card/Card";
import styles from "./CardContainer.module.css";

const CardContainer = (props) => {
  return (
    <div className={styles.cardContainer}>
      {/*map data to each card*/}
      {props.data.map((item) => (
        <Card key={item.id} data={item}></Card>
      ))}
    </div>
  );
};

export default CardContainer;
