import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import axios from 'axios';
import { addOffer } from '../../features/newOffers';
import { useSelector } from "react-redux";

export default function MyOffers({options, titl, folder}) {
    var [s,ss]=useState(false);
    const dispatch = useDispatch();
    
    const currentUser = useSelector((state)=>state.currentUser.user);

    const [inputs, setInputs] = useState({category:folder,ownerId:currentUser._id});
    const [passw, setPassw] = useState("");
    
  const handleChange = (event) => {
    const name = event.target.name;
    const value = String(event.target.value);
    setInputs(values => ({...values, [name]: value}))
    // console.log(inputs);
  }

  const addCategory = {target:{name: 'category', value:folder}}
  const addOwnerId = {target:{name: 'ownerId', value:currentUser._id}}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs,'<inputs are end here>',inputs["name"]);
    // if(inputs["password"]===req.password){
      handleChange(addCategory);
      handleChange(addOwnerId);
      // dispatch(addOffer(inputs));
      console.log(inputs);
      axios.post(`/product/add/`, inputs)
      .then(res=>{console.log('succsess', res);
      setInputs({});})
      .catch((err)=>{console.log('error : ',err)});
        
  
  }

  var ops=options.map((op)=>
  {
      return(
<option value={op}>{op}</option>
      )
  })

  return (
    <>
<button onClick={()=>{ss(!s)}} className='btn btn-primary mx-auto' 
style={{maxHeight: "10rem", minWidth: "80%",minHeight: "3rem", boxShadow: "0 5px 5px rgba(0,0,0,0.5)"}}>
Create new offer
            </button>
            {s &&  <div className='mt-3 mx-auto border border-dark p-3' 
            style={{boxShadow: "0 5px 5px rgba(0,0,0,0.5)", minWidth: "80%", maxWidth: "80%"}}>
<div className="h5 text-center" >Enter following details of new offer</div>

<form onSubmit={handleSubmit}>
  <div className="form-group mt-3">
    <label htmlFor="nameId">Choose {titl}</label>
    <select id="nameId" className="form-select" aria-label="Default select example" 
    value={inputs["name"]} 
    onChange={handleChange}
    defaultValue={inputs["name"]}
    name='name'
        >
            {ops}</select>
    </div>

    <div className="form-group mt-3">
    <label for="varietyId">Enter variety of product</label>
    <input type="text" className="form-control" id="varietyId" placeholder="Variety"
    value={inputs["variety"]} 
    onChange={handleChange}
    name="variety" />
  </div>

  <div className="form-group mt-3">
    <label for="quantityId">Enter quantity of product(in kilograms)</label>
    <input type="text" className="form-control" id="quantityId" placeholder="Quantity(in Kg)"
    value={inputs["quantity"]} 
    onChange={handleChange}
    name="quantity" />
  </div>

  <div className="form-group mt-3">
    <label for="priceId">Enter price of product(in rupees per kilograms)</label>
    <input type="text" className="form-control" id="priceId" placeholder="Price(Rs./Kg)"
    value={inputs["price"]} 
    onChange={handleChange}
    name="price" />
  </div>

  <div className="form-group mt-3">
    <label htmlFor="passwordId">Enter Your Password</label>
    <input type="password" className="form-control" id="passwordId" placeholder="Password"
    value={passw} 
    onChange={(event)=>{setPassw(event.target.value)}}
    name="password" />
  </div>
  <div className="form-group mt-3">
    <label htmlFor="imageId">Upload image of product </label>
    <input type="file" className="form-control-file" id="imageId"/>
  </div>
  <button type="submit" className="btn btn-primary mt-3">Submit</button>
</form>
</div> }

</>
  );
}