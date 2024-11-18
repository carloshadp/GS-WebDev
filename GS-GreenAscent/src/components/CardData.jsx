/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function CardData({ infos }) {

  return (
    <>
      {
      infos.map((info, index) => (
        <div key={index} className="flex flex-col bg-verde-escuro p-4 rounded-2xl border-[2px] border-gray-950 text-white items-center">
          <div className="flex flex-col items-center">
            <h1>{info.titulo}</h1>
            <img src={info.place} className="w-[340px] h-[240px] rounded-2xl"/>
          </div>

          <div className="flex text-nowrap gap-2">
            <h1>Data da Coleta:</h1>
            <p>{info.createdAt}</p>
          </div>

          <div className="hover:text-green-400">
            <Link to={`/NossosDados/${info.id}`} key={index}>Ver Detalhes</Link>
          </div>
        </div>
      ))
      }
    </>
  );
}
