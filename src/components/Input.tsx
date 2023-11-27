import React from "react"

type Props = {
   label: string
   value: string | number
   setValue: (value: any) => void
}

const Input = ({ label, value, setValue }: Props) => {
   return (
      <div className='mb-5 w-full'>
         <label className='mb-1 block text-17 text-[#5D6B82]'>{label}</label>
         <input
            value={value}
            onChange={(e) => {
               setValue(e.target.value)
            }}
            type='text'
            required
            className='h-[60px] w-full rounded-lg border-2 border-[#DFE2E6] bg-[#F5F6F7] px-3 text-17 leading-none outline-none'
         />
      </div>
   )
}

export default Input
