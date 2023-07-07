import React from "react";
import styles from "./Business.module.css";
import Ratings from "../Ratings/Ratings";

const Business = ({business}) => {
	return (
		<div className={styles.Business}>
			<div className={styles.imageContainer}>
				<a href={business.url} target="_blank" rel="noopener noreferrer">
					<img src={business.imageSrc} alt='' />
				</a>
			</div>

			<div className={styles.BusinessInfo}>
				<h3>{business.name}</h3>
				<h4>{business.category.toUpperCase()}</h4>
				<div className={styles.BusinessAddress}>
					<p>{business.city} {business.address}</p>
				</div>
				<div className={styles.BusinessReviews}>
					<p>{business.phone && <i className="bi bi-telephone-fill"></i>}{business.phone}</p>
					<p className={styles.BusinessPrice}>{business.price || ''}</p>
				</div>

				<div className={styles.BusinessReviews}>
					<p>{`${business.reviewCount} review${business.reviewCount > 1 ? 's' : ''}`}</p>
					<Ratings ratings={business.rating}/>
				</div>
			</div>
		</div>
	);
};

export default Business;