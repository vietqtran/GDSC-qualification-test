import Banner from "../Banner"
import MainLayout from "../layout/MainLayout"
import ProductList from "../ProductList"

type Props = {}

const Home = (props: Props) => {
   return (
      <MainLayout>
         <Banner />
         <h1 className='py-10 text-center text-32 font-bold md:text-50'>
            Chrome Dino Merch
         </h1>
         <ProductList />
      </MainLayout>
   )
}

export default Home
