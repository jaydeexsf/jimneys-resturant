import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
// import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
// import Contact from './pages/Contact';
// import Order from './pages/Order';

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/menu" element={<Menu />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/order" element={<Order />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

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
            </Routes>
          </main>
        </div>
    </Router>
  )
}

export default App;
 