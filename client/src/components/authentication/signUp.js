import React from 'react';
import './signUp.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function SignUp() {

  const [inputs, setInputs] = useState({});
  //   {
  //     "name": "ttmklg1_0",
  //     "experience": "15",
  //     "country": "Bhutan",
  //     "state": "Himachal Pradesh",
  //     "cityVillage": "hsjfjks",
  //     "streetName": "4444",
  //     "password": "1122",
  //     "mobileCode": "1122",
  //     "mobileNo": "1122"
  // }
  
  const [CPass, setCPass] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
    console.log(typeof (name), name, typeof (value), value);
  }

    const handleSubmit = (event) => {
    event.preventDefault();

    if (CPass !== inputs['password']) { alert('Confirm password is not matching'); }
    else {
      // console.log(inputs, '<inputs are end here>', inputs["name"]);
      axios.post('/user/add', inputs)
        .then(res => {
          console.log(res);
          setCPass('');
          setInputs({});
          alert('Account created successfully! now login to continue.')
        })
        .catch(err => {
          console.log('Error in Signup: ', err);
          alert('internall error occured try again!')
      });
    }
  }

  const countries = ['India', 'Bhutan'];
  var country = countries.map((op) => {
    return (
      <option value={op}>{op}</option>
    )
  })

  const states = ['Punjab', 'Harianha', 'Himachal Pradesh', 'Kerala'];
  var state = states.map((op) => {
    return (
      <option value={op}>{op}</option>
    )
  })

  return (
    <>
      <div className="form-signup-heading h3 d-flex my-5 mx-auto">Enter following details to create your account</div>

      <form className="form-signup row g-3 d-flex my-5 mx-auto" style={{ boxShadow: "0 5px 5px rgba(0,0,0,0.5)" }}
        onSubmit={handleSubmit}>
        <div className="row">
          <div className="row mt-2 ustify-content-center">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter First name Here" id="name"
                name='name'
                value={inputs['name'] || ''}
                onChange={handleChange} required />
            </div>

            <div className="col-md-6">
              <label htmlFor="experience" className="form-label">Your Experience (in years)</label>
              <input type="text" className="form-control" placeholder="Enter Experience (in years)" id="experience"
                name='experience'
                value={inputs['experience'] || ''}
                onChange={handleChange} required />
            </div>

            <div className="row mt-3">
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCountry" className="form-label">Country</label>
              <select id="inputCountry" className="form-select"
                name='country'
                value={inputs["country"] || ''}
                onChange={handleChange}
                required>{country}
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select"
                name='state'
                value={inputs["state"] || ''}
                onChange={handleChange}
                required>{state}
              </select>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City / Village</label>
              <input type="text" className="form-control" placeholder="Enter city or village name"
                id="inputCity"
                name='cityVillage'
                value={inputs['cityVillage'] || ''}
                onChange={handleChange} required />
            </div>

            <div className="col-md-6">
              <label htmlFor="inputSNo" className="form-label">House No. and Street name</label>
              <input type="text" className="form-control" placeholder="Example:- 939, streetName"
                id="inputSNo"
                name='streetName'
                value={inputs['streetName'] || ''}
                onChange={handleChange} required />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label htmlFor="inputPass" className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter Password Here"
                id="inputPass"
                name='password'
                value={inputs['password'] || ''}
                onChange={handleChange} required />
            </div>

            <div className="col-md-6">
              <label htmlFor="inputCPass" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" placeholder="Enter Password Again Here"
                id="inputCPass"
                value={CPass}
                onChange={(e) => { setCPass(e.target.value) }} required />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-4">
              <label htmlFor="inputMCode" className="form-label">Mobile no. Code</label>
              <input type="number" className="form-control" placeholder="Enter your mobile number" id="inputMCode"
                name = 'mobileCode'
                value={inputs['mobileCode'] || ''}
                onChange={handleChange} required />
            </div>

            <div className="col-md-8">
              <label htmlFor="inputMno" className="form-label">Mobile no.</label>
              <input type="number" className="form-control" placeholder="Enter your mobile number" id="inputMno"
                name = 'mobileNo'
                value={inputs['mobileNo'] || ''}
                onChange={handleChange} required />
            </div>
          </div>

          <div className="leftSide row mt-3">
            <div className="col-10">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" required />
                <label className="form-check-label" htmlFor="gridCheck">
                  <strong>By checking this check box, I am agree that</strong>
                  <ul>
                    <li>
                      I have read these <a href="#">terms and conditions</a>.
                    </li>
                    <li>
                      All the information provided above is correct as per my knowledge.
                    </li>
                  </ul>
                </label>
              </div>
            </div>
          </div>

          <div className="leftSide d-flex mt-3 mx-auto justify-content-center">
            <button type="submit" className="btn btn-primary mb-3">Create my account</button>
          </div>
        </div>
      </form>
    </>
  );
}
