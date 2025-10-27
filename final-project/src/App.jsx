import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom' //yha par bhul jata hun
import Home from './components/Home'
import Shop from './components/Shop'
import Blog from './components/Blog'
import About from './components/About'

import Careers from './components/Careers'
import Faqs from './components/Faqs'
import Contacts from './components/Contacts'
import Newsitems from './components/Newsitems'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='' element={<Home />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/careers' element={<Careers />}></Route>
          <Route path='/faqs' element={<Faqs />}></Route>
          <Route path='/contacts' element={< Contacts />}></Route>



        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      {/* <div className='row'>
        <div className='col-sm-3'>
          <Newsitems></Newsitems>
        </div>
      </div> */}
    </>
  )
}

export default App
