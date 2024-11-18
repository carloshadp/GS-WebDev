import dados from "../data/SolucoesDados.json"

export default function CardSolucoes() {

  return (
    <>
      {
      dados.map((info, index) => (
        <div key={index} className="flex flex-col bg-verde-escuro p-4 rounded-2xl border-[2px] border-gray-950 text-white items-center">
          <div>
            <img src={info.avatar} className="w-[340px] h-[240px] rounded-2xl"/>
          </div>

          <div className="flex text-nowrap gap-2">
            <h1>Pesquisador(a):</h1>
            <p>{info.name}</p>
          </div>

          <div className="hover:text-green-400">
            <p></p>
          </div>
        </div>
      ))
      }
    </>
  );
}