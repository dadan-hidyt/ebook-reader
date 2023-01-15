import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function MyProfile(){
    const [userProfile,setUserProfile] = useState();
    useEffect(function() {
        const userToken = localStorage.getItem('token');
        axios.get('http://localhost:8000/api/myprofile?token='+userToken, {
            headers : {
                Authorization : `Bearer ${userToken}`
            }
        }).then(function(response){
            setUserProfile(response.data);
        }).catch(function(e){
            alert("error when request data");
        });
    })
    return (
        <>
        <h1>MY PROFILE</h1>
        <div className="profile-box">
            <b>Nama: {userProfile?.user?.name ?? 'loading...'}</b>
            <br />
            <b>Email: {userProfile?.user?.email ?? 'loading...'}</b>
        </div>
        </>
    )
}

export default MyProfile;