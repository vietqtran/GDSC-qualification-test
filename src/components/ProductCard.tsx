import AddToCartButton from "./AddToCartButton"
import { Product } from "../models/product"
import React from "react"

type Props = {
   product: Product
   handleAddToCart: (product: Product) => void
}

const ProductCard = ({ product, handleAddToCart }: Props) => {
   return (
      <div className='col-span-1 p-3'>
         <div className='w-full bg-[#f3f3f3] p-10'>
            <img
               src={product.image}
               alt={product.name}
               className='h-auto w-full object-cover'
            />
         </div>
         <div className='w-full py-4'>
            <p className='text-13 font-semibold'>{product.name}</p>
         </div>
         <div className='flex-center-between'>
            <div className='text-xl font-bold'>${product.price.toFixed(2)}</div>
            <div
               onClick={() => {
                  handleAddToCart(product)
               }}
            >
               <AddToCartButton />
            </div>
         </div>
      </div>
   )
}

export default ProductCard
