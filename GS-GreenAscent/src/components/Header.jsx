import Nav from "./Nav"

export default function Header() {
  return (
    <>
      <header className="w-full tablet:h-36 grid grid-cols-2 flex-wrap desktop:sticky z-[20] items-center justify-around bg-gradient-to-b from-green-950 to-verde-normal text-cinza ">
        <div className="flex gap-3 items-center place-self-center">
          <img src="/imgs/GreenAscent-LOGO.png" className="w-16 h-16"  />
          <h1 className="tablet:text-2xl text-lg text-nowrap">Green Ascent</h1>
        </div>
        
        <Nav/>
        
      </header>
    </>
  )
}
