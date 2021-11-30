import React from "react";
import styles from "./Main.module.css";
import Wiki from "../Wiki/Wiki";
import Info from "../Info/Info";
import useApiData from "../../hooks/useApiData";

const Main = (props) => {
  const { data, httpError, isLoading } = useApiData();
  return (
    <div className={styles.wrapper}>
      <Wiki isLoading={isLoading} httpError={httpError} data={data} />
      <Info />
    </div>
  );
};

export default Main;
