import React, { createContext } from 'react'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import CartProvider from './components/CartProvider'


// import GithubSearch from './components/GithubSearch'




export default function App() {
  return (
    <CartProvider>
      <Header />
      <div className='max-w-4xl mx-auto p-2'>
        {/* <GithubSearch /> */}
        <ProductCard />
      </div>
    </CartProvider>
  )
}
