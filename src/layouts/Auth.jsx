import { Outlet } from 'react-router-dom'

const Auth = () => {
      return (
            <div className='bg-gradient-to-br flex flex-col  w-[100vw] back-img from-[#2A003D] to-[#1D2D50] h-dvh p-5'>
                  <h1 className='text-2xl'>Eventrio.</h1>
                  <div className='flex flex-1 from-[#2A003D] to-[#1D2D50]  items-center justify-center'>
                        <Outlet />
                  </div>
            </div>
      )
}

export default Auth