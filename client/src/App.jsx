import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const isUserPath= useLocation().pathname.includes('owner');

  return (
    <>
      { !isUserPath && <Navbar /> }
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      {!isUserPath && <Footer />}
    </>
  )
}

export default App
