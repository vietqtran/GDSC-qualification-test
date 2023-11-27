import Header from "../header/Header"
import React from "react"

type Props = {
   children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
   return (
      <div
         id='main'
         className='container mx-auto w-full max-w-[1140px] px-5 pb-40 pt-12 md:px-0'
      >
         <Header />
         <main>{children}</main>
      </div>
   )
}

export default MainLayout
