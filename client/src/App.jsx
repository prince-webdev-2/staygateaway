import { useState } from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'

function App() {
  const isUserPath= useLocation().pathname.includes('owner');

  return (
    <>
      { !isUserPath && <Navbar /> }
    </>
  )
}

export default App
