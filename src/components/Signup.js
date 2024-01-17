import React,{useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Signup = () => {
  const [credentials, setCredentials] = useState({ name:"",email: "", password: "" });
  let history=useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password}=credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0ZGJhYzM4YWU0YTViZDMxNWViZjA3In0sImlhdCI6MTY5OTU5Mjg5OX0.8fN9FNPtaLsv2Py6wFVLm5krswkpXvyK1841C5s4PCs",
      },
      body: JSON.stringify({
        name,email,password
      }),
    });
    const json = await response.json();
    console.log(json);
    
      // save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
    
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
           Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          </div>
        <div className="mb-3">
          <label htmlFor="email"className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange} minLength={5} required
          />
          </div>
          <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onChange} minLength={5} required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
