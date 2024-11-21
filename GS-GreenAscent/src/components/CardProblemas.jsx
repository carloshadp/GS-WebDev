import dados from "../data/Problemas.json"

export default function CardSolucoes() {

  return (
    <>
      {
      dados.map((info, index) => (
        <div key={index} className="flex flex-col bg-verde-escuro max-w-[340px] p-4 rounded-2xl border-[2px] border-gray-950 text-white items-center">
          <div>
            <img src={info.image} className="w-[340px] h-[240px] rounded-2xl"/>
          </div>

          <div className="flex flex-col text-nowrap gap-2">
            <h1>Problema {info.id}:</h1>
            <p className="text-wrap">{info.detalhes}</p>
          </div>

        </div>
      ))
      }
    </>
  );
}