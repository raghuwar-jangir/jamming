import React from "react";
import styles from './SearchResults.module.css';
import Tracklist from "../Tracklist/Tracklist";

const SearchResults = () => {
    return (
        <div className={styles.SearchResults}>
            <h2>Results</h2>
            <Tracklist />
        </div>
    )
}

export default SearchResults;