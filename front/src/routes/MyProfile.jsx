import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import getUserData from '../userData';
function MyProfile(){
    const [userProfile,setUserProfile] = useState();
    useEffect(function() {
        //get user data
       getUserData().then(function(response){
         setUserProfile(response.data);
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