import Header from "../Header"
import React from "react"

type Props = {
   children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
   return (
      <div className='w-full container mx-auto py-12 '>
         <Header />
         <main>{children}</main>
      </div>
   )
}

export default MainLayout
