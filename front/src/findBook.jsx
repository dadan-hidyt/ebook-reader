import axios from 'axios'
import {useState} from 'react'
async function findBook(id){
    const userToken = localStorage.getItem('token');
   const data =  await axios.get('http://localhost:8000/api/find?id='+id, {
        headers : {
            Authorization : `Bearer ${userToken}`
        }
    });
 return data;
}

export default findBook;