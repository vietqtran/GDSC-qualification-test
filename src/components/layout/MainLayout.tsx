import Header from "../header/Header"
import React from "react"
import ToastTop from "../ToastTop"

type Props = {
   children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
   return (
      <div
         id='main'
         className='container mx-auto w-full max-w-[1140px] px-5 pb-40 pt-12 md:px-0'
      >
         <ToastTop />

         <Header />
         <main>{children}</main>
      </div>
   )
}

export default MainLayout
