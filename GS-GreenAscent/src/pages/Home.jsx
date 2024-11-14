
export default function Home() {
  return (
    <>
      <section className="flex flex-col w-full h-screen py-10 items-center bg-gradient-to-b from-verde-normal via-green-950 to-verde-normal">
        <div className="relative" >
          <div>
            <img src="/imgs/Banner-Paisagem.webp" className="w-[960px] h-[540px] rounded-3xl" />
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-3xl"></div>

          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold text-center">Lutamos por um futuro <span className="text-green-500">melhor</span>,<br/>faça também <span className="text-green-500">sua</span> parte.</h1>
          </div>
        </div>
      </section>
    </>
  )
}
