import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { NoMatch } from './components/NoMatch';
import { OrderSummary } from './components/OrderSummary';

import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} /> 
      <Route path='/order-summary' element={<OrderSummary />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
    </>
  );
}

export default App;
