import React, { useState } from 'react'
// import { truncateStrings } from '../utils'

const ProductsCard = (props) => {
//   const truncateStrings = (strings) => {
//     return(
//         strings.substring(0, 200) + "..."
//     )
// }
   const [fullstring, SetFullString] = useState(false)

  return (
    <div style={{width: "20rem", minHeight: "15rem",border: "1px solid red", margin: "1rem", padding: "1.5rem"}}>
        <img className='w-[10rem] h-[13rem] m-auto' src={props.image} alt="" />
        <p className='mt-[1.5rem] text-[1.3rem] font-[800] text-[red]'>{props.brands}</p>
        <p className='mb-[1.5rem] font-[500] text-[#4e4c4c]'>{props.category}</p>
        {/* <p>{fullstring === false ? truncateStrings(props.desc): props.desc}</p> */}
        <p>{props.desc}</p>
        <span className='flex my-[1.5rem] text-2xl font-[800]'>
            <p>{props.sign}</p><h1>{props.price}</h1><p>{props.cad}</p>
        </span>
        <button className='w-[5rem] h-[auto] p-[0.5rem] m-[auto] bg-[red] text-white rounded-md cursor-pointer'>Buy now</button>
    </div>
  )
}

export default ProductsCard