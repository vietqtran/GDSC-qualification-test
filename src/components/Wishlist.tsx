import { RootState } from "../redux/reducers"
import WishlistProductPopup from "./WishlistProductPopup"
import { useSelector } from "react-redux"

const Wishlist = () => {
   const wishlistProducts = useSelector((state: RootState) => state.wishlist)

   return (
      <div className='absolute z-30 left-[50%] top-[100%] mt-2 hidden w-[300px] translate-x-[-50%] cursor-default rounded-[5px] bg-white text-black shadow-popup group-hover:flex'>
         {wishlistProducts && wishlistProducts.length > 0 && (
            <div className='p-4'>
               {wishlistProducts.map((product) => {
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
