import { Link } from "react-router-dom"
import MainLayout from "../components/layout/MainLayout"
import PaymentForm from "../components/PaymentForm"
import PrevArrow from "../components/icons/PrevArrow"

const Checkout = () => {
   return (
      <MainLayout>
         <div className='my-8'>
            <Link
               to={"/"}
               className='font-semibold text-2xl py-3 flex-center text-orange-primary'
            >
               <PrevArrow /> <span className='pl-4'>Back to homepage</span>
            </Link>
         </div>
         <PaymentForm />
      </MainLayout>
   )
}

export default Checkout
