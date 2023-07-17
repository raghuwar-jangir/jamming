import React from "react";
import styles from './Tracklist.module.css';
import Track from '../Track/Track';
const Tracklist = () => {
    return (
        <div className={styles.Tracklist}>
            <Track />
            <Track />
            <Track />
            <Track />
        </div>
    )
}

export default Tracklist;