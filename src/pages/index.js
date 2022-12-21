import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import AddToCart from './AddToCart';
import Contact from './Contact';
import Home from './Home';
import Product from './Product';
import ProductEntry from './ProductEntry';
function Index() {
    return (
        <Router>
            <header>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/productentry">Product Entry</Link></li>
                </ul>
            </header>
            <section>
                <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/about' element={<About/>}></Route>
                        <Route path='/contact' element={<Contact/>}></Route>
                        <Route path='/product' element={<Product/>}></Route>
                        <Route path='/cart' element={<AddToCart/>}></Route>
                        <Route path='/cart/:proname' element={<AddToCart/>}></Route>
                        <Route path='/productentry' element={<ProductEntry/>}></Route>
                </Routes>
            </section>
            <footer>
                <h3>&copy; By Online Shopping App 2.0</h3>
            </footer>
        </Router>
    )
}

export default Index
