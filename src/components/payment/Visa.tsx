import Card from "../icons/Card"
import React from "react"

const Visa = () => {
   return (
      <div className='flex-center cursor-pointer rounded-[4px] border-2 border-[#243757] bg-[#F5F6F7] px-8 py-3'>
         <Card /> <span className='pl-2'>Visa / Mastercard</span>
      </div>
   )
}

export default Visa
