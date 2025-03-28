import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Collection from './Pages/Collection';
import Bestsaler from './Pages/Bestsaler';
import Home from './Pages/Home';
import Bestproducts from './Pages/Bestproducts';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import ProductDetail from './Pages/ProductDetail';
import Ourpolicy from './components/Ourpolicy'; // Make sure to import
import Newslater from './components/Newslater'; // Make sure to import

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/bestsaler" element={<Bestsaler />} />
        <Route path="/best-products" element={<Bestproducts/>} /> {/* Changed to match Navbar */}
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
      </Routes>
      <Ourpolicy/>
      <Newslater/> 
    </>
  )
}

export default App;
