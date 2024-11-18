import { Frown, CornerUpLeft } from "lucide-react"
import { NavLink } from "react-router-dom"
export default function PageNotFound() {
  return (
    <section className="bg-verde-normal flex flex-col h-screen items-center text-green-400">
      <Frown size={200} color="rgb(74 222 128)"/>
      <h1 className="text-9xl">404</h1>
      <h2 className="text-5xl">Page Not Found</h2>
      <NavLink to="/" className="flex text-5xl items-center"><CornerUpLeft size={40}/>Voltar</NavLink>
    </section>
  )
}
