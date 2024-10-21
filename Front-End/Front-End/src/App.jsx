import './App.css'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Carshopbar from './Components/Carshop'
import { useState } from 'react'

function App() {

  const [carshop, setCarshop] = useState(false)
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')

  const addCarShop = (product) => {
    setItems(prevItems => [...prevItems, product]);
    setCarshop(true);
  }

  const openCarshop = () => setCarshop(!carshop)
  return (
    <>
      <Navbar Carshop={openCarshop} handleSearch={setSearch} ItemsCount={items.length}/>
      <Products addCarShop={addCarShop} search={search}/>
      {carshop && <Carshopbar active={setCarshop} items={items} setItems={setItems}/>}
    </>
  )
}

export default App;
