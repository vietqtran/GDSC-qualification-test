import { Route, Routes } from "react-router-dom"
import { persistor, store } from "./redux/store"

import Checkout from "./components/views/Checkout"
import Home from "./components/views/Home"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"

function App() {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor} loading={null}>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/checkout' element={<Checkout />} />
            </Routes>
         </PersistGate>
      </Provider>
   )
}

export default App
