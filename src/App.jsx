import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Topbar from './components/topbar/topbar'
import Home from './pages/home/home'


function App() {
  
  return (
    <> 
    <Topbar></Topbar>
    <Home></Home>
    </>
 
  )
}

export default App
