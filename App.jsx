import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Gallery from './pages/Gallery/Gallery'
import Plan from './pages/plan/Plan'
import Trainner from './pages/Trainner/Tainner'
import NotFound from './pages/Not found/NotFound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='plans' element={<Plan/>}/>
          <Route path='trainers' element={<Trainner/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
