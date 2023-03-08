import { useEffect, useState } from 'react'
import './App.css'
import ProductsCard from './components/ProductsCard'

function App() {
  const url = "https://makeup-api.herokuapp.com/api/v1/products.json"
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
  // console.log(makeUps)

  return (
    <section className="App bg-[pink] w-[98.7vw] min-h-[100vh] p-[3rem] overflow-x-hidden">
      <h1 className='text-7xl font-[700] text-center text-[#4e4c4c]'>AFOOS MAKEUP</h1>
      <p className='text-center italic underline text-[1.3rem] mt-[.5rem]'>We give the best and Quality</p>
      
      <div className='w-[100%] border h-[auto] border-black mt-[3rem] p-[2rem] text-center'>
        <h1 className=' text-[2.5rem] font-[600]'>Products</h1>
        
        {makeUps.length === 0 ? (
          "Loading..."
        ) : (
          <section style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem"}}>
            {makeUps.map((makeup) => (
            <ProductsCard
            key={makeup.id}
            image={makeup.api_featured_image}
            brands={makeup.brand}
            desc={makeup.description}
            sign={makeup.price_sign}
            price={makeup.price}
            cad={makeup.currency}
            category={makeup.category} />
          ))}
          </section>
        )}
      </div>
     
    </section>
  )
}

export default App
