import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Topbar from './components/topbar/topbar'
import Home from './pages/home/home'
import Single from './pages/single/single'
import Write from './pages/write/write'


function App() {
  
  return (
    <> 
    <Topbar></Topbar>
   <Write></Write>
    </>
 
  )
}

export default App
