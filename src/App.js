import React from 'react';
import './App.css';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Product from './components/Product'
import Nav from './components/Nav'
import Contact from './components/Contact'
import Cart from './components/Cart.js'
import Buy from './components/Buy.js'



function App() {

 
  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav />
        <Routes>
            <Route path='*' exact element={<Home/>} />
            <Route path='/Product' element={<Product />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Buy/:id' element={<Buy />} />
        </Routes>
     
     </BrowserRouter>
     
    </div>
  );
}

export default App;
