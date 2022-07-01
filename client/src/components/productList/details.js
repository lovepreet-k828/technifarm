import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./details.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
import MyOffers from "./myOffers";
import axios from "axios";
import Card from "./card";
export default function Details() {
  
  const currentUser = useSelector((state) => state.currentUser.user);

  const loc = useLocation();
  var titl = loc.pathname;
  titl = titl.substring(1);

  var vegetables = ['artichoke', 'arugula', 'asparagus', 'avocado', 'beet', 'broccoli', 'butternut',
    'cabbage', 'carrot', 'cauliflower', 'celery', 'cucumber', 'eggplant', 'garlic',
    'kale', 'lettuce', 'laddy finger', 'mushroom button', 'mushroom portobello',
    'mushroom Shiitake', 'onion', 'pepper', 'potato', 'pumpkin', 'radish', 'rhubarb',
    'spinach', 'sweet potato', 'tomato', 'zucchini'];

  var diary = ['ghee'];
  var grains = ['rice'];

  var options = [];
  var folder = titl;

  if (titl === 'vegetables') { options = vegetables; }
  else if (titl === 'diary') { options = diary; titl += " products"; }
  else if (titl === 'grains') { options = grains; titl = "cereals and " + titl; }

  options.join();
  options.sort();

  const [defaultList, setDL] = useState([]);
  const [offerList, setOL] = useState([]);

  const variety = { 'category': folder };
  axios.post(`/product/`, variety)
    .then(res => setDL(res.data))
    .catch((err) => { console.log('error: ', err) });

  axios.get(`/product/${currentUser._id}`)
    .then(res => setOL(res.data))
    .catch((err) => { console.log('error: ', err) });

  // useEffect(()=>{
  //   defaultList = go(defaultProducts);
  // }, [defaultProducts]);


  var mystyle = { width: "80%", borderRadius: '5px', boxShadow: "0 5px 5px rgba(0,0,0,0.5)", backgroundColor: 'rgb(255 251 244)' };

  return (
    <>
      <div className='mx-auto' style={mystyle}>
        <div className="h3 py-3 d-flex justify-content-center mx-auto mt-1 text-capitalize" style={mystyle}>{titl}</div>
        <div className="container p-3 d-flex flex-row flex-wrap">
          <Link to='/categories'>
            <button className="btn btn-primary mr-1" style={{ boxShadow: "0 5px 5px rgba(0,0,0,0.5)", minHeight: "3rem", minWidth: "15%" }}>Go back</button>
          </Link>

          <MyOffers options={options} titl={titl} folder={folder} />

          <div className="h5 py-3 d-flex justify-content-center mx-auto mt-3 text-capitalize"
            style={mystyle}>Your offers</div>

          {(offerList && offerList.map(product => <Card key={product['ownerId']} product={product} />))
            || <div>Empty : You have not offered anything yet!!</div>}

          <div style={{ width: "80%", minHeight: "40%" }}></div>
          <div className="h5 py-3 d-flex justify-content-center mx-auto mt-3 text-capitalize"
            style={mystyle}>Other's offers</div>
          {(defaultList && defaultList.map(product => <Card key={product._id} product={product} />))
            || <div>Empty : Currently not any offer available!!</div>}

        </div>
      </div>
    </>
  );
}