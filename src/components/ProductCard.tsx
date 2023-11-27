import AddToCartButton from "./AddToCartButton"
import { Product } from "../models/product"
import ProductCardHeartOutline from "./icons/ProductCardHeartOutline"
import { RootState } from "../redux/reducers"
import { useSelector } from "react-redux"

type Props = {
   product: Product
   handleAddToCart: (product: Product) => void
}

const ProductCard = ({ product, handleAddToCart }: Props) => {
   const wishlistProducts = useSelector(
      (state: RootState) => state.wishlist
   ).map((item) => item._id)
   return (
      <div className='col-span-1 p-3'>
         <div className='w-full bg-[#f3f3f3] p-10 relative z-0'>
            {wishlistProducts.includes(product._id) && (
               <div className='absolute right-0 top-0 m-3 p-3 box-content cursor-pointer'>
                  <ProductCardHeartOutline />
               </div>
            )}
            {!wishlistProducts.includes(product._id) && (
               <div className='absolute right-0 top-0 m-3 p-3 box-content cursor-pointer'>
                  <ProductCardHeartOutline />
               </div>
            )}
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
