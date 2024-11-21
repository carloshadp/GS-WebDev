import { useState, useEffect } from "react"
import { trefoil } from 'ldrs'
import CardData from "../components/CardSolucoes.jsx";

export default function NossosDados() {
  trefoil.register()
  const [carregando, setCarregando] = useState(false);
  const [infos, setInfos] = useState([])

  useEffect(() => {
    setCarregando(true);

    setTimeout(() => {

      fetch("https://67393ea0a3a36b5a62ee3974.mockapi.io/api/greenascent/greener")
      .then( dado => dado.json() )
      .then( dado_json => setInfos(dado_json.results || dado_json || []))
      .catch( erro => alert(erro) )
      .finally( () => setCarregando(false))

    }, 1000);
  }, []);

  return (
    <section className="flex flex-col w-full min-h-screen py-10 gap-12 items-center bg-gradient-to-b from-verde-normal via-green-950 to-verde-normal">
      {
        carregando ? <l-trefoil
        size="40"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.4" 
        color="rgb(74 222 128)" 
      ></l-trefoil> : 


      <CardData infos={infos}/>
      }
    </section>
  )
}
