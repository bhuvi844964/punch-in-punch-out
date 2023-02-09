import React , { useEffect , useState} from 'react';
import '../components/profile.css'
import {useParams} from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



const ProfileId = ({attend}) => {

  console.log(attend)

const id = useParams().id;

let [user, setUser] = useState(attend)

console.log(user)


 console.log(localStorage.getItem('id'))
      

  return (
    <>
  
  <div className="container">
  <table className="rwd-table">
    <tbody>
    <tr>
    <th>Date</th>
    <th>In Time</th>
    <th>Out Time</th>
  </tr>
  { localStorage.getItem('id') == id && 
<tr>
      <td >{localStorage.getItem("date")}</td>
       <td >{localStorage.getItem("punchIn")}</td>
       <td >{localStorage.getItem("punchOut")}</td>
</tr>
  }
    </tbody>
  </table>
</div>
 
    
    {attend.map((person) => {
      const { id, Date ,PunchIn , PunchOut  } = person;
      if(id == localStorage.getItem("id") ){
      return (
        <div className="container">
           <table className="rwd-table">
             <tbody>
            
                 <tr>
                 <td >{Date}</td>
                 <td >{PunchIn}</td>
                 <td >{PunchOut}</td>
                 

               </tr>
             </tbody>
           </table>
         </div>

      );
      }else{ return }
    })}

   



    </>
  )
}

export default ProfileId


// { id !== localStorage.getItem("id") &&
// <div  className='pop'>
//   <Popup  open={id !== localStorage.getItem("id")} position="right center">
//     <h1 className='size'>Login please !!</h1>
//   </Popup>
//   </div>

// }

// {attend && attend[0] &&
  // <div className="container">
  //  <h1>{attend[0].name}</h1>
  //     <table className="rwd-table">
  //       <tbody>
  //         <tr>
  //           <th>Date</th>
  //           <th>In Time</th>
  //           <th>Out Time</th>
  //         </tr>
  //           <tr>
  //           <td data-th="Invoice Date">{attend[0].Date}</td>
  //           <td data-th="Due Date">{attend[0].PunchIn}</td>
  //           <td data-th="Net Amount">{attend[0].PunchOut}</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   </div>
// }










