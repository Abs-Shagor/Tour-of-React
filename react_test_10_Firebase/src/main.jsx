import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { ToastContainer, toast } from 'react-toastify';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import Login from './Components/Login';
import Signup from './Components/Signup';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root></Root>,
      children: [
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }
      ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}> </RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
