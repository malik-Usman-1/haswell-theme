import React from 'react'
import HomeScreen from './Screens/HomeScreen'
import Navbar from './Component/Navbar'
import AboutScreen from './Screens/AboutScreen'
import { Route, Routes } from 'react-router-dom'
import ContactScreen from './Screens/ContactScreen'

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<HomeScreen/>}/>
    <Route path='/about' element={<AboutScreen/>}/>
    <Route path='/contact' element={<ContactScreen/>}/>
   </Routes>
   
   </>
  )
}

export default App
