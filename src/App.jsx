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
import MediaHubLandingPage from './components/pages/MediaHubLandingPage'
import MediaHubLandingPage2 from './components/pages/MediaHubLandingPage2'
import AddSocials from './components/pages/AddSocials'
import ScrollToTop from './components/pages/ScrollToTop'
import PublishedPage from './components/pages/Profile'
function App() {

  return (
    <BrowserRouter>
       <div className="container">
        <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/ensRedirect" element={<ENSRedirect/>}/>
          {/* <Route exact path="/success" element={<SuccessPage/>}/> */}
          <Route exact path="/publish" element={<PublishPage/>}/>
          <Route exact path="/profilepublished" element={<ProfilePublished/>}/>
          <Route exact path="/personalize" element={<PersonalizePage1/>}/>
          <Route exact path="/personalize/:ens" element={<PersonalizePage2/>}/>
          <Route exact path="/customizeMedia" element={<MediaHubLandingPage/>}/>
          <Route exact path="/customizeMedia/:ens" element={<MediaHubLandingPage2/>}/>
          <Route exact path="/addsocials/:ens" element={<AddSocials/>}/>
          <Route exact path="/profile/:ens/*" element={<PublishedPage/>}/>
        </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
