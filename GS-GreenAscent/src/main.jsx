import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "/src/index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './pages/Home.jsx'
import Problemas from './pages/Problemas.jsx'
import NossasSolucoes from './pages/NossasSolucoes.jsx'
import SolucoesDetalhes from './pages/SolucoesDetalhes.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

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
        path: "/Problemas",
        element: <Problemas/>
      },
      {
        path: "/NossasSolucoes",
        element: <NossasSolucoes/>
      },
      {
        path: "/NossasSolucoes/:id",
        element: <SolucoesDetalhes/>
      },
      {
        path: "*",
        element: <PageNotFound/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Rotas} />
  </StrictMode>,
)
