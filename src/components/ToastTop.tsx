import React from "react"
import Success from "./icons/Success"

const ToastTop = () => {
   return (
      <div
         id='toast'
         className='fixed z-50 toast-keyframe top-[-80px] p-5 flex-center text-xl rounded-[8px] duration-150 ease-linear left-[50%] translate-x-[-50%] bg-[#F5F6F7]'
      >
         <Success />
         <span className='pl-2'> Message</span>
      </div>
   )
}

export default ToastTop
