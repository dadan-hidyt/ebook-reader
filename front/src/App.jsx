import './App.css'
import {Link,Outlet, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
function App() {
  const navigate = useNavigate();
  useEffect(function(){
     if(!localStorage.getItem('token')){
       navigate('/login')
     }
  })
  return (
    <div className="App">
      <header>
        <a href="" className="logo">BOOK READER</a>
        <nav>
          <ul>
            <li><Link className='link' to={'home'}>Home</Link></li>
            <li><Link className='link' to={'mybook'}>MyBook</Link></li>
            <li><Link className='link' to={'myprofile'}>MyProfile</Link></li>
            <li><Link className='link' to={'login'}>Login</Link></li>
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
