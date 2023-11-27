import { useDispatch, useSelector } from "react-redux"

import AddToCartButton from "./AddToCartButton"
import { Product } from "../models/product"
import ProductCardHeartOutline from "./icons/ProductCardHeartOutline"
import ProductCardHeartSolid from "./icons/ProductCardHeartSolid"
import { RootState } from "../redux/reducers"
import { toggleWishlist } from "../redux/actions/wishlistAction"

type Props = {
   product: Product
   handleAddToCart: (product: Product) => void
}

const ProductCard = ({ product, handleAddToCart }: Props) => {
   const dispatch = useDispatch()

   const handleToggleWishlist = () => {
      dispatch(toggleWishlist(product))
   }

   const wishlistProducts = useSelector(
      (state: RootState) => state.wishlist
   ).map((item) => item._id)

   return (
      <div className='col-span-1 p-3 z-10'>
         <div className='w-full bg-[#f3f3f3] p-10 relative'>
            <div
               onClick={handleToggleWishlist}
               className='absolute right-0 hover:scale-125 duration-150 ease-linear top-0 m-3 p-3 box-content cursor-pointer'
            >
               {wishlistProducts.includes(product._id) && (
                  <ProductCardHeartSolid />
               )}
               {!wishlistProducts.includes(product._id) && (
                  <ProductCardHeartOutline />
               )}
            </div>
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
