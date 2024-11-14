

export default function Footer() {
  return (
    <>
      <footer className="w-full h-52 flex flex-col desktop:flex-row desktop:pl-36 justify-evenly items-center bg-gradient-to-t from-green-950 to-verde-normal text-cinza">
        <div>
          <img src="/imgs/GreenAscent-LOGO.png" className="w-40 h-40" />
        </div>

        <div className="sm: flex flex-col">
          <div className="place-self-center text-lg text-green-400">
            Créditos
          </div>
          <div className="flex flex-col place-self-center sm:p-0 p-3 text-cinza">
            <a href="https://github.com/CarlosHADP" target='blank' className="place-self-center hover:text-green-400">Carlos Henrique</a>
            <a href="https://github.com/CarlosHADP" target='blank' className="place-self-center hover:text-green-400">Rodrigo Hiroshi</a>
            <a href="https://github.com/CarlosHADP" target='blank' className="place-self-center hover:text-green-400">Mauricio Alves</a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2>Nosso Repo</h2>
          <a href="https://github.com/carloshadp/GS-WebDev">https://github.com/carloshadp/GS-WebDev</a>
        </div>

      </footer>
    </>
  )
}
