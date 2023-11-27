import {
   decreaseCartItemQuantity,
   deleteCartItem,
   increaseCartItemQuantity,
} from "../redux/actions/cartAction"

import { CartItem } from "../models/cartItem"
import GarbageIcon from "./icons/GarbageIcon"
import MinusIcon from "./icons/MinusIcon"
import PlusIcon from "./icons/PlusIcon"
import { useDispatch } from "react-redux"

type Props = {
   product: CartItem
}

const CartProductPopup = ({ product }: Props) => {
   const dispatch = useDispatch()

   const handleDeleteCartItem = () => {
      dispatch(deleteCartItem(product.product._id))
   }

   const handleIncreaseCartItem = () => {
      dispatch(increaseCartItemQuantity(product.product._id))
   }

   const handleDecreaseCartItem = () => {
      if (product.quantity === 1) {
         dispatch(deleteCartItem(product.product._id))
      } else {
         dispatch(decreaseCartItemQuantity(product.product._id))
      }
   }

   return (
      <div className='flex-center-between h-[120px] cursor-default border-b-[1px] border-b-gray-300 p-2'>
         <div className='h-full'>
            <img
               alt={product.product.name}
               className='aspect-square h-full object-cover'
               src={product.product.image}
            />
         </div>
         <div className='flex-1'>
            <p className='w-full truncate px-5 text-13 font-semibold'>
               {product.product.name}
            </p>
         </div>
         <div className='flex-center-between'>
            <div className='flex-center-between'>
               <button onClick={handleDecreaseCartItem} className='p-3'>
                  <MinusIcon />
               </button>
               <div className='font-semibold w-[30px] text-center'>
                  {product.quantity}
               </div>
               <button onClick={handleIncreaseCartItem} className='p-3'>
                  <PlusIcon />
               </button>
            </div>
            <div className='min-w-[100px] flex-1 px-3 text-center text-17 font-bold'>
               ${(product.product.price * product.quantity).toFixed(2)}
            </div>
            <div>
               <div
                  onClick={handleDeleteCartItem}
                  className='p-3 cursor-pointer'
               >
                  <GarbageIcon />
               </div>
            </div>
         </div>
      </div>
   )
}

export default CartProductPopup
