import React from "react"

type Props = {
   children: React.ReactNode
}

const Overlay = ({ children }: Props) => {
   return (
      <div className='w-full h-full grid place-items-center bg-black bg-opacity-40'>
         {children}
      </div>
   )
}

export default Overlay
