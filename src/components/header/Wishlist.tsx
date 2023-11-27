import { RootState } from "../../redux/reducers"
import WishlistProductPopup from "./WishlistProductPopup"
import { useSelector } from "react-redux"

const Wishlist = () => {
   const wishlistProducts = useSelector((state: RootState) => state.wishlist)

   return (
      <div className='absolute right-0 top-[100%] z-30 mt-2 hidden w-[300px] cursor-default rounded-[5px] bg-white text-black shadow-popup group-hover:flex'>
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
