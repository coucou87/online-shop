import Navigation from './Navigation'
import Header from './Header'
import Products from './Products'
import SideDrawer from './SideDrawer'
import { useState } from 'react'

export default function Home() {
  const products = [
    { number: 1, id: 1, title: "Queen Panel Bed", price: '80.99€', src: "DATA/IMAGES/product-1.jpeg" },
    { number: 1, id: 2, title: "King Panel Bed", price: '95.99€', src: "DATA/IMAGES/product-2.jpeg" },
    { number: 1, id: 3, title: "Single Panel Bed", price: '40.99€', src: "DATA/IMAGES/product-3.jpeg" },
    { number: 1, id: 4, title: "Twin Panel Bed", price: '75.99€', src: "DATA/IMAGES/product-4.jpeg" },
    { number: 1, id: 5, title: "Fridge", price: '88.99€', src: "DATA/IMAGES/product-5.jpeg" },
    { number: 1, id: 6, title: "Dresser", price: '32.99€', src: "DATA/IMAGES/product-6.jpeg" },
    { number: 1, id: 7, title: "Couch", price: '45.99€', src: "DATA/IMAGES/product-7.jpeg" },
    { number: 1, id: 8, title: "Table", price: '33.99€', src: "DATA/IMAGES/product-8.jpeg" }
  ]
  const [show, setShow] = useState(false)
  const [item, setItem] = useState([])

  function addHandlerClick(id) {
    const copyProducts = [...products]
    const findItem = copyProducts.filter(product => product.id === id)
    const copyItem = [...item]
    const moreSelect = item.find(it => it.id === id)

    function moreSelectItem() {
      const moreSelect = copyItem.find(item => item.id === id)
      moreSelect.number = moreSelect.number + 1
      setItem(copyItem)
    }
    moreSelect ? moreSelectItem() : copyItem.push(findItem[0]); setItem(copyItem)
  }
  function toggleShowHandler() {
    setShow(!show)
  }
  function handlerClose() {
    setShow(false)
  }
  function removeHandler(id) {
    const copyItem = [...item]
    const filteredItems = copyItem.filter(item => item.id !== id)
    setItem(filteredItems)
  }
  function totalPriceHandler() {
    const copyItem = [...item]
    let total = 0;
    copyItem.forEach(function (it) {
      total += (it.number * +it.price.split('€')[0]);
    });
    return total.toFixed(2);
  }
  function Inc(id) {
    const copyItem = [...item]
    const selectItem = copyItem.find(item => item.id === id)
    selectItem.number = selectItem.number + 1
    setItem(copyItem)
  }
  function Dec(id) {
    const copyItem = [...item]
    const selectItem = copyItem.find(item => item.id === id)
    selectItem.number = selectItem.number - 1
    setItem(copyItem)
  }

  return (
    <div>
      <Navigation
        toggleShow={toggleShowHandler}
      />
      {show &&
        <SideDrawer
          closeHandle={handlerClose}
          selectedItems={item}
          handleRemove={(id) => removeHandler(id)}
          totalPriceHandler={totalPriceHandler()}
          handleIncrease={(id) => Inc(id)}
          handleDecrease={(id) => Dec(id)}
        />
      }
      <Header />
      <Products
        products={products}
        addClickHandle={addHandlerClick}
      />
    </div>
  )
}
