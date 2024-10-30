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
import Login from './pages/Admin/Login';
import Admin from './pages/Admin/Admin';
import Footer from './components/Footer';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <Router>
         <div>
         <div className='bg-red-700 w-[100%] h-[2vh]'></div>
          <Header className="bg-red-700 z-20"/>
          {/* <Home /> */}
          <main className=''>
            <Routes>
              <Route path='/jimneys-resturant/' element={<Home />}/>
              <Route path='/' element={<Home />}/>
              <Route path="/jimneys-resturant/menu" element={<Menu />} />
              {/* <Route path='/about' element={<About />}/> */}
              <Route path='/jimneys-resturant/order' element={<Order />}/>
              <Route path='/jimneys-resturant/location' element={<Location />} />
              <Route path='/jimneys-resturant/login' element={<Login />} />
              <Route path='/jimneys-resturant/admin' element={<Admin />} />
              <Route path='/jimneys-resturant/add-product' element={<AddProduct />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </Router>
  )
}

export default App;
 