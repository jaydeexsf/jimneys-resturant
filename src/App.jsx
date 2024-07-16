import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
// import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Order from './pages/Order';
import Location from './pages/Location';

function App() {
  return (
    <Router>
        <div>
          <Header />
          {/* <Home /> */}
          <main>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path="/menu" element={<Menu />} />
              <Route path='/about' element={<About />}/>
              <Route path='/order' element={<Order />}/>
              <Route path='/location' element={<Location />} />
            </Routes>
          </main>
        </div>
    </Router>
  )
}

export default App;
 