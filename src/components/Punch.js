import React, { useState, useEffect } from 'react';
import img from '../punch.webp'
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useParams} from 'react-router-dom';

const Punch = () => {

 
  const [user, setUser] = useState([{}]);


  const [toggle, setToggle] = useState(true)
  const [toggleOut, setToggleOut] = useState(true)
  const date = new Date().toLocaleDateString();
  const punchIntime = new Date().toLocaleTimeString();
  const punchOuttime = new Date().toLocaleTimeString();

 
  const id = useParams().id;

  localStorage.setItem('date', date);

  

  useEffect(() => {

  user.date =  localStorage.getItem('date')
  user.punchIn =  localStorage.getItem('punchIn')
  user.punchOut = localStorage.getItem('punchOut')
  user.id = localStorage.getItem('id')

  }, []);



  useEffect(() => {
    if (user.length > 0){
      user.push(localStorage.setItem('user', JSON.stringify(user)))
    }

  }, [user]);
 
  

  console.log(localStorage.getItem('user'))


  function onLinkClickIn(e) {
 
    e.preventDefault();
   
    localStorage.setItem('punchIn', punchIntime);

    setToggle(!toggle)  
   
    

 }

  function onLinkClickOut(e) {
 
    e.preventDefault();

    localStorage.setItem('punchOut', punchOuttime);

      setToggleOut(!toggleOut)
    
 }



  return (


<>

    <div className="container">
  
  <h1>Attendance Punching <i className="fas fa-user-clock"></i>Machine</h1>
  
  <div className="row col-12">
  <img src={img} alt='imgg'/>
    <div id="buttons" className="col-5">
    
      <button  onClick={onLinkClickIn} id="punch" className="btn btn-success col-12">
        <div id="now">
          <span id="date">{date}</span><br/>
        </div>
        <div id="punch-in">
          <div>Punch In</div>
        </div>
        </button>
    </div>
   
    <div id="buttons" className="col-5">
    
      <button  onClick={onLinkClickOut} id="punch" className="btn btn-danger col-12">
        <div id="now">
          <span id="date">{date}</span><br/>
        </div>
        <div id="punch-in">
          <div>Punch Out</div> 
        </div>
        </button>
    </div>
    
    {!toggle && toggleOut && (
    <div id="display" className="col-6">
      <table className="col-12">
        <tr>
          <th>Punch Successful</th>
          
        </tr>
      </table>
    </div> 
    )}
    {!toggleOut && (
    <div id="display" className="col-6">
      <table className="col-12">
        <tr>
          <th>Punch Out Successful</th>
        </tr>
      </table>
    </div> 
    )}

  </div> 
</div>
  
</>     
  )
    
}

export default Punch



// { id !== localStorage.getItem("id") &&
// <div  className='pop'>
//   <Popup  open={id !== localStorage.getItem("id")} position="right center">
//     <h1 className='size'>Login please !!</h1>
//   </Popup>
//   </div>

// }