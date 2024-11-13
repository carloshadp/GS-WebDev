import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './pages/Home.jsx'
import Solucoes from './pages/Solucoes.jsx'

const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/Solucoes",
        element: <Solucoes/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Rotas} />
  </StrictMode>,
)
