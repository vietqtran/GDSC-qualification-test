import { CartItem } from "../models/cartItem"
import OrderProduct from "./OrderProduct"

type Props = {
   products: CartItem[]
}

const OrderDetail = ({ products }: Props) => {
   return (
      <div className='w-full bg-[#F5F6F7] px-20 py-3'>
         {products.map((item) => {
            return <OrderProduct product={item} key={item.product._id} />
         })}
      </div>
   )
}

export default OrderDetail
