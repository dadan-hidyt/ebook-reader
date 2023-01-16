import axios from 'axios'
import {useState} from 'react'
async function getBookData(){
    const userToken = localStorage.getItem('token');
   const data =  await axios.get('http://localhost:8000/api/book', {
        headers : {
            Authorization : `Bearer ${userToken}`
        }
    });
 return data;
}

export default getBookData;