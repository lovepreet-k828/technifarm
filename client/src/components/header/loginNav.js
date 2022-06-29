import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './header.css';
import axios from 'axios';
import {signIn} from '../../features/user';
import {useDispatch} from 'react-redux';

function LoginNav({setLogin}) {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    // console.log(inputs);
  }

const handleSubmit = (event)=>{
  event.preventDefault();

        console.log(inputs);
        axios.post(`/user/`,inputs)
        .then((response)=>{
          // console.log('response',response);
          if(response.data[0]['password']===inputs['password']){
            setLogin(true);  
          dispatch(signIn(response.data[0]));
          }
          else {alert('wrong password!!')}
        })
        .catch(error=>{console.log('error',error)
      alert('Wrong mobile number')});
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light justify-content-end">
            <div className="container-fluid mx-auto" >
              <button id="buttonLogin" className="navbar-toggler nav-item btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navSup" aria-controls="navSup" aria-expanded="true" aria-label="Toggle navigation">
                Log in
              </button>
              <div className="collapse navbar-collapse" id="navSup">
                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-md-2">
                  <input type="number" className="form-control" placeholder="Code" 
                    name='mCode'
                    value={inputs['mCode'] || ''}
                    onChange={handleChange} required/>
                  </div>
                  <div className="col-md-3">
                  <input type="number" className="form-control" placeholder="Mobile No." 
                    name='mNo'
                    value={inputs['mNo'] || ''}
                    onChange={handleChange} required/>
                  </div>

                  <div className="col-md-3">
                  <input type="password" className="form-control" placeholder="Password" 
                    name='password'
                    value={inputs['password'] || ''}
                    onChange={handleChange} required/>
                  </div>
                  <div className="col-auto">
                    
                      <button type="submit" className="btn btn-primary mb-3 text-capitalize">
                        Confirm Identity
                      </button>
                  </div>
                  </form>
                  <div className="col-auto">
                    <Link to="/SignUp" >
                      <span type="submit" className="btn btn-primary mb-3 text-capitalize">
                        register
                      </span></Link>
                  </div>
              </div>
            </div>
          </nav>
  );
}

export default LoginNav