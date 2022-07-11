import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import { Checkout } from "../pages/Checkout"
import { Homepage } from "../pages/Home"
import { ProductPage } from "../pages/Product"


// website page path 
export const CommonRoutes = () =>{
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="product" element={<ProductPage />}/>
        <Route path="checkout" element={<Checkout />}/>
      </Routes>
    </Fragment>
  )
}