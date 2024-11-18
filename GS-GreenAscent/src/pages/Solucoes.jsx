import dados from "../data/SolucoesDados.json"
import CardSolucoes from "../components/CardSolucoes.jsx"

export default function Solucoes() {
  return (
    <section className="flex flex-col w-full min-h-screen py-10 items-center bg-gradient-to-b from-verde-normal via-green-950 to-verde-normal">
      <h1 className="text-green-400 text-xl text-center">Nossas soluçoes para incentivar<br/>a transição energética!</h1>
      <CardSolucoes infos={dados} />
    </section>
  );
}
