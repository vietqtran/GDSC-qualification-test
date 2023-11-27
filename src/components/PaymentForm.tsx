import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import Input from "./Input"
import InvoiceCheck from "./icons/InvoiceCheck"
import { Link } from "react-router-dom"
import Modal from "./Modal"
import OrderDetail from "./OrderDetail"
import { PaymentFormModel } from "../models/paymentForm"
import PaymentMethods from "./PaymentMethods"
import { RootState } from "../redux/reducers"
import { emptyCart } from "../redux/actions/cartAction"
import moment from "moment"

const SHIPMENT_COST = 6.5
const TAX_COLLECTED = 0.8

const PaymentForm = () => {
   const dispatch = useDispatch()
   const cartProducts = useSelector((state: RootState) => state.cart)

   const [orderProducts, setOrderProducts] = useState(cartProducts)
   const [showInvoice, setShowInvoice] = useState(false)

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
   const orderTotal = cartTotal + TAX_COLLECTED + SHIPMENT_COST

   const handleSubmitForm = async () => {
      const formData: PaymentFormModel = {
         address: address,
         cardName: cardName,
         cardNumber: cardNumber ?? 0,
         cvv: cvv ?? 0,
         expDate: expDate,
         firstName: firstName,
         lastName: lastName,
         numberOfItems: numberOfItems,
         orderTotal: orderTotal + "",
         phone: phone ?? 0,
      }
      try {
         const response = await fetch(
            "https://testapi.io/api/dinomerch/resource/payment",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(formData),
            }
         )
         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
         }
         setShowInvoice(true)
         dispatch(emptyCart())
      } catch (error) {}
   }
   return (
      <Fragment>
         {showInvoice && (
            <Modal>
               <div
                  onClick={(e) => {
                     e.stopPropagation()
                  }}
                  className='flex h-[664px] w-full max-w-[486px] flex-col rounded-[10px] bg-white p-[35px] text-[#5D6B82]'
               >
                  <div className='grid place-items-center pb-3'>
                     <InvoiceCheck />
                  </div>
                  <div className='border-b-2 border-b-[#F5F6F7] pb-5 text-center'>
                     <p className='block pb-1 text-15 font-bold'>
                        Thanks for your order!
                     </p>
                     <p className='text-11'>
                        The order confirmation has been sent to your @email
                     </p>
                  </div>
                  <div className='w-full border-b-2 border-b-[#F5F6F7] py-4'>
                     <p className='text-13 font-bold leading-5'>
                        Transaction Date
                     </p>
                     <p className='text-11 font-semibold leading-4 text-[#98A1B0]'>
                        {moment().format("dddd, MMM DD, YYYY")}
                     </p>
                  </div>
                  <div className='w-full border-b-2 border-b-[#F5F6F7] py-4'>
                     <p className='text-13 font-bold leading-5'>
                        Payment Method
                     </p>
                     <p className='text-11 font-semibold leading-4 text-[#98A1B0]'>
                        Mastercard
                     </p>
                  </div>
                  <div className='flex-center-between w-full border-b-2 border-b-[#F5F6F7] pb-6 pt-8 text-15 font-semibold leading-4 text-[#5D6B82]'>
                     <p>Sub total:</p>
                     <p>$ {cartTotal.toFixed(2)}</p>
                  </div>
                  <div className='w-full border-b-2 border-b-[#F5F6F7] pb-10 pt-4 text-15 text-[#5D6B82]'>
                     <div className='flex-center-between pb-4'>
                        <p>Tax collected:</p>
                        <p>${TAX_COLLECTED}</p>
                     </div>
                     <div className='flex-center-between pb-4'>
                        <p>Shipment cost:</p>
                        <p>${SHIPMENT_COST}</p>
                     </div>
                  </div>
                  <div className='pt-3'>
                     <div className='flex-center-between pb-4 text-15 font-semibold'>
                        <p>Grand total:</p>
                        <p>${orderTotal}</p>
                     </div>
                  </div>
                  <div className='w-full p-3'>
                     <Link
                        to={"/"}
                        className='block w-full rounded-[8px] bg-orange-primary py-3 text-center text-15 text-white'
                     >
                        Continue Shopping
                     </Link>
                  </div>
               </div>
            </Modal>
         )}
         <form
            onSubmit={(e) => {
               e.preventDefault()
               handleSubmitForm()
            }}
            id='payment_form'
            method='POST'
         >
            <div className='mb-14 grid w-full grid-cols-11 gap-10'>
               <div className='col-span-6'>
                  <h1 className='mb-8 text-28 font-semibold'>
                     Shipping Address
                  </h1>
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
                  <h1 className='mb-5 text-28 font-semibold'>
                     Payment Details
                  </h1>
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
                  <OrderDetail products={orderProducts} />
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
      </Fragment>
   )
}

export default PaymentForm
