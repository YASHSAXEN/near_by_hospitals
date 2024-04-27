import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signedup from './routes/signedup.jsx'

let routes = createBrowserRouter([
  {
    path:'/',element:<App/>
  },
  {
    path:'/signup',element:<Signedup/>
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
