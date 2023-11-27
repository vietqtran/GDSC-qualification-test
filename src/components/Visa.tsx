import Card from "./icons/Card"
import React from "react"

const Visa = () => {
   return (
      <div className=' flex-center py-3 px-8 bg-[#F5F6F7] border-2 border-[#243757] rounded-[4px] cursor-pointer'>
         <Card /> <span className='pl-2'>Visa / Mastercard</span>
      </div>
   )
}

export default Visa
