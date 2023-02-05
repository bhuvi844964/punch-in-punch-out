import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate} from "react-router-dom";
import "./Login.css";

function Login({ people }) {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const { register, handleSubmit, formState: { errors }, } = useForm();


  const loginUser = (e) => {

e.preventDefault()

    console.log(people)


    for(let i=0; i<=people.length; i++){
      if (people[i].email === email && people[i].password === password ) {
              navigate("/list")
               break
      } else if (people[i].email !== email && people[i].password !== password){
alert("Invalid User")
break
      }else{
        console.log("error")
      }
   
  }
}

  return (
    <form onSubmit={handleSubmit((people) => console.log(people))}>
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
      <input {...register('email', { required: true })} name="email"
        placeholder="Email"
        value={email} onChange={(e) => setEmail(e.target.value)} type="text"  />
      {errors.email  && <p className="bhuvi" >Email is required.</p>}
      <input {...register('password', { required: true })} name="password"
        placeholder="Password"
        value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      {errors.password && <p className="bhuvi">Email is required.</p>}
      <button className="login-button" onClick={loginUser} >
          Login
        </button>
        </div>
    </div>
    </form>
  );
}


export default Login