// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// css
import './assets/css/token.css'
import './assets/css/base.css'

// layout
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// pages
import Home from './pages/Home'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/subscription" element={<Subscription />} /> */}
        {/* <Route path="/our" element={<Our />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
