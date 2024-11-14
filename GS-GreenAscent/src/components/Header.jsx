import Nav from "./Nav"

export default function Header() {
  return (
    <>
      <header className="w-full h-28 flex items-center justify-around bg-gradient-to-b from-green-950 to-verde-normal text-cinza">
        <div className="flex gap-3 items-center">
          <img src="/imgs/GreenAscent-LOGO.png" className="w-16 h-16"  />
          <h1 className="text-2xl">Green Ascent</h1>
        </div>
        
        <Nav/>
        
      </header>
    </>
  )
}
