import React from 'react'

const ProductsCard = (props) => {
  return (
    <div style={{width: "20rem", minHeight: "15rem",border: "1px solid red", margin: "1rem", padding: "1.5rem"}}>
        <img className='w-[10rem] h-[13rem] m-auto' src={props.image} alt="" />
        <p className='mt-[1.5rem] text-[1.3rem] font-[500]'>{props.brands}</p>
        <p className='mb-[1.5rem] font-[500]'>{props.category}</p>
        <p>{props.desc}</p>
        <span className='flex my-[1.5rem]'>
            <p>{props.sign}</p><h1>{props.price}</h1><p>{props.cad}</p>
        </span>
        <button className='w-[5rem] h-[auto] p-[0.5rem] m-[auto] bg-[red] text-white rounded-md cursor-pointer'>Buy now</button>
    </div>
  )
}

export default ProductsCard