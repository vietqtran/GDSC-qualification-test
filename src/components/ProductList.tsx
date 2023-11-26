import React, { useEffect, useState } from "react"

import { Product } from "../models/product"
import ProductCard from "./ProductCard"

const ProductList = () => {
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
      <div className='grid w-full grid-cols-3 gap-10'>
         {products.map((product) => {
            return <ProductCard key={product._id} product={product} />
         })}
      </div>
   )
}

export default ProductList
