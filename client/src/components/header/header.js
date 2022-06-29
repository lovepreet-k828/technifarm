import React, { useState } from 'react';
import './header.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MainNav from './mainNav';
import LoginNav from './loginNav';

function Head() {
  const [isLogin, setLogin] = useState(false);
  const user = useSelector((state) => state.currentUser.user);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav" style={{width:'100%'}}>
        <div className="container-fluid" id="mainContainer">
          <Link to="/" style={{textDecoration: "none"}}>
          <span className="h1 navbar-brand font-weight-bold">Technifarm</span>
          </Link>
          <button id="buttonMenu" className="navbar-toggler btn btn-primary font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            Main menu
          </button>
          <MainNav/>
          
{isLogin ? <Link to='/profile' style={{textDecoration: 'none'}}>
<span className="col-md-3 h4" style={{color:"black"}}>Welcome {user['name']}</span></Link> : <LoginNav setLogin={setLogin}/> }
        </div>
      </nav>
    </>
  );
}

export default Head;