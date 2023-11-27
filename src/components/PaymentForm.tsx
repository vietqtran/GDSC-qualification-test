import React, { useState } from "react"

import Input from "./Input"
import OrderDetail from "./OrderDetail"
import PaymentMethods from "./PaymentMethods"
import { RootState } from "../redux/reducers"
import { useSelector } from "react-redux"

const SHIPMENT_COST = 6.5
const TAX_COLLECTED = 0.8

const PaymentForm = () => {
   const cartProducts = useSelector((state: RootState) => state.cart)

   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
   const [phone, setPhone] = useState<number>()
   const [address, setAddress] = useState("")
   const [cardName, setCardName] = useState("")
   const [cardNumber, setCardNumber] = useState<number>()
   const [expDate, setExpDate] = useState("")
   const [cvv, setCvv] = useState<number>()

   const numberOfItems = cartProducts.length
   const cartTotal = cartProducts.reduce(
      (init, cartItem) => cartItem.product.price * cartItem.quantity + init,
      0
   )
   const orderTotal =
      cartProducts.reduce(
         (init, cartItem) => cartItem.product.price * cartItem.quantity + init,
         0
      ) +
      TAX_COLLECTED +
      SHIPMENT_COST

   const handleSubmitForm = () => {
      const paymentForm = document.getElementById("payment_form")
   }
   return (
      <form onSubmit={handleSubmitForm} id='payment_form' method='POST'>
         <div className='mb-14 grid w-full grid-cols-11 gap-10'>
            <div className='col-span-6'>
               <h1 className='mb-8 text-28 font-semibold'>Shipping Address</h1>
               <div className='grid grid-cols-2 gap-4'>
                  <div className='col-span-1'>
                     <Input
                        type='text'
                        value={firstName}
                        setValue={setFirstName}
                        label='First Name'
                     />
                  </div>
                  <div className='col-span-1'>
                     <Input
                        type='text'
                        setValue={setLastName}
                        value={lastName}
                        label='Last Name'
                     />
                  </div>
               </div>
               <Input
                  type='number'
                  value={phone ?? ""}
                  setValue={setPhone}
                  label='Phone Number'
               />
               <Input
                  type='text'
                  value={address}
                  setValue={setAddress}
                  label='Street Address'
               />
            </div>
            <div className='col-span-5'>
               <h1 className='mb-5 text-28 font-semibold'>Payment Details</h1>
               <div className='mb-5'>
                  <PaymentMethods />
               </div>
               <Input
                  type='text'
                  setValue={setCardName}
                  value={cardName}
                  label='Cardholder Name'
               />
               <Input
                  type='number'
                  value={cardNumber ?? ""}
                  setValue={setCardNumber}
                  label='Cardholder Number'
               />
               <div className='grid grid-cols-2 gap-4'>
                  <div className='col-span-1'>
                     <Input
                        type='text'
                        setValue={setExpDate}
                        value={expDate}
                        label='Expiration Date'
                     />
                  </div>
                  <div className='col-span-1'>
                     <Input
                        type='number'
                        setValue={setCvv}
                        value={cvv ?? ""}
                        label='CVV'
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className='grid w-full grid-cols-11 gap-10'>
            <div className='col-span-6'>
               <h1 className='mb-8 text-28 font-semibold'>Order Details</h1>
               <OrderDetail products={cartProducts} />
            </div>
            <div className='col-span-5 p-5'>
               <h1 className='mb-5 text-28 font-semibold'>Order Summary</h1>
               <div className='w-full max-w-[430px] text-15 text-[#5D6B82]'>
                  <div className='flex-center-between pb-4'>
                     <span>{`Items (${numberOfItems}): `}</span>
                     <span>
                        <span>$ </span>
                        {cartTotal.toFixed(2)}
                     </span>
                  </div>
                  <div className='flex-center-between pb-4'>
                     <span>Shipment Cost: </span>
                     <span>$ {SHIPMENT_COST.toFixed(2)}</span>
                  </div>
                  <div className='flex-center-between pb-4'>
                     <span>Tax Collected: </span>
                     <span>$ {TAX_COLLECTED.toFixed(2)}</span>
                  </div>
                  <hr className='mx-auto mb-8 mt-3 block w-[380px]' />
                  <div className='flex-center-between pb-4 font-semibold'>
                     <span>Order total: </span>
                     <span>$ {orderTotal.toFixed(2)}</span>
                  </div>
                  <div className='mt-5 grid place-items-center'>
                     <button
                        type='submit'
                        className='rounded-lg border-2 border-orange-primary bg-orange-primary px-[82px] py-5 text-xl font-semibold text-white duration-150 ease-out hover:bg-white hover:text-orange-primary'
                     >
                        Confirm order
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </form>
   )
}

export default PaymentForm
