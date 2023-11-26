import React, { Fragment } from "react"

import Header from "../Header"

type Props = {
   children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
   return (
      <Fragment>
         <Header />
         <main>{children}</main>
      </Fragment>
   )
}

export default MainLayout
