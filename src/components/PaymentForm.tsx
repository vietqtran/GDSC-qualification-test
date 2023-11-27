import React, { useState } from "react"

import Input from "./Input"
import OrderDetail from "./OrderDetail"
import PaymentMethods from "./PaymentMethods"
import { RootState } from "../redux/reducers"
import { useSelector } from "react-redux"

const PaymentForm = () => {
   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
   const [phone, setPhone] = useState<number>()
   const [address, setAddress] = useState("")
   const [cardName, setCardName] = useState("")
   const [cardNumber, setCardNumber] = useState<number>()
   const [expDate, setExpDate] = useState("")
   const [cvv, setCvv] = useState<number>()
   const [nunberOfItems, setNunberOfItems] = useState<number>()
   const [orderTotal, setOrderTotal] = useState("")

   const cartProducts = useSelector((state: RootState) => state.cart)

   return (
      <div>
         <div className='w-full grid grid-cols-11 gap-10 mb-14'>
            <div className='col-span-6'>
               <h1 className='text-28 font-semibold mb-8'>Shipping Address</h1>
               <div className='grid grid-cols-2 gap-4'>
                  <div className='col-span-1'>
                     <Input label='First Name' />
                  </div>
                  <div className='col-span-1'>
                     <Input label='Last Name' />
                  </div>
               </div>
               <Input label='Phone Number' />
               <Input label='Street Address' />
            </div>
            <div className='col-span-5'>
               <h1 className='text-28 font-semibold mb-5'>Payment Details</h1>
               <div className='mb-5'>
                  <PaymentMethods />
               </div>
               <Input label='Cardholder Name' />
               <Input label='Cardholder Number' />
               <div className='grid grid-cols-2 gap-4'>
                  <div className='col-span-1'>
                     <Input label='Expiration Date' />
                  </div>
                  <div className='col-span-1'>
                     <Input label='CVV' />
                  </div>
               </div>
            </div>
         </div>
         <div className='w-full grid grid-cols-11 gap-10'>
            <div className='col-span-6'>
               <h1 className='text-28 font-semibold mb-8'>Order Details</h1>
               <OrderDetail products={cartProducts} />
            </div>
            <div className='col-span-5 p-5'>
               <h1 className='text-28 font-semibold mb-5'>Order Summary</h1>
               <div className='max-w-[430px] w-full text-15 text-[#5D6B82]'>
                  <div className='flex-center-between pb-4'>
                     <span>{`Items (${cartProducts.length}): `}</span>
                     <span>
                        <span>$ </span>
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
                  <div className='flex-center-between pb-4'>
                     <span>{`Items (${cartProducts.length}): `}</span>
                     <span>$ 96.00</span>
                  </div>
                  <div className='flex-center-between pb-4'>
                     <span>Shipment Cost: </span>
                     <span>$ 6.50</span>
                  </div>
                  <hr className='w-[380px] mx-auto mt-3 mb-8 block' />
                  <div className='flex-center-between font-semibold pb-4'>
                     <span>Tax Collected: </span>
                     <span>$ 0.80</span>
                  </div>
                  <div className='grid place-items-center mt-5 '>
                     <button className='py-5 font-semibold px-[82px] border-2 border-orange-primary hover:text-orange-primary hover:bg-white duration-150 ease-out bg-orange-primary rounded-lg text-white text-xl'>
                        Confirm order
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PaymentForm
