import React, { createContext } from 'react'
import ProductCard from './pages/ProductCard'
import Header from './components/Header'
import CartProvider from './components/CartProvider'
import { Route, Routes } from 'react-router-dom'
import GithubSearch from './pages/GithubSearch'


// import GithubSearch from './components/GithubSearch'




export default function App() {

  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path='/' element={<GithubSearch />} />
        <Route path="/product" element={<ProductCard />}></Route>
      </Routes>


    </CartProvider>
  )
}
