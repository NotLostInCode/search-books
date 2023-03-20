import styles from './Books.module.css'
import React from "react";
import axios from 'axios';

const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyARS8Z1E8kNPmwKvk_0CtnLECcf0ueDPlU'


function Books () {
  

   axios.get(baseURL).then((res) => {
    console.log(res.data.items)
   })
 

    return (
       <div>
        <ul>
        <li></li>
        </ul>
       </div>
    )
}
export default Books;