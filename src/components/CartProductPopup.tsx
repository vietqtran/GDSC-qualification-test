import GarbageIcon from "./icons/GarbageIcon"
import MinusIcon from "./icons/MinusIcon"
import PlusIcon from "./icons/PlusIcon"
import { Product } from "../models/product"
import React from "react"

type Props = {
   product: Product
}

const CartProductPopup = ({ product }: Props) => {
   return (
      <div className='flex-center-between h-[120px] cursor-default border-b-[1px] border-b-gray-300 p-2'>
         <div className='h-full'>
            <img
               alt={product.name}
               className='aspect-square h-full object-cover'
               src={product.image}
            />
         </div>
         <div className='flex-1'>
            <p className='w-full truncate px-5 text-13 font-semibold'>
               {product.name}
            </p>
         </div>
         <div className='flex-center-between'>
            <div className='flex-center-between'>
               <button className='p-3'>
                  <MinusIcon />
               </button>
               <div className='font-semibold'>1</div>
               <button className='p-3'>
                  <PlusIcon />
               </button>
            </div>
            <div className='min-w-[100px] flex-1 px-3 text-center text-17 font-bold'>
               ${product.price.toFixed(2)}
            </div>
            <div>
               <button className='p-3'>
                  <GarbageIcon />
               </button>
            </div>
         </div>
      </div>
   )
}

export default CartProductPopup
