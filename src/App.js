import Home from './Components/Home'
import React, { useState } from 'react'
import Details from './Components/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  const [products,setProducts] = useState([
    { number:1, id:1, title:"Queen Panel Bed", price: '80.99€', src:"DATA/IMAGES/product-1.jpeg"},
    { number:1, id:2, title:"King Panel Bed",price: '95.99€', src:"DATA/IMAGES/product-2.jpeg"},
    { number:1, id:3, title:"Single Panel Bed",price: '40.99€', src:"DATA/IMAGES/product-3.jpeg"},
    { number:1, id:4, title:"Twin Panel Bed",price: '75.99€', src:"DATA/IMAGES/product-4.jpeg"},
    { number:1, id:5, title:"Fridge",price: '88.99€', src:"DATA/IMAGES/product-5.jpeg"},
    { number:1, id:6, title:"Dresser",price: '32.99€', src:"DATA/IMAGES/product-6.jpeg"},
    { number:1, id:7, title:"Couch",price: '45.99€', src:"DATA/IMAGES/product-7.jpeg"},
    { number:1, id:8, title:"Table",price: '33.99€', src:"DATA/IMAGES/product-8.jpeg"}
  ])

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Details">
            <Details />
          </Route>
          <Route path="/">
            <Home products={products} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}





 
