import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import UserContextProvider from './context/UserContextProvider.jsx'
import Chat from './components/Chat/Room.jsx'
import ChatRoom from './components/Chat/Room.jsx'

const Profile = lazy(()=> import('./Pages/Profile.jsx'))
const TeamUp = lazy(()=> import('./Pages/TeamUp.jsx'))
const MakeTeam = lazy(()=> import('./Pages/MakeTeam.jsx'))
const UserHackathon= lazy(()=> import('./Pages/UserHackathon.jsx'))

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
        element:
        <Suspense fallback={<h1>Loading...</h1>}>
          <Profile/>
        </Suspense>
      },
      {
        path:'/teamup',
        element:
        <Suspense fallback={<h1>Loading...</h1>}>
         <TeamUp/>
        </Suspense>
      },
      {
        path:'/maketeam',
        element: 
        <Suspense fallback={<h1>Loading...</h1>}>
          <MakeTeam/>
        </Suspense>
      },
      {
        path:'/profile/hackathon/:id',
        element:
        <Suspense fallback={<h1>Loading...</h1>}>
          <UserHackathon/>
        </Suspense>
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
