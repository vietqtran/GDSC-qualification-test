import { Fragment, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { CartItem } from "../../models/cartItem"
import Input from "./Input"
import InvoiceCheck from "../icons/InvoiceCheck"
import { Link } from "react-router-dom"
import Modal from "../Modal"
import OrderDetail from "../OrderDetail"
import { PaymentFormModel } from "../../models/paymentForm"
import PaymentMethods from "./PaymentMethods"
import { RootState } from "../../redux/reducers"
import { emptyCart } from "../../redux/actions/cartAction"
import moment from "moment"

const SHIPMENT_COST = 6.5
const TAX_COLLECTED = 0.8

const PaymentForm = () => {
   const dispatch = useDispatch()
   const cartProducts = useSelector((state: RootState) => state.cart)
   const [showInvoice, setShowInvoice] = useState(false)

   const [formData, setFormData] = useState<PaymentFormModel>({
      firstName: "",
      lastName: "",
      phone: null,
      address: "",
      cardName: "",
      cardNumber: null,
      expDate: "",
      cvv: null,
      numberOfItems: null,
      orderTotal: "",
   })

   const lastCartTotal = useRef(0)

   useEffect(() => {
      if (cartProducts.length > 0) {
         const total = cartProducts.reduce(
            (init, cartItem) =>
               cartItem.product.price * cartItem.quantity + init,
            0
         )
         lastCartTotal.current = total
         const data: PaymentFormModel = {
            ...formData,
            orderTotal: (total + TAX_COLLECTED + SHIPMENT_COST).toFixed(2) + "",
            numberOfItems: cartProducts.length,
         }
         setFormData(data)
      }
   }, [cartProducts])

   const handleSubmitForm = async () => {
      try {
         const response = await fetch(
            process.env.REACT_APP_DINOMERCH_PAYMENT_POST_API as string,
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
         console.log(response)
         console.log(formData)
         setShowInvoice(true)
         dispatch(emptyCart())
      } catch (error) {}
   }

   const handleInputChange = (name: string, value: string) => {
      setFormData((prevFormData) => ({
         ...prevFormData,
         [name]: value,
      }))
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
                     <p>$ {lastCartTotal.current.toFixed(2)}</p>
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
                        <p>${formData.orderTotal}</p>
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
            <div className='mb-14 grid w-full grid-cols-1 gap-10 md:grid-cols-11'>
               <div className='col-span-1 md:col-span-6'>
                  <h1 className='mb-8 text-xl font-semibold md:text-28'>
                     Shipping Address
                  </h1>
                  <div className='grid w-full grid-cols-2 gap-4'>
                     <div className='col-span-1'>
                        <Input
                           handleInputChange={handleInputChange}
                           name={"firstName"}
                           type='text'
                           value={formData.firstName}
                           label='First Name'
                        />
                     </div>
                     <div className='col-span-1'>
                        <Input
                           handleInputChange={handleInputChange}
                           name={"lastName"}
                           type='text'
                           value={formData.lastName}
                           label='Last Name'
                        />
                     </div>
                  </div>
                  <Input
                     handleInputChange={handleInputChange}
                     name={"phone"}
                     type='number'
                     value={formData.phone ?? ""}
                     label='Phone Number'
                  />
                  <Input
                     handleInputChange={handleInputChange}
                     name={"address"}
                     type='text'
                     value={formData.address}
                     label='Street Address'
                  />
               </div>
               <div className='col-span-1 md:col-span-5'>
                  <h1 className='mb-5 text-xl font-semibold md:text-28'>
                     Payment Details
                  </h1>
                  <div className='mb-5'>
                     <PaymentMethods />
                  </div>
                  <Input
                     handleInputChange={handleInputChange}
                     name={"cardName"}
                     type='text'
                     value={formData.cardName}
                     label='Cardholder Name'
                  />
                  <Input
                     handleInputChange={handleInputChange}
                     name={"cardNumber"}
                     type='number'
                     value={formData.cardNumber ?? ""}
                     label='Cardholder Number'
                  />
                  <div className='grid grid-cols-2 gap-4'>
                     <div className='col-span-1'>
                        <Input
                           handleInputChange={handleInputChange}
                           name={"expDate"}
                           type='text'
                           value={formData.expDate}
                           label='Expiration Date'
                        />
                     </div>
                     <div className='col-span-1'>
                        <Input
                           handleInputChange={handleInputChange}
                           name={"cvv"}
                           type='number'
                           value={formData.cvv ?? ""}
                           label='CVV'
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className='grid w-full grid-cols-1 gap-10 md:grid-cols-11'>
               <div className='col-span-1 md:col-span-6'>
                  {cartProducts.length > 0 && (
                     <>
                        <h1 className='mb-8 text-xl font-semibold md:text-28'>
                           Order Details
                        </h1>
                        <OrderDetail products={cartProducts} />
                     </>
                  )}
               </div>
               <div className='col-span-1 p-5 md:col-span-5'>
                  <h1 className='mb-5 text-xl font-semibold md:text-28'>
                     Order Summary
                  </h1>
                  <div className='w-full max-w-[430px] text-15 text-[#5D6B82]'>
                     <div className='flex-center-between pb-4'>
                        <span>{`Items (${formData.numberOfItems}): `}</span>
                        <span>
                           <span>$ </span>
                           {lastCartTotal.current.toFixed(2)}
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
                        <span>$ {formData.orderTotal}</span>
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
