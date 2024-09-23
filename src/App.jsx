import React from 'react'
import { createRoutesFromElements } from 'react-router'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Product from './components/pages/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCart from './components/product/ProductCart'
const App = () => {
  const routeDefinitions = createRoutesFromElements(
    <>

      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product-cart' element={<ProductCart />} />
      </Route>

    </>
  )
  const routes = createBrowserRouter(routeDefinitions)
  return (
    <RouterProvider router={routes} />
  )
}
export default App