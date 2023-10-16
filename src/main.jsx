import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Rouret from './Router/Rouret'
import AuthProvider from './Context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Rouret}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
