import './App.css'
import {Link,Outlet, useNavigate} from 'react-router-dom'
import { useEffect,useState } from 'react'
import getUserData from './userData';

function App() {

  const navigate = useNavigate();
   getUserData().then(function(response){
             if(response.data.expired == true){
                location.href = '/login'
                localStorage.removeItem('token')
             }
      });
  const [name,setName] = useState(null);
  useEffect(function(){
    getUserData().then(function(response){
         setName(response?.data?.user?.name);
       });
     //if is not found token redirect to login
     if(!localStorage.getItem('token')){
       navigate('/login')
     }
     

  });
  return (
    <div className="App">
      <header>
        <a href="" className="logo">BOOK READER</a>
        <nav>
          <ul>
            <li><Link className='link' to={'home'}>Home</Link></li>
            <li><Link className='link' to={'mybook'}>MyBook</Link></li>
            <li><Link className='link' to={'myprofile'}>MyProfile</Link></li>
            {localStorage.getItem('token') ? (<b>|{name}|</b>) : (<li><Link className='link' to={'login'}>Login</Link></li>)}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
