import Home from './Components/Home'
import Detail from './Components/Detail'
import Notfound from './Components/NotFound'
import { createBrowserHistory } from 'history'
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";

const products = [
  {number:1, id: 1, title: "Queen Panel Bed", price: '80.99€', src: "/DATA/IMAGES/product-1.jpeg", desc:"If a single piece of furniture has the ability to define the style of a personal living space, that piece would be the sofa. Available in a range of styles -- with a variety of functions -- a sofa can be functional or whimsical, period or contemporary, single or sectional. In each instance the sofa, as a signature object, defines the space in which it sits." },
  {number:1, id: 2, title: "King Panel Bed", price: '95.99€', src: "/DATA/IMAGES/product-2.jpeg", desc:"If a single piece of furniture has the ability to define the style of a personal living space, that piece would be the sofa. Available in a range of styles -- with a variety of functions -- a sofa can be functional or whimsical, period or contemporary, single or sectional. In each instance the sofa, as a signature object, defines the space in which it sits."  },
  {number:1, id: 3, title: "Single Panel Bed", price: '40.99€', src: "/DATA/IMAGES/product-3.jpeg", desc:"If a single piece of furniture has the ability to define the style of a personal living space, that piece would be the sofa. Available in a range of styles -- with a variety of functions -- a sofa can be functional or whimsical, period or contemporary, single or sectional. In each instance the sofa, as a signature object, defines the space in which it sits."  },
  {number:1, id: 4, title: "Twin Panel Bed", price: '75.99€', src: "/DATA/IMAGES/product-4.jpeg", desc:"If a single piece of furniture has the ability to define the style of a personal living space, that piece would be the sofa. Available in a range of styles -- with a variety of functions -- a sofa can be functional or whimsical, period or contemporary, single or sectional. In each instance the sofa, as a signature object, defines the space in which it sits."  },
  {number:1, id: 5, title: "Fridge", price: '88.99€', src: "/DATA/IMAGES/product-5.jpeg", desc:"If a single piece of furniture has the ability to define the style of a personal living space, that piece would be the sofa. Available in a range of styles -- with a variety of functions -- a sofa can be functional or whimsical, period or contemporary, single or sectional. In each instance the sofa, as a signature object, defines the space in which it sits."  },
  {number:1, id: 6, title: "Dresser", price: '32.99€', src: "/DATA/IMAGES/product-6.jpeg", desc:"If a single piece of furniture has the ability to define the style of a personal living space, that piece would be the sofa. Available in a range of styles -- with a variety of functions -- a sofa can be functional or whimsical, period or contemporary, single or sectional. In each instance the sofa, as a signature object, defines the space in which it sits."  },
  {number:1, id: 7, title: "Couch", price: '45.99€', src: "/DATA/IMAGES/product-7.jpeg", desc:"If a single piece of furniture has the ability to define the style of a personal living space, that piece would be the sofa. Available in a range of styles -- with a variety of functions -- a sofa can be functional or whimsical, period or contemporary, single or sectional. In each instance the sofa, as a signature object, defines the space in which it sits."  },
  {number:1, id: 8, title: "Table", price: '33.99€', src: "/DATA/IMAGES/product-8.jpeg", desc:"If a single piece of furniture has the ability to define the style of a personal living space, that piece would be the sofa. Available in a range of styles -- with a variety of functions -- a sofa can be functional or whimsical, period or contemporary, single or sectional. In each instance the sofa, as a signature object, defines the space in which it sits."  }
]


const history = createBrowserHistory()
export default function App() {
 
  return (
    <Router history={history}>
      <Switch>
        <Route path="/detail/:id">
          <Detail products={products} />
        </Route>
        <Route path="/" exact>
          <Home products={products} />
        </Route>
        <Route >
          <Notfound/>
        </Route>
      </Switch>
    </Router >
  )
}






