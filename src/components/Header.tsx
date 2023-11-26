import Cart from "./Cart"
import CartIcon from "./icons/CartIcon"
import CartOrangeIcon from "./icons/CartOrangeIcon"
import DinoIcon from "./icons/DinoIcon"
import Wishlist from "./Wishlist"
import WishlistIcon from "./icons/WishlistIcon"
import WishlistOrangeIcon from "./icons/WishlistOrangeIcon"

const Header = () => {
   return (
      <div className='w-full flex-center-between'>
         <div className='flex-center p-3'>
            <DinoIcon />
            <div className='pl-8'>
               <h1 className='font-semibold text-2xl'>Dinomerch</h1>
            </div>
         </div>
         <div className='flex-center'>
            <div
               className='
            before:absolute before:contents-[] before:w-[664px] before:h-[50px] before:bg-transparent before:top-[100%] before:hidden hover:before:block before:left-[50%] before:translate-x-[-50%]
            after:absolute after:contents-[] after:bg-white after:p-3 after:rotate-45 after:top-[calc(100%+10px)] after:hidden hover:after:block after:left-[50%] after:translate-x-[-50%]
            relative flex-center group p-3 mr-5 cursor-pointer text-black hover:text-orange-primary'
            >
               <div className='block group-hover:hidden'>
                  <CartIcon />
               </div>
               <div className='hidden group-hover:block'>
                  <CartOrangeIcon />
               </div>
               <Cart />
               <div className='font-medium text-17 pl-3'>Cart</div>
            </div>
            <div className='relative flex-center group p-3 ml-5 text-black cursor-pointer hover:text-orange-primary'>
               <div className='block group-hover:hidden'>
                  <WishlistIcon />
               </div>
               <div className='hidden group-hover:block'>
                  <WishlistOrangeIcon />
               </div>
               <Wishlist />
               <div className='font-medium text-17 pl-3'>Wishlist</div>
            </div>
         </div>
      </div>
   )
}

export default Header
