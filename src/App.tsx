import { Route, Routes } from "react-router-dom"

import Checkout from "./views/Checkout"
import Home from "./views/Home"
import React from "react"

function App() {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/checkout' element={<Checkout />} />
      </Routes>
   )
}

export default App
