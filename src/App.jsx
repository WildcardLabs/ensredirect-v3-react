import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/assets/css/popups.css'
import Landing from "./components/pages/Landing"
import ENSRedirect from './components/pages/ENSRedirect'
import SuccessPage from './components/pages/SuccessPage'
import PublishPage from './components/pages/PublishPage'
import ProfilePublished from './components/pages/ProfilePublished'
import PersonalizePage1 from './components/pages/PersonalizePage1'
import PersonalizePage2 from './components/pages/PersonalizePage2'
function App() {

  return (
    <BrowserRouter>
       <div className="container">
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/ensRedirect" element={<ENSRedirect/>}/>
          <Route exact path="/success" element={<SuccessPage/>}/>
          <Route exact path="/publish" element={<PublishPage/>}/>
          <Route exact path="/profilepublished" element={<ProfilePublished/>}/>
          <Route exact path="/personalize" element={<PersonalizePage1/>}/>
          <Route exact path="/personalize/:ens" element={<PersonalizePage2/>}/>
        </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
