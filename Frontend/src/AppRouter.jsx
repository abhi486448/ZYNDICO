import { Route, Routes} from "react-router"

import React from 'react'
import Home from "./pages/Home"
import Shirt from "./pages/Shirts"
import Tshirt from "./pages/Tshirts"
import Hoodies from "./pages/Hoodies"
import Sneaker from "./pages/Sneaker"
import Shoes from "./pages/Shoes"
import Highend from "./pages/Highend"
import Loginuser from "./Features/Auth/pages/Login"
import Registeruser from "./Features/Auth/pages/Register"
import ForgotPassword from "./Authentication/froget"
import ProductDetails from "./pages/ProductDetails"
import LandingPage from "./LandingPage"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shirts" element={<Shirt />} />
        <Route path="/tshirts" element={<Tshirt />} />
        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/sneakers" element={<Sneaker />} /> 
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/highend" element={<Highend />} />
        <Route path="/Login" element={<Loginuser />}/>
        <Route path="/Register" element={<Registeruser />}/>
        <Route path="/ForgetPass" element={<ForgotPassword />}/>
        <Route path="/ProductPage/:id" element={<ProductDetails />}/>
      </Routes>
  )
}

export default AppRouter