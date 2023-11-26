import { Product } from "../models/product"
import React from "react"

type Props = {
   product: Product
}

const WishlistProductPopup = ({ product }: Props) => {
   return (
      <div className='flex-center border-b-[1px] border-b-gray-300 px-2 py-5'>
         <div className='aspect-square h-[110px]'>
            <img
               src={product.image}
               alt={product.name}
               className='h-full w-full object-cover'
            />
         </div>
         <div className='ml-3 flex flex-col'>
            <p className='text-13 font-semibold'>{product.name}</p>
            <span className='py-3 text-17 font-bold'>
               ${product.price.toFixed(2)}
            </span>
            <button className='rounded-[4px] border-2 border-orange-500 px-6 py-2 text-13 font-semibold text-orange-primary'>
               Add to cart
            </button>
         </div>
      </div>
   )
}

export default WishlistProductPopup
