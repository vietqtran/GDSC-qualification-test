import Cart from "./Cart"
import CartIcon from "./icons/CartIcon"
import CartOrangeIcon from "./icons/CartOrangeIcon"
import DinoIcon from "./icons/DinoIcon"
import { RootState } from "../redux/reducers"
import Wishlist from "./Wishlist"
import WishlistIcon from "./icons/WishlistIcon"
import WishlistOrangeIcon from "./icons/WishlistOrangeIcon"
import { useSelector } from "react-redux"

const Header = () => {
   const cartQuantity = useSelector((state: RootState) => state.cart).length
   return (
      <div className='flex-center-between w-full'>
         <div className='flex-center p-3'>
            <DinoIcon />
            <div className='pl-8'>
               <h1 className='text-2xl font-semibold'>Dinomerch</h1>
            </div>
         </div>
         <div className='flex-center'>
            <div className='before:contents-[] after:contents-[] flex-center group relative mr-5 cursor-pointer p-3 text-black before:absolute before:left-[50%] before:top-[100%] before:hidden before:h-[50px] before:w-[664px] before:translate-x-[-50%] before:bg-transparent after:absolute after:left-[50%] after:top-[calc(100%+10px)] after:hidden after:translate-x-[-50%] after:rotate-45 after:bg-white after:p-3 hover:text-orange-primary hover:before:block hover:after:block'>
               <div className='block group-hover:hidden'>
                  <CartIcon />
               </div>
               <div className='hidden group-hover:block'>
                  <CartOrangeIcon />
               </div>
               <Cart />
               <div className='pl-3 text-17 font-medium'>Cart</div>
               <div className='ml-2 w-[30px] grid place-items-center text-17 h-[30px] bg-orange-primary text-white aspect-square rounded-full'>
                  <span className='leading-none'>{cartQuantity}</span>
               </div>
            </div>
            <div className='before:contents-[] flex-center group relative ml-5 cursor-pointer p-3 text-black before:absolute before:left-[50%] before:top-[100%] before:hidden before:h-[50px] before:w-[664px] before:translate-x-[-50%] before:bg-transparent hover:text-orange-primary hover:before:block'>
               <div className='block group-hover:hidden'>
                  <WishlistIcon />
               </div>
               <div className='hidden group-hover:block'>
                  <WishlistOrangeIcon />
               </div>
               <Wishlist />
               <div className='pl-3 text-17 font-medium'>Wishlist</div>
            </div>
         </div>
      </div>
   )
}

export default Header
