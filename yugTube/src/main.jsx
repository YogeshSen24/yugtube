import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Home , Stories ,Posts , Discover} from "./pages"
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : '/',
    element:<App/>,
    children : [
      {
        path : "",
        element : <Home/>,
      },
      {
        path : "stories",
        element : <Stories/>,
      },
      {
        path : "posts",
        element : <Posts/>,
      },
      {
        path : "discover",
        element : <Discover/>,
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
