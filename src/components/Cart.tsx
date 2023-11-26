import React, { useEffect, useState } from "react"

import CartProductPopup from "./CartProductPopup"
import { Product } from "../models/product"

const Cart = () => {
   const [products, setProducts] = useState<Product[]>([])

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(
               "https://testapi.io/api/dinomerch/products"
            )
            if (!response.ok) {
               throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json()
            setProducts(data)
         } catch (error) {}
      }

      fetchData()
   }, [])

   return (
      <div className='absolute left-[50%] top-[100%] mt-5 hidden w-[664px] translate-x-[-50%] rounded-[5px] bg-white p-[33px] text-black shadow-popup group-hover:flex'>
         <div className='flex w-full flex-col'>
            {products && products.length > 0 && (
               <div className='w-full'>
                  {products.map((product) => {
                     return (
                        <CartProductPopup product={product} key={product._id} />
                     )
                  })}
               </div>
            )}

            <div className='flex-center-between w-full pt-10'>
               <div>
                  <div className='text-17 font-bold'>
                     <span>Total: </span>
                     <span>$96.00</span>
                  </div>
               </div>
               <div>
                  <button className='rounded-[8px] bg-orange-primary px-9 py-3 text-13 text-white'>
                     Checkout
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cart
