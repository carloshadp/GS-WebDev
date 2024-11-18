import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { CornerUpLeft } from 'lucide-react';

export default function DadosDetalhes() {

  const { id } = useParams();
  const [infos, setInfos] = useState([])

  useEffect(() => {
    fetch(`https://67393ea0a3a36b5a62ee3974.mockapi.io/api/greenascent/greeer-details/${id}`)
    .then(data => data.json())
    .then(data => setInfos(data) )
    .catch( erro => console.log(erro))
    .finally(() => console.log("Detalhes projeto!"))
  }, [id])
  console.log(infos)
  const handleFavoritos = (infos) => {
    
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []

    const isFavorito = favoritos.some(info => info.id === id)

    if (isFavorito)
    {
      favoritos = favoritos.filter( info => info.id != id)
    }else
    {
      favoritos.push(infos)
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos))
  }
  
  return (
    <>
      <section className="bg-verde-normal grid justify-center gap-5" key={infos.id}>
        <div className="flex flex-col items-center text-green-400 gap-1">
          <h1 className="text-4xl">Pesquisador(a)</h1>
          <img src={infos.avatar} className="w-[200px] h-[200px] rounded-full"/>
          <h1 className="text-xl">{infos.name}</h1>
          <button onClick={()=> handleFavoritos(infos)}>⭐Favoritar Dados⭐</button>
        </div>

        <div className="px-5 max-w-[860px] flex flex-col items-center gap-3">
          <h3 className="text-green-400 text-4xl">Descrição dos Dados</h3>
          <p className="text-xl text-cinza text-justify">{infos.details}</p>
          <NavLink to="/NossosDados" className="flex gap-1 text-green-400"><CornerUpLeft/>Voltar</NavLink>
        </div>
      </section>
    </>
  );
}
