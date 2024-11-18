import { useEffect, useState } from "react"
import CardFavorito from "./CardFavorito"

export default function Favoritos() {

    const [favoritos, setFavoritos] = useState([])
    const [tem, setTem] = useState(null)
    useEffect(() => {
        const favoritados = JSON.parse(localStorage.getItem("favoritos")) || []
        setFavoritos(favoritados)
        setTem(favoritados.length > 0)
    }, [])

  return (
    <>
    {
        tem ? 
        <div>
            <CardFavorito infos={favoritos}/>
        </div> :
        <p>Nenhum filme favoritado ainda, vá para detalhes dos dados</p>    }
    
    </>
  )
}
