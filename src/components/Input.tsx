import React from "react"

type Props = {
   label: string
   value: string | number
   setValue: (value: any) => void
}

const Input = ({ label, value, setValue }: Props) => {
   return (
      <div className='w-full mb-5'>
         <label className='text-[#5D6B82] text-17 mb-1 block'>{label}</label>
         <input
            value={value}
            onChange={(e) => {
               setValue(e.target.value)
            }}
            type='text'
            className='bg-[#F5F6F7] w-full text-17 h-[60px] border-2 border-[#DFE2E6] rounded-lg leading-none outline-none px-3'
         />
      </div>
   )
}

export default Input
