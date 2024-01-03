import React from 'react'
import ReactDOM from 'react-dom/client'
import {  RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import routes from './router/routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ToastContainer/>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
