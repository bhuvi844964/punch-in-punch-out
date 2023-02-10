import React , { useEffect , useState} from 'react';
import '../components/profile.css'
import {useParams , useNavigate} from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



const ProfileId = ({attend}) => {



  const navigate = useNavigate();
  console.log(attend)

const id = useParams().id;

let [user, setUser] = useState(attend)

console.log(user)

function onLogin(e) {
 
  e.preventDefault();
     navigate('/login')
}
 console.log(localStorage.getItem('id'))
  
 


  return (
    <>
  
  <div className="container">
  <table className="rwd-table">
    <tbody>
    { localStorage.getItem('Email') && 
    <tr>
    <th>Date</th>
    <th>In Time</th>
    <th>Out Time</th>
    <th>Session Hours</th>
    
  </tr>
    }
  { localStorage.getItem('id') == id && 
<tr>
      <td >{localStorage.getItem("date")}</td>
       <td >{localStorage.getItem("punchIn")}</td>
       <td >{localStorage.getItem("punchOut")}</td>
       <td >{localStorage.getItem("session")}</td>
</tr>
  }
    </tbody>
  </table>
</div>
 
    
    {attend.map((person) => {
      const { id, Date ,PunchIn , PunchOut , session } = person;
      if(id == localStorage.getItem("id") ){
      return (
        <div className="container">
           <table className="rwd-table">
             <tbody>
            
                 <tr>
                 <td >{Date}</td>
                 <td >{PunchIn}</td>
                 <td >{PunchOut}</td>
                 <td >{session}</td>
                 

               </tr>
             </tbody>
           </table>
         </div>

      );
      }else{ return }
    })}

    { id !== localStorage.getItem("id") &&
<div  className='pop'>
  <Popup  open={id !== localStorage.getItem("id")} position="right center">
    <h1 className='size'>Login please !!</h1>
  </Popup>
  <button className='bt-bhuvi' onClick={onLogin}>Go to login page</button>
  </div>

}

    </>
  )
}

export default ProfileId













