import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import PlaceOder from './pages/PlaceOrder/PlaceOder';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/shopping-cart' element={<Home/>} />
        <Route path='/shopping-cart/cart' element={<Cart/>} />
        <Route path='/shopping-cart/placeOder' element={<PlaceOder/>} />
      </Routes>
      
    </div>
  );
}

export default App;
