import React from 'react'
import ReactDOM from 'react-dom/client'
import {  RouterProvider } from 'react-router-dom'
import routes from './router/Routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <ToastContainer/>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
