import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { useSearchParams } from "react-router-dom";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = ({ getData }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("searchOption");
  const term = searchParams.get("searchBusiness");
  const location = searchParams.get("searchLocation");

  const [searchOption, setSearchOption] = useState(sortBy || "best_match");
  const [searchBusiness, setSearchBusiness] = useState(term || "");
  const [searchLocation, setSearchLocation] = useState(location || "");

  const SearchQueryParams = {
    searchOption: searchOption,
    searchBusiness: searchBusiness,
    searchLocation: searchLocation,
  };

  // Set search queries
  useEffect(() => {
    setSearchParams(SearchQueryParams);
  }, [searchOption]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams(SearchQueryParams);
  };

  // Fetch API according to query params
  useEffect(() => {
    if (location)
      getData({
        searchOption: sortBy,
        searchBusiness: term,
        searchLocation: location,
      });
  }, [sortBy, term, location]);

  const handleOptionChange = (event) => {
    setSearchOption(event.target.id);
  };
  // Option active/inactive class
  const handleOptionClass = (sortByOptionValue) => {
    return searchOption === sortByOptionValue ? styles.active : "";
  };
  // Map "sortByOptions" object into lists
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          id={sortByOptionValue}
          onClick={handleOptionChange}
          className={handleOptionClass(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  const handleBusinessChange = ({ target }) => {
    setSearchBusiness(target.value);
  };

  const handleLocationChange = ({ target }) => {
    setSearchLocation(target.value);
  };

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.banner}>
          <h1>
            The <span>Easy</span> Way to Find Your <span>Eateries</span>
          </h1>
          <form className={styles.SearchBar} onSubmit={handleSubmit}>
            <div className={styles.SearchBarSortOptions}>
              <ul>{renderSortByOptions()}</ul>
            </div>
            <div className={styles.SearchBarFields}>
              <input
                placeholder="Search keyword"
                onChange={handleBusinessChange}
                value={searchBusiness}
              />
              <input
                placeholder="Location"
                onChange={handleLocationChange}
                value={searchLocation}
              />
            </div>
            <div className={styles.SearchBarSubmit}>
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.SearchBarStatus}>
        <p>
          Sort by:{" "}
          <span>
            {Object.keys(sortByOptions)
              .find((key) => sortByOptions[key] === sortBy)
              ?.toUpperCase() || "-"}
          </span>{" "}
          |&nbsp;
        </p>
        <p>
          Search term: <span>{term?.toUpperCase() || "-"}</span> |&nbsp;
        </p>
        <p>
          Search location: <span>{location?.toUpperCase() || "-"}</span>
          &nbsp;&nbsp;
        </p>
      </div>
    </>
  );
};

export default SearchBar;
