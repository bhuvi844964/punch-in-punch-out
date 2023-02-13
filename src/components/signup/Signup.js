import axios from 'axios';
import "./Signup.css"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Signup = () => {

    let navigate = useNavigate()

    let [isClicked, setIsClicked] = useState(false);

    let [file,setFile] = useState("")

    let [signupDetails, setSignupDetails] = useState({
          name: "",
          email: "",
          password: "",
          designation: ""
    })



    const handleChange = (e) => {
        let {name, value} = e.target
        setSignupDetails({...signupDetails, [name]: value})
    }
  

    const handlePhoto = (event)=>{
        setFile(event.target.files[0])
        console.log(event.target.files[0])
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        let form = new FormData()
        
        form.append("name",signupDetails.name)
        form.append("email",signupDetails.email)
        form.append("password",signupDetails.password)
        form.append("designation",signupDetails.designation)
        form.append("profileImage",file)


        const config = {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }


        axios.post("/registration",form, config).then(res => {
            console.log(res.data)
            alert("Registered Successfully")
            navigate("/login")

        }).catch(error => {
            alert(error.response.data.message)
        })
    }
  return (
    <div className='signup-container'>
        <div className='signup-form'>
            <h1>Sign Up</h1>
           
            <input onChange={handleChange} type='text' name='name' placeholder='Full Name' value={signupDetails.name}/>
            <input onChange={handleChange} type='text' name='email' placeholder='Email' value={signupDetails.email}/>
            <input onChange={handleChange} type='text' name='designation' placeholder='designation' value={signupDetails.designation}/>
            <input onChange={handleChange} type='password' name='password' placeholder='Password' value={signupDetails.password}/>
            <input onChange={handlePhoto} type='file' name='profileImage'/>
            {!isClicked?<Link to="/login">Already Registered?</Link>:<Link to="/signup" onClick={()=>setIsClicked(!isClicked)} >Back</Link> }
            
            {!isClicked?<button onClick={()=>setIsClicked(!isClicked)} >Register</button>:<button onClick={handleSubmit} >Register</button>}
        </div>
    </div>
  )
}

export default Signup





