import React, { useState } from "react";
import SearchBar from "../components/UI/SearchBar/SearchBar";
import Info from "../components/Info/Info";
import useSearchData from "../hooks/useSearchData";
import Section from "../components/UI/Section/Section";
import CardContainer from "../components/CardContainer/CardContainer";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [isActive, setIsActive] = useState(false);

  const { searchResults, searchTerm, handleChange } = useSearchData(props.data, true, setIsActive);


  const handleInactivity = () => {
      setIsActive(false)
  }

  return (
    <Section>
      <SearchBar
        searchTerm={searchTerm}
        onChange={handleChange}
        onInactivity={handleInactivity}
      />
      {isActive && (
        <CardContainer
          isLoading={props.isLoading}
          httpError={props.httpError}
          data={searchResults}
        />
      )}

      {!isActive && (
        <React.Fragment>
          <Link to="/eolt/contents" className="btnDark centered" style={{width: "100px", height: "20px"}}>
            Browse
          </Link>
          <Info />
        </React.Fragment>
      )}
    </Section>
  );
};

export default Home;
