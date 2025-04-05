import { Outlet } from "react-router-dom"

const Events = () => {
      return (
            <div className="bg-gradient-to-br   w-[100vw] from-[#2A003D] to-[#1D2D50] h-dvh">
                  <header className="w-full h-[3.5rem] bg-white/30 backdrop:blur-3xl">This is the heder</header>
                  <div className="flex flex-1 from-[#a19da3] to-[#1D2D50]  items-center justify-center">
                        <Outlet />
                  </div>
            </div>
      )
}

export default Events