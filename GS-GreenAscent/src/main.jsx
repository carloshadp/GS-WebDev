import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "/src/index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './pages/Home.jsx'
import Solucoes from './pages/Solucoes.jsx'
import NossosDados from './pages/NossosDados.jsx'
import DadosDetalhes from './pages/DadosDetalhes.jsx'
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
        path: "/Solucoes",
        element: <Solucoes/>
      },
      {
        path: "/NossosDados",
        element: <NossosDados/>
      },
      {
        path: "/NossosDados/:id",
        element: <DadosDetalhes/>
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
