import React from "react";
//import styles from "./Main.module.css";
import CardContainer from "../CardContainer/CardContainer";
import SearchBar from "../UI/SearchBar/SearchBar";
import Section from "../UI/Section/Section";
import useSearchData from "../../hooks/useSearchData";

const Wiki = (props) => {
  const { searchResults, searchTerm, handleChange } = useSearchData(props.data);

  return (
    <Section>
      <SearchBar searchTerm={searchTerm} onChange={handleChange} />
      <CardContainer isLoading={props.isLoading} httpError={props.httpError} data={searchResults} />
    </Section>
  );
};

export default Wiki;
