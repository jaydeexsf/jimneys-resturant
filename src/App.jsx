import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Menu from './pages/Menu';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Order from './pages/Order';

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Menu from './pages/Menu';


// function App() {
//   return (
//    <> 
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <div className="get">What</div>
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
//    </> 
//   );
// }

// function App() {

//   return ( 
//     <>
//       <div>
//         <Home />
//       </div>
//     </>  
//   )

// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/>
          <Route index element={<Home />} />
          <Route path='menu' element={<Menu />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="order" element={<Order />} />
          <Route path="*" element={<NoPage />} /> */}
        <Route />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;