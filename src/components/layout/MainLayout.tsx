import Header from "../Header"
import React from "react"
import ToastTop from "../ToastTop"

type Props = {
   children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
   return (
      <div
         id='main'
         className='container mx-auto w-full max-w-[1140px] pb-40 pt-12'
      >
         <ToastTop />

         <Header />
         <main>{children}</main>
      </div>
   )
}

export default MainLayout
