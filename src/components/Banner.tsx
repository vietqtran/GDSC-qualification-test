import DownArrow from "./icons/DownArrow"
import GiantDino from "./icons/GiantDino"
import { Link } from "react-router-dom"

const Banner = () => {
   return (
      <div className='flex-center-between z-0 mt-14 w-full rounded-[30px] bg-black p-10 text-white'>
         <div className='flex flex-1 flex-col'>
            <h1 className='text-54 font-bold leading-[65px]'>
               Shop the Look: dinomerch - Define Your Style!
            </h1>
            <h2 className='w-50 pb-8 pt-3 text-32 leading-[39px]'>
               Elevate Your Wardrobe with <br /> Exclusive merch
            </h2>
            <a
               href='#products'
               className='flex-center w-fit rounded-md bg-orange-primary px-6 py-4 text-13 font-semibold'
            >
               <span className='mr-3'>Scroll down for more</span> <DownArrow />
            </a>
         </div>
         <div>
            <GiantDino />
         </div>
      </div>
   )
}

export default Banner
