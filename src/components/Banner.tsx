import DownArrow from "./icons/DownArrow"
import GiantDino from "./icons/GiantDino"

const Banner = () => {
   return (
      <div className='flex-center-between z-0 mt-14 w-full flex-col rounded-[30px] bg-black p-10 text-white md:flex-row'>
         <div className='order-2 flex flex-1 flex-col md:order-1'>
            <h1 className='mt-5 text-28 font-bold md:mt-0 md:text-32 md:leading-[65px] lg:text-54'>
               Shop the Look: dinomerch - Define Your Style!
            </h1>
            <h2 className='w-50 pb-8 pt-3 text-17 leading-6 md:text-32 md:leading-[39px]'>
               Elevate Your Wardrobe with <br /> Exclusive merch
            </h2>
            <a
               href='#products'
               className='flex-center w-fit rounded-md bg-orange-primary px-6 py-4 text-13 font-semibold'
            >
               <span className='mr-3'>Scroll down for more</span> <DownArrow />
            </a>
         </div>
         <div className='order-1 md:order-2'>
            <GiantDino />
         </div>
      </div>
   )
}

export default Banner
