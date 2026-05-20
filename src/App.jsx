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
import Cart from './pages/Cart'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/subscription" element={<Subscription />} /> */}
        {/* <Route path="/our" element={<Our />} /> */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>



    /* --------------------------------------------------------------------------------------------------
      path > url 주소(소문자 관례)
      element > .jsx 컴포넌트 (대문자 필수)
    -------------------------------------------------------------------------------------------------- */
  )
}

export default App
