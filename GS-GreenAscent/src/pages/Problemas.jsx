import dados from "../data/Problemas.json"
import CardSolucoes from "../components/CardProblemas.jsx"

export default function Solucoes() {
  return (
    <section className="flex flex-col w-full min-h-screen py-10 items-center bg-gradient-to-b from-verde-normal via-green-950 to-verde-normal">
      <h1 className="text-green-400 text-2xl text-center">Problemas que identificamos<br/>para criarmos uma solução<br/>a favor da transição energética!</h1>
      <CardSolucoes infos={dados} />
    </section>
  );
}
