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
      <div className='text-black absolute mt-5 hidden rounded-[5px] group-hover:flex p-[33px] w-[664px] top-[100%] shadow-popup left-[50%] translate-x-[-50%]'>
         <div className='flex flex-col w-full'>
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
                  <button className='text-13 py-3 px-9 rounded-[8px] bg-orange-primary text-white'>
                     Checkout
                  </button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cart
