import React from 'react';
import './signUp.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { Country, State } from 'country-state-city';

export default function SignUp() {

  const [countryCode, setCCode] = useState('IN');

  const countries = Country.getAllCountries();
  var country = countries.map((count) => {
    return (
      <option value={count.isoCode}>{count.name}</option>
    )
  })

  const states = State.getStatesOfCountry(countryCode); console.log(states);
  var state = states.map((stat) => {
    return (
      <option value={stat.name}>{stat.name}</option>
    )
  })

  const experience = ['between [0 to 1]', 'between [1 to 5]', 'between [5 to 10]',
    'between [10 to 25]', 'between [25 to 50]', 'more than 50'];
  var expe = experience.map((op) => {
    return (
      <option value={op}>{op}</option>
    )
  })

  const [inputs, setInputs] = useState({ experience: experience[0], country: 'India', state: states[0].name });
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
    var maxLength = 50;
    const name = event.target.name;
    var value = event.target.value;
    if (name === 'mobileNo') { maxLength = 10; }
    else if (name === 'mobileCode') { maxLength = 3; }
    else if (name === 'experience') { maxLength = 2; }
    else maxLength = 50;
    if (value.length <= maxLength) {
      if (name === 'country') {
        setCCode(value);
        value = Country.getCountryByCode(countryCode);
      }
      setInputs(values => ({ ...values, [name]: value }))
      // console.log(value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (CPass !== inputs['password']) { alert('Confirm password is not matching!'); }
    else if (inputs['mobileCode'].length < 2) { alert('wrong mobile code!'); }
    else if (inputs['mobileNo'].length < 10) { alert('wrong mobile number!'); }
    else {
      console.log(inputs, '<inputs are end here>', inputs["name"]);
      axios.post('/user/add', inputs)
        .then(res => {
          console.log(res);
          setCPass('');
          setInputs({ experience: experience[0], country: countries[0], state: states[0] });
          alert('Account created successfully! now login to continue.')
        })
        .catch(err => {
          console.log('Error in Signup: ', err);
          alert('internall error occured try again!')
        });
    }
  }


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
              <select className="form-select" id="experience"
                name='experience'
                value={inputs['experience'] || ''}
                onChange={handleChange}
                required>{expe}
              </select>
            </div>

            <div className="row mt-3">
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCountry" className="form-label">Country</label>
              <select id="inputCountry" className="form-select"
                name='country'
                value={countryCode || ''}
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
                name='mobileCode'
                value={inputs['mobileCode'] || ''}
                onChange={handleChange} required />
            </div>

            <div className="col-md-8">
              <label htmlFor="inputMno" className="form-label">Mobile no.</label>
              <input type="number" className="form-control" placeholder="Enter your mobile number" id="inputMno"
                name='mobileNo'
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
                      I have read these <Link to="/aboutUs">terms and conditions</Link>.
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
