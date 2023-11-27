import Overlay from "./Overlay"
import React from "react"

type Props = {
   children: React.ReactNode
}

const Modal = ({ children }: Props) => {
   return (
      <div className='fixed bottom-0 left-0 right-0 top-0 z-50 h-[100vh] w-[100vw]'>
         <Overlay>{children}</Overlay>
      </div>
   )
}

export default Modal
