import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Aboutus from './pages/Aboutus';
import Blog from './pages/Blog';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
const App = () => {
  return (
    <>
      <Router>
          <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />



        </Routes>
      </Router>
    </>
  )
}

export default App