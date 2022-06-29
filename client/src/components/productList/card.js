import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {getOwner} from '../../features/owners';
import "./details.css";
function Card({product}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = async (id)=> {
          try {
              const response = await axios.get(`/user/${id}`)
                dispatch(getOwner(response.data[0]));
                navigate('/owner');
          }
          catch {console.log("error")}
      }
      

  return (
    <div className="card m-auto my-3" style={{boxShadow: "0 5px 5px rgba(0,0,0,0.5)"}}>
<img className="card-img-top" src={process.env.PUBLIC_URL + `/images/${product['category']}/${product['name']}.jpg`}  alt=".."/>
<div >
<h5 className="card-title p-3 text-capitalize">{product.name}</h5>
<div className="card-text">
<ul>
  <li>
      Variety: {product['variety']}
  </li>
  <li>
      Quantity: {product['quantity']}
  </li>
  <li>
      MSP(per kg): {product['price']}
  </li>
  <li>
      Contact to owner: {product['ownerId']}
  </li>
</ul>
</div>
<div className="d-flex justify-content-center pb-1">
{/* <Link to='/owner'> */}
<button onClick={()=>handleClick(product['ownerId'])} className="btn btn-primary mb-3" >
Owner details</button>
{/* </Link> */}
</div>
</div>  
</div>
  )
}

export default Card