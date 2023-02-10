import React, { useState, useEffect } from 'react';
import img from '../punch.webp'
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
         localStorage.setItem('user', JSON.stringify(user))
        //  user.push(localStorage.setItem('user', JSON.stringify(user))) 
      }

      
  }, [user]);
 
  

  console.log(user)



if(localStorage.getItem('punchIn') && localStorage.getItem('punchOut') ){
  const pIntime = localStorage.getItem('punchIn')

  const pOuttime = localStorage.getItem('punchOut')
 
  function time_diff(pIntime, pOuttime) 
  {
    var t1parts = pOuttime.split(':');    
    var t1cm=Number(t1parts[0])*60+Number(t1parts[1]);
  
    var t2parts = pIntime.split(':');    
    var t2cm=Number(t2parts[0])*60+Number(t2parts[1]);

    var hour =Math.floor((t1cm-t2cm)/60); 
    var min=Math.floor((t1cm-t2cm)%60);    
    return (hour+':'+min+':00'); 
  }

   let sessionHour = time_diff(pIntime,pOuttime)
  
console.log(time_diff(pIntime,pOuttime));


   localStorage.setItem('session' , sessionHour );
}else{

}

  







  function onLinkClickIn(e) {
 
    e.preventDefault();
 
   if(localStorage.getItem('punchIn')){


   }else{
    localStorage.setItem('punchIn', punchIntime);
   }
    setToggle(!toggle)  
   
 }

  function onLinkClickOut(e) {
 
    e.preventDefault();


    if(localStorage.getItem('punchOut')){

    
    }else{

    localStorage.setItem('punchOut', punchOuttime);

    }


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
      {!localStorage.getItem('punchIn')&&
        <tr>
          <th>Punch Successful</th>
          {localStorage.getItem('punchIn')&&
          <th>Already Punch</th>
    }
        </tr>
    }
    
 
      </table>
    </div> 
    )}
    {!toggleOut && (
    <div id="display" className="col-6">
      <table className="col-12">
      {!localStorage.getItem('punchOut')&&
        <tr>
          <th>Punch Successful</th>
          {localStorage.getItem('punchOut')&&
          <th>Already Punch</th>
    }
        </tr>
    }

      </table>
    </div> 
    )}

  </div> 
</div>
  
</> 
)   
}

export default Punch

