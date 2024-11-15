import Banner from "../components/Banner";

export default function Home() {
  return (
    <>
      <section className="flex flex-col w-full min-h-screen py-10 gap-12 items-center bg-gradient-to-b from-verde-normal via-green-950 to-verde-normal">
        <Banner/>

        <div className="flex flex-col w-[960px]">
          <h1 className="text-green-400 text-4xl">Quem somos?</h1>
          <p className="text-xl text-cinza">Somos um grupo apaixonado por tecnologia e inovacao, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus odit libero consectetur deserunt, facere possimus cumque minima nulla quibusdam earum delectus blanditiis excepturi natus, molestiae sint! Similique veniam iure impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, distinctio consectetur saepe voluptate in, pariatur accusantium hic, mollitia repellendus nam fuga ipsum obcaecati aperiam quaerat. Quod neque excepturi facere voluptatibus!</p>
        </div>

        <div className="flex flex-col w-[960px]">
          <h1 className="text-green-400 text-4xl">Nossa Solucao?</h1>
          <p className="text-xl text-cinza">Somos um grupo apaixonado por tecnologia e inovacao, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus odit libero consectetur deserunt, facere possimus cumque minima nulla quibusdam earum delectus blanditiis excepturi natus, molestiae sint! Similique veniam iure impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, distinctio consectetur saepe voluptate in, pariatur accusantium hic, mollitia repellendus nam fuga ipsum obcaecati aperiam quaerat. Quod neque excepturi facere voluptatibus!</p>
        </div>
      </section>
    </>
  )
}
