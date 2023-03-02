import { useEffect, useState } from 'react'
import './App.css'
import ProductsCard from './components/ProductsCard'

function App() {
  const url = "http://makeup-api.herokuapp.com/api/v1/products.json"
  const [makeUps, setMakeUps] = useState([])
  

  const makeupFunc = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMakeUps(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    makeupFunc()
  }, [])
  console.log(makeUps)

  return (
    <section className="App bg-[pink] w-[98.7vw] h-[auto] p-[3rem]">
      <h1 className='text-7xl font-[700] text-center text-[#4e4c4c]'>AFOOS MAKEUP</h1>
      <p className='text-center italic underline text-[1.3rem] mt-[.5rem]'>We give the best and Quality</p>
      <div className='w-[100%] border h-[50rem] border-black mt-[3rem] p-[2rem]'>
        <h1 className='text-center text-[2.5rem] font-[600]'>Products</h1>
     </div>
      
      {/* {makeUps.map((makeup) => (
        <ProductsCard
        key={makeup.key} 
        image={makeup.image_link} />,
        console.log(makeup)
      ))} */}
    </section>
  )
}

export default App
