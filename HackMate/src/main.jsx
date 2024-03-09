import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import Profile from './components/Profile/Profile.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import Main from './components/TeamUp/main.jsx'
import MakeTeam from './components/MakeTeam/MakeTeam.jsx'

const router = createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/profile',
        element:<Profile/>
      },
      {
        path:'/teamup',
        element:<Main/>
      },
      {
        path:'/maketeam',
        element:<MakeTeam/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <Auth0Provider
      domain="dev-ei7n27pbjy8zkcl7.us.auth0.com"
      clientId="BZWZyrYJknKZi4zQ0zHP9JuUBZ36qF39"
      redirectUri= {window.location.origin }>
      <RouterProvider router={router}/>
    </Auth0Provider>
    </UserContextProvider>
  </React.StrictMode>
)
