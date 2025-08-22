import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home.jsx'
import Navbar from './Components/Navbar.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Users from './Components/Users.jsx'
import UserDetails from './Components/UserDetails.jsx';


const router = createBrowserRouter(
  [
    { 
      path: '/', 
      element: <Home></Home>,
      children: [
        {
          path: 'About', 
          element: <About></About>
        },
        {
          path: 'Contact', 
          element: <Contact></Contact>
        },
        {
          path: 'Users', 
          element: <Users></Users>,
          loader: () => fetch('https://jsonplaceholder.typicode.com/users')
        },
        {
          path: 'Users/User/:userId',
          element: <UserDetails></UserDetails>,
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`) ,
        }
      ] 
    },
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}></RouterProvider>

  </StrictMode>,
)
