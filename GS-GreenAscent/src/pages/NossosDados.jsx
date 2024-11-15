import { useState, useEffect } from "react"
import { trefoil } from 'ldrs'
export default function NossosDados() {
  trefoil.register()
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    setCarregando(true);

    setTimeout(() => {
      setCarregando(false)
    }, 2000)
  }, [])

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

      <h1>Carregou!</h1>
        
      }
    </section>
  )
}
