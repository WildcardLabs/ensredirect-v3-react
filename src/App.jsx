import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/assets/css/popups.css'
import Landing from "../src/components/pages/Landing"
function App() {

  return (
    <BrowserRouter>
       <div className="container">
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
        </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
