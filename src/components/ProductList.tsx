import React, { useEffect, useState } from "react"

import { Product } from "../models/product"
import ProductCard from "./ProductCard"
import { addItemToCart } from "../redux/actions/cartAction"
import { useDispatch } from "react-redux"

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

   const dispatch = useDispatch()
   const handleAddToCart = (product: Product) => {
      dispatch(addItemToCart(product))
   }

   return (
      <div className='grid w-full grid-cols-3 gap-10' id='products'>
         {products.map((product) => {
            return (
               <ProductCard
                  handleAddToCart={handleAddToCart}
                  product={product}
                  key={product._id}
               />
            )
         })}
      </div>
   )
}

export default ProductList
