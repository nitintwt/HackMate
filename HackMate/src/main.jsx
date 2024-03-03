import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

const router = createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ei7n27pbjy8zkcl7.us.auth0.com"
      clientId="BZWZyrYJknKZi4zQ0zHP9JuUBZ36qF39"
      redirectUri= {window.location.origin }>
      <RouterProvider router={router}/>
    </Auth0Provider>
  </React.StrictMode>
)
