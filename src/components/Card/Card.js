import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.card}>
        <Link to={props.data.id}>
          <h1>{props.data.title}</h1>
        </Link>
        <p> {props.data.preview}</p>
        <p>Author: {props.data.author}</p>
      </div>
    </div>
  );
};

export default Card;
