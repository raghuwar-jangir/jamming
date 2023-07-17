import React from "react";
import styles from './Track.module.css'

const Track = () => {
    return (
        <div className={styles.Track}>
            <div className={styles['Track-information']}>
                <h3>Waka Waka</h3>
                <p>artist | album</p>
            </div>
            <button className={styles['Track-action']}>+</button>
        </div>
    )
}

export default Track;