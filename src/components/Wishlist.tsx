import React, { useEffect, useState } from "react"

import { Product } from "../models/product"
import WishlistProductPopup from "./WishlistProductPopup"

const Wishlist = () => {
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
      <div className='absolute left-[50%] top-[100%] mt-2 hidden w-[300px] translate-x-[-50%] cursor-default rounded-[5px] bg-white text-black shadow-popup group-hover:flex'>
         {products && products.length > 0 && (
            <div className='p-4'>
               {products.map((product) => {
                  return (
                     <WishlistProductPopup
                        product={product}
                        key={product._id}
                     />
                  )
               })}
            </div>
         )}
      </div>
   )
}

export default Wishlist
