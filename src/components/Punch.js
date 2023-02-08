import React , {useState} from 'react'
import img from '../punch.webp'

const Punch = () => {

  const [punchIn, setIn] = useState("");
  const [punchOut, setOut] = useState("");
  
  const [toggle, setToggle] = useState(true)
  const [toggleOut, setToggleOut] = useState(true)
  const date = new Date().toLocaleDateString();
  const punchIntime = new Date().toLocaleTimeString();
  const punchOuttime = new Date().toLocaleTimeString();

 
  localStorage.setItem('date', date);


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
    
  )
}

export default Punch