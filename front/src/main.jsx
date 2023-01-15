import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './routes/Home'
import PageNotFound from './routes/PageNotFound'
import Login from './routes/Login'
import MyBook from './routes/MyBook'
import MyProfile from './routes/MyProfile'
import ReadBook from './routes/ReadBook'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'mybook',
        element: <MyBook />
      },
      {
        path : 'myprofile',
        element : <MyProfile/>
      },
      {
        path: 'mybook/read/:id/:title',
        element: <ReadBook />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
