import React from 'react'
import { Link } from "react-router-dom";


function Home({isLogin}) {
  return (<>
    <div className=' mx-auto p-3 ' 
            style={{borderRadius:"10px", marginTop:"3%", boxShadow: "0 5px 5px rgba(0,0,0,0.5)", width:"80%"}}>
                
{isLogin?<><h2>See your profile</h2>
        <Link to="/SignUp" ><span type="submit" className="btn btn-primary mb-3 text-capitalize">
        profile
        </span></Link></>
        :
        <><h2>Do login to explore more opperturnities</h2>
        <Link to="/profile" ><span type="submit" className="btn btn-primary mb-3 text-capitalize">
        connect with us
        </span></Link></>
                      }
    </div>
    <div className='mx-auto p-3 ' 
            style={{borderRadius:"10px", marginTop:"3%", boxShadow: "0 5px 5px rgba(0,0,0,0.5)", width:"80%"}}>
                <h2>Explore our market section to connect with owner or customers</h2>
<Link to="/categories" ><span type="submit" className="btn btn-primary mb-3 text-capitalize">
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