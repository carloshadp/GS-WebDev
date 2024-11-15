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
      <nav className="grid col-span-2">
        <div className="hidden tablet:flex gap-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Solucoes">Nossas Soluções</NavLink>
          <NavLink to="/NossosDados">Nossos Dados</NavLink>
        </div>

        <div className="tablet:hidden">
          <button onClick={alternarNav}>{aberto ? <X className="text-white"/> : <Menu/>}</button>
        </div>
      </nav>
      {aberto && (
        <nav className="flex flex-col gap-3 basis-full items-center tablet:hidden pb-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Solucoes">Nossas Soluções</NavLink>
          <NavLink to="/NossosDados">Nossos Dados</NavLink>
        </nav>
      )}
    </>
  )
}
