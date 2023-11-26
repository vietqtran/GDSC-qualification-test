import CartIcon from "./icons/CartIcon"
import CartOrangeIcon from "./icons/CartOrangeIcon"
import DinoIcon from "./icons/DinoIcon"
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
            <div className='flex-center group p-3 mr-5 cursor-pointer text-black hover:text-orange-primary'>
               <div className='block group-hover:hidden'>
                  <CartIcon />
               </div>
               <div className='hidden group-hover:block'>
                  <CartOrangeIcon />
               </div>
               <div className='font-medium text-17 pl-3'>Cart</div>
            </div>
            <div className='flex-center group p-3 ml-5 text-black cursor-pointer hover:text-orange-primary'>
               <div className='block group-hover:hidden'>
                  <WishlistIcon />
               </div>
               <div className='hidden group-hover:block'>
                  <WishlistOrangeIcon />
               </div>
               <div className='font-medium text-17 pl-3'>Wishlist</div>
            </div>
         </div>
      </div>
   )
}

export default Header
