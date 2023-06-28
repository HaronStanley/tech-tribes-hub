import React, {useState} from "react";

const Registerform = () => {
    const [values,setvalues] = useState({
         fullname:"",
         email:"",
         password:"",
    })
    const handleformsubmit = (event) => {
        event.preventDefault();
    }
  return ( 
  <div className="container">
     <div className="app-wrapper">

     <div>

     <h2 className="title">CREATE ACCOUNT</h2>

  </div>

  <form className="form-wrapper">
    <div className="name">
        <label className="label">Full Name:</label>
        <input className="input" type="text" autoComplete="on" name="fullname" value={values.fullname} />
    </div>
    <br />

    <div className="Email:">
        <label className="label">Email:</label>
        <input className="input" type="email" autoComplete="on" name="email" value={values.email} />
    </div>
    <br />
    <div className="Password">
        <label className="label">Password:</label>
        <input className="input" type="password" autoComplete="on" name="password" value={values.password} />
    </div>
    <br />
    <button className="submit" onClick={handleformsubmit}>REGISTER</button>
  </form>
  </div>
  </div>
  );
};

export default Registerform;