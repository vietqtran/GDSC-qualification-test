import MainLayout from "../components/layout/MainLayout"
import Modal from "../components/Modal"
import React from "react"

type Props = {}

const Home = (props: Props) => {
   return (
      <MainLayout>
         <div className='text-red-400'>
            <Modal />
         </div>
      </MainLayout>
   )
}

export default Home
