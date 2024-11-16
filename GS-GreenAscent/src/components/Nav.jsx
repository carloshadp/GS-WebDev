import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";


export default function Nav() {

  const [aberto, setAberto] = useState(false);

  const alternarNav = () => {
    setAberto(!aberto);
  }

  return (
    <>
      <nav className="grid items-center">
        <div className="hidden tablet:flex gap-10 place-self-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Solucoes">Nossas Soluções</NavLink>
          <NavLink to="/NossosDados">Nossos Dados</NavLink>
        </div>

        <div className="tablet:hidden place-self-center">
          <button onClick={alternarNav}>{aberto ? <X className="text-white"/> : <Menu/>}</button>
        </div>
      </nav>
      {aberto && (
        <nav className="flex flex-col gap-3 basis-full col-span-2 w-full items-center tablet:hidden mb-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Solucoes">Nossas Soluções</NavLink>
          <NavLink to="/NossosDados">Nossos Dados</NavLink>
        </nav>
      )}
    </>
  )
}
