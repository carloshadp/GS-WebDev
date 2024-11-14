import { NavLink } from "react-router-dom";


export default function Nav() {
  return (
    <div className="flex gap-10">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Solucoes">Nossas Soluções</NavLink>
      <NavLink to="/NossosDados">Nossos Dados</NavLink>
    </div>
  )
}
