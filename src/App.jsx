import { useEffect, useState } from 'react'
import './App.css'
import Products from './components/Products'

function App() {
  const url = "http://makeup-api.herokuapp.com/api/v1/products.json"
  const [makeUp, setMakeUp] = useState()
  const makeupFunc = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMakeUp(data))
      .catch((err) => console.log(err))
  }
  console.log(makeUp)

  useEffect(() => {
    makeupFunc()
  }, [])

  return (
    <section className="App bg-[pink] w-[100vw] h-[auto] p-[3rem]">
      <h1 className='text-7xl font-[700] text-center text-[#4e4c4c]'>AFOOS MAKEUP</h1>
      <p className='text-center italic underline text-[1.3rem] mt-[.5rem]'>We give the best and Quality</p>
      <Products />
    </section>
  )
}

export default App
