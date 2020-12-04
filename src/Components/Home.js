import Navigation from './Navigation'
import Header from './Header'
import Products from './Products'
import SideDrawer from './SideDrawer'
import { useState } from 'react'

export default function Home({ products }) {
  const [show, setShow] = useState(false)
  const [item, setItem] = useState([])

  function addHandlerClick(id) {
    const copyProducts = [...products]
    const findItem = copyProducts.filter(product => product.id === id)
    const copyItem = [...item]
    copyItem.push(findItem[0])
    setItem(copyItem)
  }
  function toggleShowHandler(){
    setShow(!show)
  }
  function handlerClose(){
    setShow(false)
  }
  return (
    <div>
      <Navigation  toggleShow={toggleShowHandler} />
       
      {show && <SideDrawer closeHandle={handlerClose} selectedItems={item}/> }
      
      <Header />
      <Products products={products} addClickHandle={addHandlerClick} />
    </div>

  )
}
