import axios from 'axios'
import {useState} from 'react'
async function getUserData(){
    const userToken = localStorage.getItem('token');
   const data =  await axios.get('http://localhost:8000/api/myprofile?token='+userToken, {
        headers : {
            Authorization : `Bearer ${userToken}`
        }
    });
 return data;
}

export default getUserData;