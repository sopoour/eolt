import React from "react";
//import styles from "./Main.module.css";

import SearchBar from "../components/UI/SearchBar/SearchBar";

import useSearchData from "../hooks/useSearchData";
import Section from "../components/UI/Section/Section";
import CardContainer from "../components/CardContainer/CardContainer";

const Contents = (props) => {
  const { searchResults, searchTerm, handleChange } = useSearchData(props.data, false);

  return (
    <Section>
      <SearchBar searchTerm={searchTerm} onChange={handleChange} />
      <CardContainer
        isLoading={props.isLoading}
        httpError={props.httpError}
        data={searchResults}
      />
    </Section>
  );
};

export default Contents;
