import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import Login from './Components/Login'
import Signup from './Components/Signup';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Others from './Components/Others';
import AuthProvider from './Providers/AuthProvider';
import History from './Components/History';
import PrivateRoute from './routes/PrivateRoute';
import UserProfile from './Components/UserProfile';

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
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/others',
          element: <Others></Others>
        },
        {
          path: '/history',
          element: <PrivateRoute> <History></History> </PrivateRoute>
        },
        {
          path: '/profile',
          element: <PrivateRoute> <UserProfile></UserProfile> </PrivateRoute>
        }
      ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>,
)
