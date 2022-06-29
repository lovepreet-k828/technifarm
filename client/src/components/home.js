import React from 'react'
import { Link } from "react-router-dom";


function Home({isLogin}) {
  return (<>
    <div className=' mx-auto p-3 ' 
            style={{borderRadius:"10px", marginTop:"3%", boxShadow: "0 5px 5px rgba(0,0,0,0.5)", width:"80%"}}>
                <h2>connect with us</h2>
{isLogin?<Link to="/profile" ><span type="submit" className="btn btn-primary mb-3 text-capitalize">
                        See your profile 
                      </span></Link>:<Link to="/SignUp" ><span type="submit" className="btn btn-primary mb-3 text-capitalize">
                        Do login to explore more opperturnities  
                      </span></Link>}
    </div>
    <div className='mx-auto p-3 ' 
            style={{borderRadius:"10px", marginTop:"3%", boxShadow: "0 5px 5px rgba(0,0,0,0.5)", width:"80%"}}>
                <h2>Explore our market section to connect with owner or customers</h2>
<Link to="/profile" ><span type="submit" className="btn btn-primary mb-3 text-capitalize">
                        visit markit 
                      </span></Link>
                      </div>
<div className=' mx-auto p-3 ' 
            style={{borderRadius:"10px", marginTop:"3%", boxShadow: "0 5px 5px rgba(0,0,0,0.5)", width:"80%"}}>
                <h2>Want to know more about us</h2>
<Link to="/aboutUs" ><span type="submit" className="btn btn-primary mb-3 text-capitalize">
                        About us
                      </span></Link>
                      </div>

</>
  )
}

export default Home