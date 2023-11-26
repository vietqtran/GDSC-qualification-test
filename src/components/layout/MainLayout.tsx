import Header from "../Header"
import React from "react"

type Props = {
   children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
   return (
      <div className='container mx-auto w-full py-12'>
         <Header />
         <main>{children}</main>
      </div>
   )
}

export default MainLayout
