import React from "react";
import styles from "./Ratings.module.css"

const Ratings = ({ratings}) => {
  let starsArray = [];
  for (let i = 0; i < Math.floor(ratings); i++) {
    starsArray.push("bi bi-star-fill");
  }
  
  let blank = 5 - ratings;
  while (blank > 0) {
    if (blank % 1 === 0)  {
      starsArray.push("bi bi-star");
      blank -= 1;
    } else {
      starsArray.push("bi bi-star-half");
      blank -= 0.5;
    }
  }
  
  return (
    <div className={styles.Ratings}>
      {starsArray.map((star, idx) => {return <i className={star} key={idx}></i>})}
    </div>
  );
};

export default Ratings;