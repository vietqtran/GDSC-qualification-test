import React from "react"

type Props = {
   children: React.ReactNode
}

const Overlay = ({ children }: Props) => {
   return (
      <div className='grid h-full w-full place-items-center bg-black bg-opacity-40'>
         {children}
      </div>
   )
}

export default Overlay
