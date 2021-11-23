import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.card}>
        <a href={props.data.url} target={"_blank"} rel="noreferrer">
          <h1>{props.data.title}</h1>
        </a>
        <p> {props.data.preview}</p>
        <p>Author: {props.data.author}</p>
      </div>
    </div>
  );
};

export default Card;
