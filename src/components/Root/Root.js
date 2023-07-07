import React, { useState } from "react";
import styles from "./Root.module.css"
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import fetchDataYelp from "../../utils/fetchDataYelp";

function Root() {
  const [dataList, setDataList] = useState();
  const getData = async (param) => {
    setDataList(await fetchDataYelp(param));    
  };

  return (
    <div className={styles.App}>
      <h2>Eas<span>ter</span>y</h2>
      <SearchBar getData={getData} />
      <BusinessList businesses={dataList} />
      <div className={styles.arrow}>
        <i 
          className="bi bi-arrow-up-circle" 
          onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
        ></i>
      </div>
      <div className={dataList ? styles.staticFooter : styles.absoluteFooter}>
        <p>&#9400;Eastery 2023 by panida-pov</p>
      </div>
    </div>
  );
}

export default Root;