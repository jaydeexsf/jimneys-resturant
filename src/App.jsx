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
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
         <div>
         <div className='bg-red-700 w-[100%] h-[2vh]'></div>
          <Header className="bg-red-700 z-20"/>
          {/* <Home /> */}
          <main className=''>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/' element={<Home />}/>
              <Route path="/menu" element={<Menu />} />
              {/* <Route path='/about' element={<About />}/> */}
              <Route path='/order' element={<Order />}/>
              <Route path='/location' element={<Location />} />
              <Route path='/login' element={<Login />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path="/add-product" element={
                <ProtectedRoute>
                  <AddProduct />
                </ProtectedRoute>
              }
            />
            </Routes>
          </main>
          <Footer />
        </div>
    </Router>
  )
}

export default App;
 