import Banner from "../components/Banner";
import Favoritos from "../components/Favoritos";

export default function Home() {
  return (
    <>
      <section className="flex flex-col w-full min-h-screen gap-12 items-center bg-gradient-to-b from-verde-normal via-green-950 to-verde-normal">
        <Banner/>

        <div className="grid row-span-2 w-full px-5 max-w-[960px]">
          <h1 className="text-green-400 text-4xl">Quem somos?</h1>
          <p className="text-xl text-cinza text-justify">Somos a Green Ascent, um grupo de trabalho formado por estudantes universitários apaixonados por sustentabilidade e inovação. Nosso objetivo é criar soluções viáveis e conscientes para os desafios do setor energético, combinando aprendizado acadêmico com impacto ambiental positivo.</p>
        </div>

        <div className="grid row-span-2 w-full px-5 max-w-[960px]">
          <h1 className="text-green-400 text-4xl">Nossas Soluções?</h1>
          <p className="text-xl text-cinza text-justify">Eólica Sustentável: Planejamento eficiente para minimizar impactos em comunidades e ecossistemas.<br/>Solar Reciclável: Programas de reciclagem para reaproveitar materiais e reduzir resíduos.<br/>Hidro Equilibrada: Projetos de menor impacto ambiental com compensação justa para comunidades afetadas.<br/>Biomassa Limpa: Tecnologias avançadas para reduzir resíduos e poluição.<br/>Mar Preservado: Proteção de ecossistemas marinhos em projetos de energia offshore.</p>
        </div>

        <div className="grid row-span-2 w-full px-5 max-w-[960px]">
          <h1 className="text-green-400 text-4xl">Favoritos ⭐</h1>
          <Favoritos/>
        </div>
      </section>
    </>
  )
}
