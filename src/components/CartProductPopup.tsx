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
      <div className='h-[120px] cursor-default p-2 border-b-[1px] flex-center-between border-b-gray-300'>
         <div className='h-full'>
            <img
               alt={product.name}
               className='h-full aspect-square object-cover'
               src={product.image}
            />
         </div>
         <div className='flex-1'>
            <p className='w-full font-semibold text-13 px-5 truncate'>
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
            <div className='flex-1 font-bold px-3 text-17 text-center min-w-[100px]'>
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
