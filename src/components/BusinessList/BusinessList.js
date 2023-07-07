import React from "react";
import styles from "./Businesslist.module.css";
import Business from "../Business/Business";

const BusinessList = ({businesses}) => {
  if(businesses) 
  return (
    <div className={styles.BusinessList}>
      {businesses.length >  0 ? businesses.map(business => {
        return <Business business={business} key={business.name}/>;
      }): <p className={styles.resultNotFound}>SORRY <i className="bi bi-emoji-frown"></i><br></br>RESULTS NOT FOUND</p>}
    </div>
  )
};

export default BusinessList;