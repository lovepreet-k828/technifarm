import React from 'react';
import Head from './components/header/header.js';
import SignUp from './components/authentication/signUp';
import Profile from './components/profile/profile.js';
import Details from './components/productList/details.js';
import Footer from './components/footer/footer.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import About from './components/about/about.js';
import Categories from './components/categories/categories.js';
import Owner from './components/owner/owner.js';
import Home from './components/home.js';

function App() {
  return (
    <>
      <Router>
        <div style={{minWidth:"200px"}}>
        <Head />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/vegetables' element={<Details />} />
          <Route path='/diary' element={<Details />} />
          <Route path='/grains' element={<Details />} />
          <Route path='/aboutUs' element={<About/>} />
          <Route path='/owner' element={<Owner/>} />
        </Routes>
      <Footer/>
      </div>
      </Router>
    </>
  );
}

export default App;
