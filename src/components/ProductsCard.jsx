import React from 'react'

const ProductsCard = (props) => {
  return (
    <div>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <p>{desc}</p>
        <div>
            <sup>{props.sign}</sup><span>{props.price}</span><sub>{props.cad}</sub>
        </div>
        <p></p>
        <p></p>
        <button className='w-[3rem] h-[auto] p-[2rem] m-[auto] bg-[#4e4c4c]]'>Buy now</button>
    </div>
  )
}

export default ProductsCard