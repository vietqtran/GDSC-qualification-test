import Overlay from "./Overlay"
import React from "react"

type Props = {}

const Modal = (props: Props) => {
   return (
      <div className='absolute bottom-0 left-0 right-0 top-0 z-50 h-[100vh] w-[100vw]'>
         <Overlay>
            <h1>Modal</h1>
         </Overlay>
      </div>
   )
}

export default Modal
