import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { OrderSummary } from './components/OrderSummary';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';

import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} /> 
      <Route path='/order-summary' element={<OrderSummary />} />
      <Route path='/products' element={<Products />} >
        <Route index element={<FeaturedProducts />} />

        <Route path='featured' element={<FeaturedProducts />} />
        <Route path='new' element={<NewProducts />} />
      </Route>
        <Route path='featured' element={<FeaturedProducts />} />
        <Route path='new' element={<NewProducts />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
    </>
  );
}

export default App;
