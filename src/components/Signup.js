import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";


const Signup = () => {
    const [credentials, setcredentials] = useState({name:"", email: "", Password: "",cPassword:"" });
  const navigate = useNavigate();
  //let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5002/api/auth/createuser`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          name : credentials.name,
        email: credentials.email,
        password: credentials.Password,
      }),
    });
    const json = response.json;
    console.log(json);
    if (json.success) {
      //save auth token and redirect
      localStorage.setItem("token", json.authtoken);
      
    } 
    // else {
    //   alert("Invalid credentials");
    // }
    navigate("/home");
  };
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
    
  };
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
  <label htmlFor="name" className="form-label">Name</label>
    <input type="string" className="form-control" id="name" name="name" value={credentials.name} onChange={onChange} aria-describedby="emailHelp"/>

    <label htmlFor="email" className="form-label my-3">Email address</label>
    <input type="email" className="form-control" id="email" name="email" onChange={onChange} value={credentials.email} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" id="Password" name="Password" onChange={onChange} value={credentials.Password} required={5}/>
  </div>
  <div className="mb-3">
    <label htmlFor="cPassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cPassword" name="cPassword" onChange={onChange} value={credentials.cPassword} required={5}/>
  </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup