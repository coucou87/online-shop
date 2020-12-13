import Navigation from './Navigation'
import Header from './Header'
import Products from './Products'
import SideDrawer from './SideDrawer'
import { useState } from 'react'

export default function Home({products}) {
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
    return (total.toFixed(2)) + '€';
  }

  function increaseHandler(id) {
    const copyItem = [...item]
    const selectIndex = item.findIndex(item => item.id === id)
    copyItem[selectIndex] = {
      ...copyItem[selectIndex],
      number : copyItem[selectIndex].number + 1 
    }
    setItem(copyItem)
  }

  function decreaseHandler(id) {
    const copyItem = [...item]
    const selectIndex = item.findIndex(item => item.id === id)
   copyItem.splice(
    selectIndex,
     1,
     {
      ...copyItem[selectIndex],
      number : copyItem[selectIndex].number - 1 
     }
   )
   setItem(copyItem)
  }
  function clearHandler() {
    setItem([])
  }
 
  let totalStatus = 0
    item.forEach((it)=>{
      totalStatus += it.number
      return totalStatus
    })
    
  return (
    <div>
      <Navigation
        toggleShow = {toggleShowHandler}
        length = {totalStatus}
      />
      {show &&
        <SideDrawer
          closeHandle = {handlerClose}
          selectedItems = {item}
          handleRemove = {(id) => removeHandler(id)}
          totalPriceHandler={totalPriceHandler()}
          handleIncrease = {(id) => increaseHandler(id)}
          handleDecrease = {(id) => decreaseHandler(id)}
          handleClear = {clearHandler}
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
