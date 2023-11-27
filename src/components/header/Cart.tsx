import { CartItem } from "../../models/cartItem"
import CartProductPopup from "./CartProductPopup"
import { Link } from "react-router-dom"
import { RootState } from "../../redux/reducers"
import { useSelector } from "react-redux"

const Cart = () => {
   const cartProducts: CartItem[] = useSelector(
      (state: RootState) => state.cart
   )
   return (
      <div className='absolute right-[-150px] top-[100%] z-30 mt-5 hidden w-fit rounded-[5px] bg-white p-[33px] text-black shadow-popup group-hover:flex md:w-[664px]'>
         <div className='flex w-full flex-col'>
            {cartProducts && cartProducts.length > 0 && (
               <div className='w-full pb-10'>
                  {cartProducts.map((product, index) => {
                     return (
                        <CartProductPopup
                           product={product}
                           key={product.product._id}
                        />
                     )
                  })}
               </div>
            )}

            <div className='flex-center-between w-full'>
               <div>
                  <div className='text-17 font-bold'>
                     <span>Total: </span>
                     <span>
                        $
                        {cartProducts
                           .reduce(
                              (init, cartItem) =>
                                 cartItem.product.price * cartItem.quantity +
                                 init,
                              0
                           )
                           .toFixed(2)}
                     </span>
                  </div>
               </div>
               <div>
                  <Link
                     to={"/checkout"}
                     className='rounded-[8px] border-2 border-orange-primary bg-orange-primary px-9 py-3 text-13 text-white duration-150 ease-in-out hover:bg-white hover:text-orange-primary'
                  >
                     Checkout
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cart
