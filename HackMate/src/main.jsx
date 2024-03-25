import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './Pages/Home.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import Profile from './Pages/Profile.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import MakeTeam from './Pages/MakeTeam.jsx'
import Chat from './components/Chat/Room.jsx'
import ChatRoom from './components/Chat/Room.jsx'
import TeamUp from './Pages/TeamUp.jsx'
import UserHackathon from './Pages/UserHackathon.jsx'

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
        element:<TeamUp/>
      },
      {
        path:'/maketeam',
        element:<MakeTeam/>
      },
      {
        path:'/profile/hackathon/:id',
        element:<UserHackathon/>
      },
      {
        path:'/userprofile/:id',
        element:<Profile/>
      },
      /*{
        path:'/chat/:id',
        element:<ChatRoom/>
      },
      {
        path:'/chat',
        element:<ChatRoom/>
      }*/
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
