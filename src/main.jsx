import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider  } from 'react-router-dom'
import routes from "./router/routes.jsx"
import App from './App.jsx'
import { UsersContextProvider } from './contexts/UsersContext.jsx'
import { ExercisesContextProvider } from './contexts/ExercisesContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UsersContextProvider>
    <ExercisesContextProvider>
    <RouterProvider router={routes}></RouterProvider>
    </ExercisesContextProvider>
  </UsersContextProvider>
  
)
