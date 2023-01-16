import { useState } from "react";
import {redirect,useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useEffect } from "react";
function Login(){
    useEffect(function(){
        if (localStorage.getItem('token') != null){
            navigate('/home');
        }
    });
    const navigate = useNavigate();
    const [error,setError] = useState({});
    const [loading,setLoading] = useState(false);
    function handleLogin(e){
        setLoading(true)
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        //proses request login to server
        axios.post('http://localhost:8000/api/login',{email:email,password:password}).then(function(e){
            if (e.data.status == true){
               localStorage.setItem('token',e.data.token);
               setLoading(false);
               navigate('/home');
            } else {
                setLoading(false);
                setError(e.data.error)
            }
        }).catch(function(error){
            setLoading(false);
            if(error.code == 'ERR_NETWORK'){
                alert(error.code);
            }
             setError(error?.response?.data ?? error);

        });
    }
    return (
        <>
            <div className="form-login">
                <span>
                    <center>{ error?.message ?? error?.messages ?? '' }</center>
                </span>
            <form onSubmit={handleLogin} action="" method="post">
                <div className="fg">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"/>
                    <span className="error">{ error.email ?? null }</span>
                </div>
                <div className="fg">
                    <label htmlFor="password">password</label>
                    <input  type="password" name="password"/>
                    <span className="error">{ error.password ?? null }</span>
                </div>
                <button type="submit">{loading ? 'Loading...' : 'Login'}</button>
                </form>
            </div>
        </>

    )
}

export default Login;