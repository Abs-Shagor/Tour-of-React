import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home.jsx'
import Navbar from './Components/Navbar.jsx'
import About from './Components/About.jsx'
import Posts from './Components/Posts.jsx'
import Users from './Components/Users.jsx'
import UserDetails from './Components/UserDetails.jsx';
import FullPost from './Components/FullPost.jsx';
import ErrorPage from './Components/ErrorPage.jsx';


const router = createBrowserRouter(
  [
    { 
      path: '/', 
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/About', 
          element: <About></About>
        },
        {
          path: '/Users', 
          element: <Users></Users>,
          loader: () => fetch('https://jsonplaceholder.typicode.com/users')
        },
        {
          path: 'Users/User/:userId',
          element: <UserDetails></UserDetails>,
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`) ,
        },
        {
          path: '/Posts', 
          element: <Posts></Posts>
        },
        {
          path: '/posts/:postId',
          element: <FullPost></FullPost>,
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
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
