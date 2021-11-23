import React from "react";
//import styles from "./Main.module.css";
import CardContainer from "../CardContainer/CardContainer";
import SearchBar from "../UI/SearchBar/SearchBar";
import Section from "../UI/Section/Section";

const Search = (props) => {
  return (
    <Section>
      <SearchBar />
      <CardContainer data={props.data} />
    </Section>
  );
};

export default Search;
