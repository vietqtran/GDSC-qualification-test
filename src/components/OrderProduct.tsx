import { CartItem } from "../models/cartItem"
import React from "react"

type Props = {
   product: CartItem
}

const OrderProduct = ({ product }: Props) => {
   return (
      <div className='flex-center-between py-5'>
         <div className='h-[96px] aspect-square'>
            <img
               src={product.product.image}
               alt={product.product.name}
               className='w-full h-full object-cover'
            />
         </div>
         <div className='flex-1 flex flex-col pl-16'>
            <span className='font-semibold text-13'>
               {product.product.name}
            </span>
            <span className='text-13'>
               <span>Price: </span>
               <span className='font-semibold'>
                  ${product.product.price.toFixed(2)}
               </span>
            </span>
            <span className='text-13'>
               <span>Quantity: </span>
               <span className='font-semibold'>
                  {product.quantity < 10
                     ? "0" + product.quantity
                     : product.quantity}
               </span>
            </span>
         </div>
         <div className='h-full aspect-square font-bold'>
            ${product.product.price.toFixed(2)}
         </div>
      </div>
   )
}

export default OrderProduct
