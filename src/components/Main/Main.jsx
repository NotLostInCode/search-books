import styles from './Main.module.css'
import BookCard from './BookCard/Books';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Main () {

 

    return (
        <div className={styles.main}>
            <div className={styles['main-container']}>
            <h1 className={styles.head}>Search for books</h1>
           <ul>
            <BookCard />
           </ul>
        </div>
        </div>
    )
}
export default Main;