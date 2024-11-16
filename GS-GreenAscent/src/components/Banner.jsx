

export default function Banner() {
  return (
    <section className="relative grid items-center justify-center mx-3" >
        <div className="">
            <img src="/imgs/Banner-Paisagem.webp" className="w-[960px] h-[540px] rounded-3xl hidden desktop:block" />
            <img src="/imgs/Banner-Paisagem-Celular.webp" className="w-full max-w-[540px] max-h-[960px] rounded-3xl desktop:hidden block" />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-3xl"></div>

        <div className="absolute top-0 left-0 w-full h-full grid items-center justify-center m-2">
            <h1 className="text-white tablet:text-5xl text-2xl mx-3 font-bold text-center text-wrap">Lutamos por um futuro <span className="text-green-500">melhor</span>,<br/>faça também <span className="text-green-500">sua</span> parte.</h1>
        </div>
    </section>
  )
}
