import Banner from "../components/Banner"
import MainLayout from "../components/layout/MainLayout"
import ProductList from "../components/ProductList"

type Props = {}

const Home = (props: Props) => {
   return (
      <MainLayout>
         <Banner />
         <h1 className='py-10 text-center text-50 font-bold'>
            Chrome Dino Merch
         </h1>
         <ProductList />
      </MainLayout>
   )
}

export default Home
