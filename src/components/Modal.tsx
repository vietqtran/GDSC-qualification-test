import Overlay from "./Overlay"
import React from "react"

type Props = {}

const Modal = (props: Props) => {
   return (
      <div className='w-[100vw] h-[100vh] absolute top-0 left-0 right-0 bottom-0 z-50'>
         <Overlay>
            <h1>Modal</h1>
         </Overlay>
      </div>
   )
}

export default Modal
