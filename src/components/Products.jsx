import React from 'react'
import ProductsCard from './ProductsCard'

const Products = () => {
  return (
    <div className='w-[100%] border h-[50rem] border-black mt-[3rem] p-[2rem]'>
    <h1 className='text-center text-[2.5rem] font-[600]'>Products</h1>
    <ProductsCard />
    </div>
  )
}

export default Products