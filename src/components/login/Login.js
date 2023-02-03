import React, { useEffect, useState  } from "react";
import { useNavigate} from "react-router-dom";


import "./Login.css";

const Login = ({people}) => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
 
  const [password, setPassword] = useState("");




  const loginUser =  (e) => {
  
   e.preventDefault()
    console.log(people)



    let invalidUser = false

     for(let i=0; i<=people.length; i++){

       
        if (people[i].email === email && people[i].password === password ) {

            if(!invalidUser === true){

                navigate("/list")
            }
       
        } 
   
    } 
    
    if(!invalidUser){
        alert("user not found")

    }



  };



  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
        />
        <button className="login-button" onClick={loginUser}>
          Login
        </button>
      </div>
    </div>
  );
  }


export default Login