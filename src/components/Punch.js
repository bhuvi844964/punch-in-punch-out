import React , {useState} from 'react'


const Punch = () => {

  const [punchIn, setIn] = useState("");
  
  const [toggle, setToggle] = useState(true)
  const [toggleOut, setToggleOut] = useState(true)
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  return (
    <div className="container">
  <h1>punch<i className="fas fa-user-clock"></i>time</h1>
  
  <div className="row col-12">
    
    <div id="buttons" className="col-5">
      <button  onClick={() => setToggle(!toggle)} id="punch" className="btn btn-success col-12">
        <div id="now">
          <span id="date">{date}</span><br/>
        </div>
        <div id="punch-in">
          <div>Punch In</div>
        </div>
        </button>
    </div>
    <div id="buttons" className="col-5">
      <button  onClick={() => setToggleOut(!toggleOut)} id="punch" className="btn btn-danger col-12">
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
          <th>Start Shift <spam>{time}</spam></th>
          <td></td>
        </tr>
      </table>
    </div> 
    )}
    {!toggleOut && (
    <div id="display" className="col-6">
      <table className="col-12">
        <tr>
          <th>End Shift <spam>{time}</spam></th>
          <td></td>
        </tr>
      </table>
    </div> 
    )}
  </div>
  
</div>
    
  )
}

export default Punch