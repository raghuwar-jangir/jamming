import React from "react";
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.SearchBar}>
            <input type="text" placeholder="Enter a song title" />
            <button className={styles.SearchButton}>Search</button>
        </div>
    )
}

export default SearchBar;