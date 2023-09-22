import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProviders from './Providers/AuthProviders';
import Orders from './Components/Orders/Orders';
import PrivetRoute from './routes/PrivetRoute';
import Profile from './Components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: '/orders',
        element: <PrivetRoute><Orders/></PrivetRoute>
      },
      {
        path: '/profile',
        element: <PrivetRoute><Profile/></PrivetRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />  
    </AuthProviders>
  </React.StrictMode>,
)
