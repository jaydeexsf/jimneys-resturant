import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
// import Footer from './components/Footer';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Location from './pages/Location';
// import { Filter } from './components/Filter';
import './App.css';

function App() {
  return (
    <Router>
         <div>
         <div className='bg-red-700 w-[100%] h-[2vh]'></div>
          <Header className="absolute z-20 right-0"/>
          {/* <Home /> */}
          <main>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path="/menu" element={<Menu />} />
              {/* <Route path='/about' element={<About />}/> */}
              <Route path='/order' element={<Order />}/>
              <Route path='/location' element={<Location />} />
            </Routes>
          </main>
        </div>
    </Router>
  )
}

export default App;
 