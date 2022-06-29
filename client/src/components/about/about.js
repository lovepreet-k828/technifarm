import React from 'react'

function About() {
  return (
    <div className='mt-3 mx-auto p-3 my-5' 
            style={{borderRadius:"20px", boxShadow: "0 5px 5px rgba(0,0,0,0.5)", width:"80%"}}>

<div className="h2 text-center mx-auto my-2" style={{width:"80%", fontWeight: "bold"}} >
                  About us</div>
<div className="h5 text-center mx-auto my-5" style={{width:"80%", color:"green", fontWeight: "bold"}} >
    This web app is build for farmers to provide them a 
platform to connect with their customers directly and get the best value of their
products.</div>
<div className="h5 text-center mx-auto my-5" style={{width:"80%", color:"green", fontWeight: "bold"}} >
    This platform wants to connect farms who wants to sold their products in bulk
    and the big companies or organizations which want to buy the farm products in bulk.</div>

    <div className="h5 text-center mx-auto my-5" style={{width:"80%", color:"green", fontWeight: "bold"}} >
    Our team wishes this platform fullfill its user's above mentioned needs and add value in their
    bussiness, Best of luck</div>
    <div className="h3 text-right ml-auto mr-0" style={{ width:"80%", color:"skyblue", fontWeight: "bold"}} >
        team technifarm.
    </div>
</div>
  )
}

export default About